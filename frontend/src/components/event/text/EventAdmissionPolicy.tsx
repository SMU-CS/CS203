import { Grid, Typography } from "@mui/material";
import Heading from "../../common/headings/Heading";
import EventTabAnchor from "../TabBar/EventTabAnchor";

const policies = [
    "Admission to show/venue by full ticket only. Printed/electronic tickets must be produced for admission.",
    "There will be no admission for infants in arms and children below 3 years old.",
    "Individuals aged 3 years old and above will be required to purchase a ticket for admission.",
    "Please note that if you are children under 12 years old by date of birth, you are not allowed into the standing pen areas due to safety reasons.",
    "Please note that if you are individual with height below 1.2 meters, you are not allowed into the standing pen areas due to safety reasons",
    "No photography, videography and social media live streaming allowed.",
    "No outside food and beverage are allowed into the venue..⁠",
];

const EventAdmissionPolicy = () => {
    return (
        <Grid item>
            <EventTabAnchor id="admission"/>
            <Grid container direction="column" gap={5}>
                <Heading color="primary" variant="h2">
                    Admission Policy
                </Heading>
                <ul>
                    {policies.map((policy, index) => (
                        <li key={index}>
                            <Typography variant="subtitle1">{policy}</Typography>
                        </li>
                    ))}
                </ul>
            </Grid>
        </Grid>
    );
};

export default EventAdmissionPolicy;
