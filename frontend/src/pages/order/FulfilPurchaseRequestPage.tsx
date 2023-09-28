import { useQuery } from "@tanstack/react-query";
import BreadCrumb from "../../components/event/Breadcrumb";
import EventBanner from "../../components/event/card/EventBanner";
import { getEvent } from "../../axios/event/event";
import { useParams } from "react-router-dom";
import Heading from "../../components/common/headings/Heading";
import { Box } from "@mui/material";
import FulfilPurchaseRequestTable from "../../components/event/table/FulfilPurchaseRequestTable";
import { Activity } from "../../types/activity";

const FulfilPurchaseRequestPage = () => {
    const { id } = useParams();

    const { data: event } = useQuery({
        queryKey: ["event", id],
        queryFn: () => getEvent(0),
    });

    const activities: Activity[] = [
        {
            id: "1",
            startDateTime: "02 Sep 2023 (Sat.)",
            endDateTime: "02 Sep 2023 (Sat.)",
            location: "@ Singapore Indoor Stadium",
            ticketTypes: [
                {
                    id: "1",
                    type: "Standard - Cat. A",
                    price: 50.00,
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
                    price: 25.00,
                    description: "nil",
                },
            ],
        },
    ];

    return (
        <>
            <BreadCrumb></BreadCrumb>
            {event && (
                <>
                    <Box
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
                        <Box sx={{pt:"2rem", pb:"2rem"}}>
                            <FulfilPurchaseRequestTable
                                activities={activities}
                            ></FulfilPurchaseRequestTable>
                        </Box>
                    </Box>
                </>
            )}
        </>
    );
};

export default FulfilPurchaseRequestPage;
