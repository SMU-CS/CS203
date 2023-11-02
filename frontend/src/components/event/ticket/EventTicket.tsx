import { Grid, Typography } from "@mui/material";
import { EventDetailsType } from "../../../types/event";
import EventTicketImg from "./EventTicketImg";
import Heading from "../../common/headings/Heading";

interface EventTicketProps {
    event: EventDetailsType;
}

const EventTicket: React.FC<EventTicketProps> = ({ event }) => {
    return (
        <Grid container direction="column" gap={3}>
            <Grid item>
                <Heading color="primary" variant="h2">
                    View Ticket
                </Heading>
            </Grid>
            <Grid item>
                <Grid container direction="row" justifyContent="center">
                    <Grid
                        item
                        sx={{
                            width: { xs: "90%", sm: "80%", md: "70%" },
                        }}
                    >
                        <EventTicketImg url={event.bannerURL} />
                    </Grid>
                </Grid>
                <Grid container direction="row" justifyContent="center">
                    <Grid item>
                        <Typography variant="body2" fontWeight="bold">
                            Present this QR code to the staffs during the event
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default EventTicket;
