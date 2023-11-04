import React, { useEffect, useState } from "react";
import PurchaseDetailsCard from "../../components/customer/PurchaseDetailsCard/PurchaseDetailsCard";
import { Grid, Container, Divider } from "@mui/material";
import Heading from "../../components/common/headings/Heading";
import Button from "../../components/common/buttons/Button";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useQueries, useQuery } from "@tanstack/react-query";
import {
    getPRItem,
    getPRconfirmation,
} from "../../axios/event/purchase_request";
import { useKeycloak } from "@react-keycloak/web";
import { PurchaseRequestItemWithDetails } from "../../types/pr";

type Cart = { id: number; quantity: number }[];

const Checkout: React.FC = () => {
    const { handleSubmit } = useForm();
    const [items, setItems] = useState<Cart>([]);
    const navigate = useNavigate();
    const { state } = useLocation();
    const { id } = useParams();
    const { keycloak } = useKeycloak();

    useEffect(() => {
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
        console.log(state)
        console.log(itemsMap)
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

    return (
        <Container maxWidth="xl">
            <Grid container direction="column">
                <Heading variant="h1" color="primary" sx={{ ml: "1rem" }}>
                    Checkout
                </Heading>
                <Grid item>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-around"
                    >
                        <Grid item xs={5}>
                            {/* <PaymentMethodsCard
                                paymentMethodFormState={formState}
                            /> */}
                        </Grid>
                        <Grid item xs={6}>
                            {prItemDetails.every((data) => data.isSuccess) && pr && (
                                <PurchaseDetailsCard
                                    prItems={prItemDetails.map(
                                        (prItem) =>
                                            prItem.data as PurchaseRequestItemWithDetails
                                    )}
                                    eventName={pr.name}
                                />
                            )}
                        </Grid>
                    </Grid>
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
                            <Button
                                type="submit"
                                variant="contained"
                                onClick={handleSubmit(
                                    (data) => {
                                        console.log("data", data);
                                    },
                                    (errors) => {
                                        console.log(errors);
                                    }
                                )}
                            >
                                Confirm Payment
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};
export default Checkout;
