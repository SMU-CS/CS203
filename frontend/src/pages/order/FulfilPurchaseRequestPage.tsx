import { useQuery } from "@tanstack/react-query";
import BreadCrumb from "../../components/event/Breadcrumb";
import EventBanner from "../../components/event/card/EventBanner";
import { getEvent } from "../../axios/event/event";
import { useParams } from "react-router-dom";
import Heading from "../../components/common/headings/Heading";
import { Grid } from "@mui/material";
import FulfilPurchaseRequestTable from "../../components/event/table/FulfilPurchaseRequestTable";
import { Activity } from "../../types/activity";

const FulfilPurchaseRequestPage = () => {
    const { id } = useParams();

    const { data: event } = useQuery({
        queryKey: ["event", id],
        queryFn: () => getEvent(0),
    });
    
    console.log(event)

    const activities: Activity[] = [
        {
            id: "" + event?.id,
            startDateTime: "" + event?.start_datetime,
            endDateTime: "" + event?.end_datetime,
            location: "" + event?.location,
            ticketTypes: [
                {
                    id: "1",
                    type: "Standard - Cat. A",
                    price: 50.0,
                    description: "nil",
                },
            ],
        },
        {
            id: "2",
            startDateTime: "03 Sep 2023 (Sat.)",
            endDateTime: "03 Sep 2023 (Sat.)",
            location: "@ Singapore Indoor Stadium",
            ticketTypes: [
                {
                    id: "2",
                    type: "Standard - Cat. B",
                    price: 25.0,
                    description: "nil",
                },
            ],
        },
    ];

    return (
        <>
            <BreadCrumb />
            {event && (
                <>
                    <Grid
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignContent: "center",
                            paddingTop: "1vh",
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
                                activities={activities}
                            ></FulfilPurchaseRequestTable>
                        </Grid>
                    </Grid>
                </>
            )}
        </>
    );
};

export default FulfilPurchaseRequestPage;
