import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import Heading from "../../components/common/headings/Heading";
import {
    Button,
    Grid,
    Divider,
    Container,
    Box,
    Typography,
} from "@mui/material";
import EventBanner from "../../components/event/banner/EventBanner";
import OrderConfirmationTable from "../../components/event/list/OrderConfirmationTable";
import PurchaseRequestSuccess from "../../components/pr/text/PurchaseRequestSuccess";
import ViewTicketTable from "../../components/event/table/ViewTicketTable";
import { useKeycloak } from "@react-keycloak/web";
import { EventDetailsType } from "../../types/event";
import { getOrderById } from "../../axios/order/order";
import { formatDateToDateWithDay } from "../../functions/formatter";
import QRCode from "../../assets/illustrations/QRCode.png";
import EventBreadcrumb from "../../components/event/navigations/EventBreadcrumb";

interface ViewTicketPageProps {
    isRecurring: boolean;
}

const ViewTicketPage: React.FC<ViewTicketPageProps> = ({ isRecurring }) => {
    const { id } = useParams();
    const { keycloak } = useKeycloak();
    const navigate = useNavigate();

    const { data: order } = useQuery({
        queryKey: ["order", id],
        queryFn: () => getOrderById(id, keycloak.token),
    });

    return (
        <>
            {order && (
                <>
                    {!!order && (
                        <EventBreadcrumb
                            eventId={order.eventId}
                            eventName={order.eventName}
                        />
                    )}
                    <Container sx={{ mt: "3rem" }} maxWidth="md">
                        <Grid direction="column" alignContent="center">
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

                            {isRecurring && (
                                <>
                                    <Grid
                                        container
                                        rowGap={3}
                                        sx={{ py: "2rem" }}
                                    >
                                        <Heading color="primary" variant="h2">
                                            View Ticket
                                        </Heading>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                flexDirection: "column",
                                            }}
                                        >
                                            <img src={QRCode} width="30%" />
                                            <Typography
                                                variant="body2"
                                                fontWeight="bold"
                                            >
                                                Present this QR code to the
                                                staffs during the event day
                                            </Typography>
                                        </Box>
                                        <ViewTicketTable
                                            orderItems={order.orderItems}
                                        />
                                    </Grid>
                                    <Grid item sx={{ py: "2rem" }}>
                                        <Divider />
                                    </Grid>
                                </>
                            )}
                            <Grid item>
                                <Grid container gap={7} my="3rem">
                                    <Heading variant="h2" color="primary">
                                        Purchase History
                                    </Heading>
                                    <PurchaseRequestSuccess
                                        message={
                                            isRecurring
                                                ? "Your already paid for the ticket, thank you for supporting EzTix!"
                                                : "We hope you’ve enjoyed the event, thank you for supporting EzTix!"
                                        }
                                    />
                                </Grid>
                            </Grid>
                            <Grid item>
                                <OrderConfirmationTable
                                    orderItems={order.orderItems}
                                />
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
                </>
            )}
        </>
    );
};

export default ViewTicketPage;
