import { Box, Divider, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Heading from "../../components/common/headings/Heading";
import TabBar from "../../components/event/TabBar/TabBar";
import EventBanner from "../../components/event/card/EventBanner";
import EventDescription from "../../components/event/card/EventDescription";
import EventExchangeRefundPolicy from "../../components/event/card/EventExchangeRefundPolicy";
import EventAdmissionPolicy from "../../components/event/card/EventAdmissionPolicy";
import TicketPricing from "../../components/event/card/TicketPricing";
import WaysToBuyTickets from "../../components/event/card/WaysToBuyTickets";

const EventDetails = () => {

    const theme = useTheme(); 
    const smResponsive = useMediaQuery(theme.breakpoints.down("md"));
    const xsResponsive = useMediaQuery(theme.breakpoints.down("sm"));

    const DividerStyle = {
        width: '100%',
        margin: "16px",
    };

    return (
        <>
            <TabBar></TabBar>
            <div>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignContent: "center",
                        paddingTop: "1vh",
                        paddingInline: xsResponsive
                            ? "120px"
                            : smResponsive
                            ? "150px"
                            : "220px"
                    }}
                >

                    <EventBanner></EventBanner>

                    <Heading color="primary" variant="h2">
                        Event Details
                    </Heading>

                    <EventDescription></EventDescription>

                    <Divider light sx={DividerStyle} />

                    <Heading color="primary" variant="h2">
                        Ticket Pricing
                    </Heading>

                    <TicketPricing></TicketPricing>

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
            </div>
        </>
    );
};
export default EventDetails;