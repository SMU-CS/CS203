import { Grid } from "@mui/material";
import { EventDetailsType } from "../../../types/event";
import TicketPricingTable from "../table/TicketPricingTable";
import EventMaxTix from "../text/EventMaxTix";
import ActivityList from "../list/ActivityList";
import Heading from "../../common/headings/Heading";

interface TicketPricingSectionType {
    event: EventDetailsType;
}

const TicketPricingSection: React.FC<TicketPricingSectionType> = ({
    event,
}) => {
    return (
        <Grid item>
            <Grid container direction="column" gap={5}>
                <Heading color="primary" variant="h2">
                    Ticket Pricing
                </Heading>
                <Grid item>
                    <TicketPricingTable
                        activities={event.activities}
                        eventName={event.name}
                        eventVenue={event.location}
                    />
                    <ActivityList activities={event.activities} />
                    <EventMaxTix />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default TicketPricingSection;
