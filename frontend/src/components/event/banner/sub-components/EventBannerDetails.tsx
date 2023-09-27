import React from "react";
import { EventDetailsType } from "../../../../types/event";
import { Grid, Box, Typography } from "@mui/material";

interface EventBannerDetailsProps {
    event: EventDetailsType;
}

const EventBannerDetails: React.FC<EventBannerDetailsProps> = ({ event }) => {
    return (
        <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
            gap={4}
        >
            <Box
                bgcolor={({ palette }) => palette.primary.light}
                width="90px"
                height="10px"
            />
            <Grid item>
                <Grid container direction="column" alignItems="center">
                    <Typography variant="body1" fontWeight="bold">
                        {event.name}
                    </Typography>
                    <Typography variant="body2">
                        {`${event.start_datetime} ~ ${event.end_datetime}`}
                    </Typography>
                </Grid>
            </Grid>

            <Box
                bgcolor={({ palette }) => palette.primary.dark}
                width="60px"
                height="10px"
            />
        </Grid>
    );
};

export default EventBannerDetails;
