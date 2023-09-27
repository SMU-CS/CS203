import { Grid, List, ListItem, Typography } from "@mui/material";
import Heading from "../../common/headings/Heading";

const policies = [
    "The Organiser/Venue Owner reserves the right without refund or compensation to refuse admission/evict any person(s) whose conduct is disorderly or inappropriate or who poses a threat to security, or to the enjoyment of the Event by others.",
    "Ticket holders assume all risk of injury and all responsibility for property loss, destruction or theft and release the promoters, performers, sponsors, ticket outlets, venues, and their employees from any liability thereafter.",
    "The resale of ticket(s) at the same or any price in excess of the initial purchase price is prohibited.",
    "There is no refund, exchange, upgrade, or cancellation once ticket(s) are sold.",
    "We would like to caution members of the public against purchasing tickets from unauthorized sellers or 3rd party websites. By purchasing tickets through these non-authorized points of sale, buyers take on the risk that the validity of the tickets cannot be guaranteed, with no refunds possible.⁠",
];

const EventExchangeRefundPolicy = () => {
    return (
        <Grid item>
            <Grid container direction="column" gap={5}>
                <Heading color="primary" variant="h2">
                    Exchange & Refund Policy Details
                </Heading>
                <List>
                    {policies.map((policy, index) => (
                        <ListItem key={policy + index}>
                            <Typography variant="subtitle1">
                                {index + 1 + ". " + policy}
                            </Typography>
                        </ListItem>
                    ))}
                </List>
            </Grid>
        </Grid>
    );
};

export default EventExchangeRefundPolicy;
