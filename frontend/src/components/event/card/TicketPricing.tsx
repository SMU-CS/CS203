import { Box, Container, Typography } from "@mui/material";
import { EventDetailsType } from "../../../types/event";
import TicketPricingTable from "../table/TicketPricingTable";

interface TicketPricingType {
    event: EventDetailsType;
}

const TicketPricing: React.FC<TicketPricingType> = ({ event }) => {
    return (
        <Box sx={{ fontSize: "1rem", fontFamily: "Lato" }}>
            <TicketPricingTable
                activities={event.activities}
                eventName={event.name}
                eventVenue={event.location}
            />
            <ul>
                {event.activities.map((activity) => (
                    <li>
                        <Typography variant="subtitle1">
                            {activity.startDateTime}
                        </Typography>
                        <ul>
                            {activity.ticketTypes.map((tix) => (
                                <li>
                                    <Typography variant="subtitle1">{`${
                                        tix.type
                                    }: $${tix.price.toFixed(2)}`}</Typography>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
            <Container sx={{ my: "1.5rem" }}>
                <Typography variant="subtitle1">
                    *You can only make a purchase request of maximum 4 tickets
                    in total for each event, you are left with 4 tickets for
                    this purchase request
                </Typography>
            </Container>
        </Box>
    );
};

export default TicketPricing;
