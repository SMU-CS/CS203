import { useNavigate, useParams } from "react-router-dom";
import EventBanner from "../../components/event/banner/EventBanner";
import { useQuery } from "@tanstack/react-query";
import EventBannerSkeleton from "../../components/event/banner/EventBannerSkeleton";
import { Button, Container, Grid } from "@mui/material";
import Heading from "../../components/common/headings/Heading";
import OrderConfirmationTable from "../../components/event/list/OrderConfirmationTable";
import PurchaseRequestSuccess from "../../components/pr/text/PurchaseRequestSuccess";
import EventBreadcrumb from "../../components/event/navigations/EventBreadcrumb";
import { getOrderByPRId } from "../../axios/order/order";
import { formatDateToDateWithDay } from "../../functions/formatter";
import { EventDetailsType } from "../../types/event";
import { useKeycloak } from "@react-keycloak/web";

const OrderConfirmation = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { keycloak } = useKeycloak();

    const { data: order } = useQuery({
        queryKey: ["orderByPR", id],
        queryFn: () => getOrderByPRId(id, keycloak.token),
    });

    return (
        <>
            {!!order && (
                <EventBreadcrumb
                    eventId={order.eventId}
                    eventName={order.eventName}
                />
            )}
            <Container maxWidth="lg">
                <Grid container gap={7} my="3rem">
                    {!order ? (
                        <EventBannerSkeleton />
                    ) : (
                        <EventBanner
                            event={
                                {
                                    id: order.eventId,
                                    name: order.eventName,
                                    category: order.eventCategory,
                                    artist: order.eventArtist,
                                    start_datetime: formatDateToDateWithDay(
                                        new Date(order.eventStartTime)
                                    ),
                                    end_datetime: formatDateToDateWithDay(
                                        new Date(order.eventEndTime)
                                    ),
                                    bannerURL: order.eventBannerURL,
                                    seatMapURL: order.eventSeatMapURL,
                                    location: order.eventLocation,
                                } as EventDetailsType
                            }
                        />
                    )}
                    <Heading color="primary">Order Confirmation</Heading>
                    <PurchaseRequestSuccess
                        message="Your payment has been received, thank you for supporting
                    EzTix!"
                    />
                </Grid>

                {!!order && (
                    <OrderConfirmationTable orderItems={order?.orderItems} />
                )}
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
