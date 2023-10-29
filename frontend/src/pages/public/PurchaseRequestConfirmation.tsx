import React from "react";
import EventBanner from "../../components/event/banner/EventBanner";
import Heading from "../../components/common/headings/Heading";
import { Container, Box, Grid } from "@mui/material";
// import SalesRoundStepper from "../../components/event/stepper/SalesRoundStepper";
import PurchaseRequestSuccess from "../../components/pr/text/PurchaseRequestSuccess";
import PurchaseRequestItem from "../../components/pr/text/PurchaseRequestItem";
import Button from "../../components/common/buttons/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getPRconfirmation } from "../../axios/event/purchase_request";
import { EventDetailsType } from "../../types/event";
import { useKeycloak } from "@react-keycloak/web";
import { formatDateToDateWithDay } from "../../functions/formatter";

const PurchaseRequestConfirmation: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { keycloak } = useKeycloak();

    const { data: pr } = useQuery({
        queryKey: ["prConfirmation", id],
        queryFn: () => getPRconfirmation(id, keycloak.token),
    });

    return (
        !!pr && (
            <Container maxWidth="md">
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
                <Heading variant="h1" color="primary">
                    Purchase Request Confirmation
                </Heading>
                <Box py="3rem">
                    {/* <SalesRoundStepper salesrounds={salesrounds} /> */}
                </Box>
                <PurchaseRequestSuccess message="Your Purchase Request has been successfully submitted!" />
                <Grid container my="2rem">
                    {pr.purchaseRequest.purchaseRequestItems.map((item) => (
                        <PurchaseRequestItem
                            key={item.ticketType}
                            item={item}
                            location={pr.location}
                        />
                    ))}
                </Grid>
                <Grid
                    my="4rem"
                    container
                    display="flex"
                    direction="row-reverse"
                >
                    <Button
                        onClick={() => navigate("/")}
                        variant="contained"
                        color="primary"
                    >
                        Browse Other Events
                    </Button>
                </Grid>
            </Container>
        )
    );
};

export default PurchaseRequestConfirmation;
