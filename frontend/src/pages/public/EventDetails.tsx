import { useEffect } from "react";
import { Container, Grid } from "@mui/material";
import TabBar from "../../components/event/TabBar/TabBar";
import EventBanner from "../../components/event/banner/EventBanner";
import EventDescription from "../../components/event/text/EventDescription";
import EventExchangeRefundPolicy from "../../components/event/text/EventExchangeRefundPolicy";
import EventAdmissionPolicy from "../../components/event/text/EventAdmissionPolicy";
import TicketPricing from "../../components/event/section/TicketPricingSection";
import WaysToBuyTickets from "../../components/event/text/WaysToBuyTickets";
import Breadcrumb from "../../components/event/Breadcrumb";
import { useQuery } from "@tanstack/react-query";
import { getEvent } from "../../axios/event/event";
import { useParams } from "react-router";
import { useTitle } from "../../custom-hooks/useTitle";
import SectionDivider from "../../components/event/layout/divider/SectionDivider";

const EventDetails = () => {
    const [setTitle] = useTitle("Event Details");
    const { id } = useParams();

    const { data: event } = useQuery({
        queryKey: ["eventDetails", id],
        queryFn: () => getEvent(id),
    });

    useEffect(() => {
        setTitle(event?.name || "Event not Found!");
    }, [event?.name, setTitle]);

    return (
        <>
            <TabBar />
            <Breadcrumb />
            {event && (
                <Container maxWidth="lg">
                    <Grid container gap={7} my="3rem">
                        <EventBanner event={event} />
                        <EventDescription>{event.description}</EventDescription>
                        <SectionDivider />
                        <TicketPricing event={event}></TicketPricing>
                        <SectionDivider />
                        <EventExchangeRefundPolicy />
                        <SectionDivider />
                        <EventAdmissionPolicy />
                        <SectionDivider />
                        <WaysToBuyTickets />
                    </Grid>
                </Container>
            )}
        </>
    );
};
export default EventDetails;
