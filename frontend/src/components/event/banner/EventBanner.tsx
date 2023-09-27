import { Grid } from "@mui/material";
import { EventDetailsType } from "../../../types/event";
import EventBannerImg from "./sub-components/EventBannerImg";
import EventBannerDetails from "./sub-components/EventBannerDetails";

interface EventBannerProps {
    event: EventDetailsType;
}

const EventBanner: React.FC<EventBannerProps> = ({ event }) => {
    return (
        <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
            gap={3}
        >
            <Grid item sx={{ width: { xs: "90%", sm: "80%", md: "70%" } }}>
                <EventBannerImg url={event.bannerURL} />
            </Grid>
            <Grid item>
                <EventBannerDetails event={event} />
            </Grid>
        </Grid>
    );
};

export default EventBanner;
