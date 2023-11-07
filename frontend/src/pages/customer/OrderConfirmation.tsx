import { useNavigate, useParams } from "react-router-dom";
import EventBanner from "../../components/event/banner/EventBanner";
import { useQuery } from "@tanstack/react-query";
import { getEvent } from "../../axios/event/event";
import EventBannerSkeleton from "../../components/event/banner/EventBannerSkeleton";
import { Button, Container, Grid } from "@mui/material";
import Heading from "../../components/common/headings/Heading";
import OrderConfirmationTable from "../../components/event/list/OrderConfirmationTable";
import PurchaseRequestSuccess from "../../components/pr/text/PurchaseRequestSuccess";
import EventBreadcrumb from "../../components/event/navigations/EventBreadcrumb";

const OrderConfirmation = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const { data: event } = useQuery({
        queryKey: ["eventDetails", id],
        queryFn: () => getEvent(id),
    });

    return (
        <>
            {!!event && (
                <EventBreadcrumb eventId={event.id} eventName={event.name} />
            )}
            <Container maxWidth="lg">
                <Grid container gap={7} my="3rem">
                    {!event ? (
                        <EventBannerSkeleton />
                    ) : (
                        <EventBanner event={event} />
                    )}
                    <Heading color="primary">Order Confirmation</Heading>
                    <PurchaseRequestSuccess
                        message="Your payment has been received, thank you for supporting
                    EzTix!"
                    />
                </Grid>

                <OrderConfirmationTable orderItems={[]} />

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
        </>
    );
};

export default OrderConfirmation;
