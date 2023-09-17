import { Box, Divider } from "@mui/material";
import Heading from "../../components/common/headings/Heading";
import TabBar from "../../components/event/TabBar/TabBar";
import EventBanner from "../../components/event/card/EventBanner";
import EventDescription from "../../components/event/card/EventDescription";
import EventExchangeRefundPolicy from "../../components/event/card/EventExchangeRefundPolicy";

const EventDetails = () => {
    return (
        <>
            <TabBar></TabBar>
            <div>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        paddingTop: "1vh",
                    }}
                >
                    <EventBanner></EventBanner>

                    <Heading color="primary" fontSize={"4vh"}>
                        Event Details
                    </Heading>

                    <EventDescription></EventDescription>

                    <Divider light sx={{ width: "50%", margin: "16px" }} />

                    <Heading color="primary" fontSize={"4vh"}>
                        Exchange & Refund Policy Details
                    </Heading>

                    <EventExchangeRefundPolicy></EventExchangeRefundPolicy>
                </Box>
            </div>
        </>
    );
};
export default EventDetails;
