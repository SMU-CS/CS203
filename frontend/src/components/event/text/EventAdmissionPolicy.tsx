import { Grid, Typography } from "@mui/material";
import Heading from "../../common/headings/Heading";
import EventTabAnchor from "../TabBar/EventTabAnchor";
import { AdmissionPolicy } from "../../../types/admissionpolicy";

interface EventAdmissionPolicyProps {
    policies: AdmissionPolicy[];
}

const EventAdmissionPolicy: React.FC<EventAdmissionPolicyProps> = ({
    policies,
}) => {
    return (
        <Grid item>
            <EventTabAnchor id="admission" />
            <Grid container direction="column" gap={5}>
                <Heading color="primary" variant="h2">
                    Admission Policy
                </Heading>
                <ul>
                    {policies.map(({ description, id }) => (
                        <li key={id}>
                            <Typography variant="subtitle1">
                                {description}
                            </Typography>
                        </li>
                    ))}
                </ul>
            </Grid>
        </Grid>
    );
};

export default EventAdmissionPolicy;
