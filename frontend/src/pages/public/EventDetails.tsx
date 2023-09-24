import { Box, Divider } from "@mui/material";
import Heading from "../../components/common/headings/Heading";
import TabBar from "../../components/event/TabBar/TabBar";
import EventBanner from "../../components/event/card/EventBanner";
import EventDescription from "../../components/event/card/EventDescription";
import EventExchangeRefundPolicy from "../../components/event/card/EventExchangeRefundPolicy";
import EventAdmissionPolicy from "../../components/event/card/EventAdmissionPolicy";
import TicketPricing from "../../components/event/card/TicketPricing";
import WaysToBuyTickets from "../../components/event/card/WaysToBuyTickets";
import Breadcrumb from "../../components/event/Breadcrumb";
import { useQuery } from "@tanstack/react-query";
import { getEvent } from "../../axios/event/event";
import { useParams } from "react-router";

const EventDetails = () => {
    const { id } = useParams();

    const { data: event } = useQuery({
        queryKey: ["eventDetails", id],
        queryFn: () => getEvent(id),
    });

    const DividerStyle = {
        width: "100%",
        margin: "16px",
    };

    return (
        <>
            <TabBar />
            <Breadcrumb />
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
                {event && (
                    <>
                        <EventBanner event={event} />
                        <Heading color="primary" variant="h2">
                            Event Details
                        </Heading>
                        <EventDescription>{event.description}</EventDescription>
                        <Divider light sx={DividerStyle} />
                        <Heading color="primary" variant="h2">
                            Ticket Pricing
                        </Heading>
                        <TicketPricing event={event}></TicketPricing>
                    </>
                )}

                <Divider light sx={DividerStyle} />

                <Heading color="primary" variant="h2">
                    Exchange & Refund Policy Details
                </Heading>

                <EventExchangeRefundPolicy></EventExchangeRefundPolicy>

                <Divider light sx={DividerStyle} />

                <Heading color="primary" variant="h2">
                    Admission Policy
                </Heading>

                <EventAdmissionPolicy></EventAdmissionPolicy>

                <Divider light sx={DividerStyle} />

                <Heading color="primary" variant="h2">
                    Ways To Buy Tickets
                </Heading>

                <WaysToBuyTickets></WaysToBuyTickets>
            </Box>
        </>
    );
};
export default EventDetails;
