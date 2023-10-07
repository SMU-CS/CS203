import { Grid, Typography } from "@mui/material";
import Heading from "../../common/headings/Heading";
import EventTabAnchor from "../TabBar/EventTabAnchor";
import React from "react";

interface EventDescriptionType {
    children?: string;
}

const EventDescription: React.FC<EventDescriptionType> = ({ children }) => {
    return (
        <Grid item>
            <EventTabAnchor id="description" />
            <Grid container direction="column" gap={5}>
                <Heading color="primary" variant="h2">
                    Event Details
                </Heading>
                <Typography variant="subtitle1">{children}</Typography>
            </Grid>
        </Grid>
    );
};

export default EventDescription;
