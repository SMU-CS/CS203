import { Grid, Typography } from "@mui/material";
import Heading from "../../common/headings/Heading";

interface EventDescriptionType {
    children?: string;
}

const EventDescription: React.FC<EventDescriptionType> = ({ children }) => {
    return (
        <Grid item>
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
