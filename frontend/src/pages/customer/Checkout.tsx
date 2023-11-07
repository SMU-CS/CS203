import React, { useEffect, useState } from "react";
import PurchaseDetailsCard from "../../components/customer/PurchaseDetailsCard/PurchaseDetailsCard";
import { Grid, Container, Divider } from "@mui/material";
import Heading from "../../components/common/headings/Heading";
import Button from "../../components/common/buttons/Button";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useMutation, useQueries, useQuery } from "@tanstack/react-query";
import {
    getPRItem,
    getPRconfirmation,
} from "../../axios/event/purchase_request";
import { useKeycloak } from "@react-keycloak/web";
import { PurchaseRequestItemWithDetails } from "../../types/pr";
import { Cart, StripeCart } from "../../types/cart";
import { formatDateToDateWithDay } from "../../functions/formatter";
import { checkout } from "../../axios/order/order";

const Checkout: React.FC = () => {
    const [items, setItems] = useState<Cart>([]);
    const navigate = useNavigate();
    const { state } = useLocation();
    const { id } = useParams();
    const { keycloak } = useKeycloak();

    useEffect(() => {
        if (!state) {
            navigate(`/fulfil/${id}`);
        }
        const itemsMap = new Map<string, number>();
        Object.keys(state).forEach((key: string) => {
            const itemId = key.split("-")[1];
            if (!!state[key]) {
                itemsMap.has(itemId)
                    ? itemsMap.set(itemId, (itemsMap.get(itemId) as number) + 1)
                    : itemsMap.set(itemId, 1);
            }
        });

        const itemsAry: Cart = [];
        itemsMap.forEach((value, key) =>
            itemsAry.push({ id: parseInt(key), quantity: value })
        );
        setItems(itemsAry);
    }, [state]);

    const prItemDetails = useQueries({
        queries: items.map(({ id, quantity }) => ({
            queryKey: [`transaction-${id}`, items],
            queryFn: () => getPRItem(id.toString(), quantity, keycloak.token),
        })),
    });

    const { data: pr } = useQuery({
        queryKey: ["event_pr", id],
        queryFn: () => getPRconfirmation(id, keycloak.token),
    });

    const checkoutReq = useMutation({
        mutationFn: (cart: StripeCart) => checkout(cart, keycloak.token),
    });

    return (
        <Container maxWidth="xl">
            <Grid pt="3rem" container direction="column">
                <Heading variant="h1" color="primary" sx={{ ml: "1rem" }}>
                    Checkout
                </Heading>
                <Grid item>
                    <Container maxWidth="md">
                        {prItemDetails.every((data) => data.isSuccess) &&
                            pr && (
                                <PurchaseDetailsCard
                                    prItems={prItemDetails.map(
                                        (prItem) =>
                                            prItem.data as PurchaseRequestItemWithDetails
                                    )}
                                    eventName={pr.name}
                                />
                            )}
                    </Container>
                </Grid>
                <Divider />
                <Grid item>
                    <Grid
                        container
                        direction="row"
                        justifyContent="flex-end"
                        gap={3}
                        sx={{ my: "1.5rem" }}
                    >
                        <Grid item>
                            <Button
                                variant="contained"
                                color="inherit"
                                onClick={() => navigate("fulfil/:id")}
                            >
                                Return to Previous Page
                            </Button>
                        </Grid>
                        <Grid item>
                            {prItemDetails.every((data) => data.isSuccess) &&
                                pr &&
                                id && (
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        onClick={() => {
                                            const itemDetails =
                                                prItemDetails.map(
                                                    (prItem) =>
                                                        prItem.data as PurchaseRequestItemWithDetails
                                                );

                                            const url = import.meta.env.DEV
                                                ? "http://localhost:3000/"
                                                : "http://eztix.netlify.app";
                                            const data: StripeCart = {
                                                eventTitle: pr.name,
                                                bannerURL: pr.bannerURL,
                                                eventId: pr.id,
                                                purchaseRequestId: parseInt(id),
                                                products: items.map(
                                                    (product) => {
                                                        const itemDetail =
                                                            itemDetails.find(
                                                                (item) =>
                                                                    item.id ===
                                                                    product.id
                                                            );

                                                        if (!itemDetail) {
                                                            navigate(
                                                                `/fulfil/${id}`
                                                            );
                                                            throw new Error(
                                                                "An error has occured when proceeding to checkout, please submit your request again!"
                                                            );
                                                        }
                                                        return {
                                                            ticketType:
                                                                itemDetail.ticketType,
                                                            unitPrice:
                                                                itemDetail.price,
                                                            quantity:
                                                                product.quantity,
                                                            dateTime:
                                                                formatDateToDateWithDay(
                                                                    new Date(
                                                                        itemDetail.eventStartDateTime
                                                                    )
                                                                ),
                                                            ticketId:
                                                                itemDetail.id,
                                                        };
                                                    }
                                                ),
                                                successURL: `${url}order/${id}`,
                                                failureURL: `${url}fulfil/${id}`,
                                            };

                                            checkoutReq.mutate(data);
                                        }}
                                    >
                                        Confirm Payment
                                    </Button>
                                )}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};
export default Checkout;
