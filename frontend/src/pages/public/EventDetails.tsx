import { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import TabBar, {
    EventTabsType,
} from "../../components/event/TabBar/EventTabBar";
import EventBanner from "../../components/event/banner/EventBanner";
import EventDescription from "../../components/event/text/EventDescription";
import EventExchangeRefundPolicy from "../../components/event/text/EventExchangeRefundPolicy";
import EventAdmissionPolicy from "../../components/event/text/EventAdmissionPolicy";
import TicketPricing from "../../components/event/section/TicketPricingSection";
import WaysToBuyTickets from "../../components/event/text/WaysToBuyTickets";
import EventBreadcrumb from "../../components/event/navigations/EventBreadcrumb";
import { useQuery } from "@tanstack/react-query";
import { getEvent } from "../../axios/event/event";
import { useParams } from "react-router";
import { useTitle } from "../../custom-hooks/useTitle";
import SectionDivider from "../../components/event/layout/divider/SectionDivider";
import EventBannerSkeleton from "../../components/event/banner/EventBannerSkeleton";
import { InView } from "react-intersection-observer";

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

    const [activeTab, setActiveTab] = useState<EventTabsType>("pricing");

    return (
        <>
            <TabBar active={activeTab} />
            {event && <EventBreadcrumb page="event-details" event={event} />}

            <Container maxWidth="lg">
                <Grid container gap={7} my="3rem">
                    {!event ? (
                        <>
                            <EventBannerSkeleton />
                        </>
                    ) : (
                        <>
                            <InView
                                as="div"
                                onChange={(inview) => {
                                    if (inview) setActiveTab("description");
                                }}
                            >
                                <EventBanner event={event} />
                                <EventDescription>
                                    {event.description}
                                </EventDescription>
                            </InView>

                            <SectionDivider />
                            <InView
                                as="div"
                                onChange={(inview) => {
                                    if (inview) setActiveTab("pricing");
                                }}
                            >
                                <TicketPricing event={event} />
                            </InView>
                        </>
                    )}
                    <SectionDivider />
                    <InView
                        as="div"
                        onChange={(inview) => {
                            if (inview) setActiveTab("exchange");
                        }}
                    >
                        <EventExchangeRefundPolicy />
                    </InView>

                    <SectionDivider />
                    {event && (
                        <>
                            <InView
                                as="div"
                                onChange={(inview) => {
                                    if (inview) setActiveTab("admission");
                                }}
                            >
                                <EventAdmissionPolicy
                                    policies={event.admissionPolicies}
                                />
                            </InView>

                            <SectionDivider />
                        </>
                    )}
                    <InView
                        as="div"
                        onChange={(inview) => {
                            if (inview) setActiveTab("ways");
                        }}
                    >
                        <WaysToBuyTickets />
                    </InView>
                </Grid>
            </Container>
        </>
    );
};
export default EventDetails;
