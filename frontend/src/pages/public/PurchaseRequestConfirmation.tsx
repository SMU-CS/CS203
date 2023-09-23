import React from "react";
import EventBanner from "../../components/event/card/EventBanner";
import Heading from "../../components/common/headings/Heading";
import { Container, Box, Grid } from "@mui/material";
import SalesRoundStepper from "../../components/event/stepper/SalesRoundStepper";
import PurchaseRequestSuccess from "../../components/pr/text/PurchaseRequestSuccess";
import PurchaseRequestItem from "../../components/pr/text/PurchaseRequestItem";
import Button from "../../components/common/buttons/Button";
import { useNavigate } from "react-router-dom";

const salesrounds = [
    {
        sales_round_id: "1",
        activity_id: "1",
        round_start: "18 Sep 2023",
        round_end: "20 Sep 2023",
        purchase_start: "20 Sep 2023",
        purchase_end: "22 Sep 2023",
        sales_type: "online",
    },
    {
        sales_round_id: "2",
        activity_id: "1",
        round_start: "20 Sep 2023",
        round_end: "22 Sep 2023",
        purchase_start: "22 Sep 2023",
        purchase_end: "24 Sep 2023",
        sales_type: "online",
    },
    {
        sales_round_id: "3",
        activity_id: "1",
        round_start: "22 Sep 2023",
        round_end: "24 Sep 2023",
        purchase_start: "24 Sep 2023",
        purchase_end: "26 Sep 2023",
        sales_type: "online",
    },
];

const transaction = [
    {
        ticket_type_id: "1",
        activity_id: "1",
        type: "Standard - Cat A",
        price: 50,
        quantity: 1,
        datetime: "02 Sep 2023 (Sat.) 06:00pm",
        location: "Singapore Indoor Stadium",
    },
    {
        ticket_type_id: "2",
        activity_id: "1",
        type: "Standard - Cat B",
        price: 20,
        quantity: 1,
        datetime: "02 Sep 2023 (Sat.) 06:00pm",
        location: "Singapore Indoor Stadium",
    },
];

const PurchaseRequestConfirmation: React.FC = () => {
    const navigate = useNavigate();

    return (
        <Container maxWidth="md">
            <EventBanner />
            <Heading variant="h1" color="primary">
                Purchase Request Confirmation
            </Heading>
            <Box py="3rem">
                <SalesRoundStepper salesrounds={salesrounds} />
            </Box>
            <PurchaseRequestSuccess />
            <Grid container my="2rem">
                {transaction.map((item) => (
                    <PurchaseRequestItem
                        key={item.ticket_type_id}
                        item={item}
                    />
                ))}
            </Grid>
            <Grid my="4rem" container display="flex" direction="row-reverse">
                <Button
                    onClick={() => navigate("/")}
                    variant="contained"
                    color="primary"
                >
                    Browse Other Events
                </Button>
            </Grid>
        </Container>
    );
};

export default PurchaseRequestConfirmation;
