import { useNavigate, useParams } from "react-router-dom";
import EventBanner from "../../components/event/banner/EventBanner";
import { useQuery } from "@tanstack/react-query";
import { getEvent } from "../../axios/event/event";
import EventBannerSkeleton from "../../components/event/banner/EventBannerSkeleton";
import { Button, Container, Grid, Typography } from "@mui/material";
import Heading from "../../components/common/headings/Heading";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import OrderConfirmationTable from "../../components/event/list/OrderConfirmationTable";

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

const OrderConfirmation = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const { data: event } = useQuery({
        queryKey: ["eventDetails", id],
        queryFn: () => getEvent(id),
    });

    return (
        <Container maxWidth="lg">
            <Grid container gap={7} my="3rem">
                {!event ? (
                    <>
                        <EventBannerSkeleton />
                    </>
                ) : (
                    <>
                        <EventBanner event={event} />
                    </>
                )}
                <Heading color="primary">Order Confirmation</Heading>
                <CheckCircleRoundedIcon color="primary" />
                <Typography
                    variant="body1"
                    fontWeight="bold"
                    sx={{ mx: "0.5rem" }}
                >
                    Your payment has been received, thank you for supporting
                    EzTix!
                </Typography>
            </Grid>

            <OrderConfirmationTable
                Transactions={transaction}
                ServiceFee={10}
                FacilityCharge={10}
            ></OrderConfirmationTable>

            <Grid container direction="row" justifyContent="flex-end">
                <Button
                    color="primary"
                    variant="contained"
                    onClick={() => navigate(`/event/`)}
                >
                    Browse Other Events
                </Button>
            </Grid>
        </Container>
    );
};

export default OrderConfirmation;
