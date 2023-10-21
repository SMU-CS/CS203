import { useQuery } from "@tanstack/react-query";
import { getEvent } from "../../axios/event/event";
import { useNavigate, useParams } from "react-router-dom";
import Heading from "../../components/common/headings/Heading";
import { Button, Grid } from "@mui/material";
import FulfilPurchaseRequestTable from "../../components/event/table/FulfilPurchaseRequestTable";
import EventBreadCrumb from "../../components/event/navigations/EventBreadcrumb";
import EventBanner from "../../components/event/banner/EventBanner";

const FulfilPurchaseRequestPage = () => {
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
                    <EventBreadCrumb page="pr-request" event={event} />
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
                        <Heading color="primary" variant="h2">
                            Fulfil Purchase Request
                        </Heading>
                        <Grid sx={{ py: "2rem" }}>
                            <FulfilPurchaseRequestTable
                                activities={event.activities}
                            ></FulfilPurchaseRequestTable>
                        </Grid>
                        <Grid sx={{ display: "flex", justifyContent: "right" }}>
                            <Button
                                color="primary"
                                variant="contained"
                                onClick={() => navigate(`/checkout/${id}`)} //update the url path to checkout page
                            >
                                Make Payment
                            </Button>
                        </Grid>
                    </Grid>
                </>
            )}
        </>
    );
};

export default FulfilPurchaseRequestPage;
