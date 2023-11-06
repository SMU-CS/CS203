import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import Heading from "../../components/common/headings/Heading";
import { Button, Container, Divider, Grid } from "@mui/material";
import EventBanner from "../../components/event/banner/EventBanner";
import { useKeycloak } from "@react-keycloak/web";
import { formatDateToDateWithDay } from "../../functions/formatter";
import { EventDetailsType } from "../../types/event";
import { getPRconfirmation } from "../../axios/event/purchase_request";
import ViewPurchaseRequestTable from "../../components/event/table/ViewPurchaseRequestTable";

interface ViewPurchaseRequestProps {
    // : string;
}

const ViewPurchaseRequest: React.FC<ViewPurchaseRequestProps> = ({}) => {
    const { id } = useParams();
    const { keycloak } = useKeycloak();
    const navigate = useNavigate();

    const { data: pr } = useQuery({
        queryKey: ["prConfirmation", id],
        queryFn: () => getPRconfirmation(id, keycloak.token),
    });

    return (
        <>
            {pr && (
                <Container sx={{ mt: "3rem" }} maxWidth="md">
                    <Grid direction="column" alignContent="center">
                        <EventBanner
                            event={
                                {
                                    id: pr.id,
                                    name: pr.name,
                                    start_datetime: formatDateToDateWithDay(
                                        new Date(pr.startDateTime)
                                    ),
                                    end_datetime: formatDateToDateWithDay(
                                        new Date(pr.endDateTime)
                                    ),
                                    description: pr.description,
                                    bannerURL: pr.bannerURL,
                                    location: pr.location,
                                } as EventDetailsType
                            }
                        />

                        <Grid container rowGap={3} sx={{ py: "2rem" }}>
                            <Heading color="primary" variant="h2">
                                View Purchase Request
                            </Heading>
                            <ViewPurchaseRequestTable
                                prItems={
                                    pr.purchaseRequest.purchaseRequestItems
                                }
                            />
                        </Grid>
                        <Grid item sx={{ py: "2rem" }}>
                            <Divider />
                        </Grid>
                        <Grid
                            container
                            direction="row"
                            justifyContent="flex-end"
                            mb="2rem"
                        >
                            <Button
                                color="primary"
                                variant="contained"
                                onClick={() => navigate(`/event/`)}
                            >
                                Browse Other Events
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            )}
        </>
    );
};

export default ViewPurchaseRequest;
