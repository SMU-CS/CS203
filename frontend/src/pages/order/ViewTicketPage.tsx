import { useQuery } from "@tanstack/react-query";
import { getEvent } from "../../axios/event/event";
import { useNavigate, useParams } from "react-router-dom";
import Heading from "../../components/common/headings/Heading";
import { Button, Grid, Divider } from "@mui/material";
import FulfilPurchaseRequestTable from "../../components/event/table/FulfilPurchaseRequestTable";
import EventBreadCrumb from "../../components/event/navigations/EventBreadcrumb";
import EventBanner from "../../components/event/banner/EventBanner";
import EventTicket from "../../components/event/ticket/EventTicket";
import OrderConfirmationTable from "../../components/event/list/OrderConfirmationTable";
import PurchaseRequestSuccess from "../../components/pr/text/PurchaseRequestSuccess";
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

const ViewTicketPage = () => {
    const { id } = useParams();

    const { data: event } = useQuery({
        queryKey: ["event", id],
        queryFn: () => getEvent(0),
    });

    const navigate = useNavigate();

    return (
        <>
            {event && (
                <>
                    <EventBreadCrumb page="view-ticket" event={event} />
                    <Grid
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignContent: "center",
                            py: "1vh",
                            paddingInline: {
                                xs: "120px",
                                sm: "150px",
                                md: "220px",
                            },
                        }}
                    >
                        <EventBanner event={event} />

                        <EventTicket event={event} />

                        <Grid sx={{ py: "2rem" }}>
                            <FulfilPurchaseRequestTable
                                activities={event.activities}
                            />
                        </Grid>
                        <Grid item sx={{ py: "2rem" }}>
                            <Divider />
                        </Grid>
                        <Grid item>
                            <Grid container gap={7} my="3rem">
                                <Heading variant="h2" color="primary">
                                    Order Confirmation
                                </Heading>
                                <PurchaseRequestSuccess
                                    message="Your payment has been received, thank you for supporting
                    EzTix!"
                                />
                            </Grid>
                        </Grid>
                        <Grid item>
                            <OrderConfirmationTable
                                Transactions={transaction}
                                ServiceFee={10}
                                FacilityCharge={10}
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
                </>
            )}
        </>
    );
};

export default ViewTicketPage;
