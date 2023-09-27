import { Grid, Typography } from "@mui/material";
import Heading from "../../common/headings/Heading";

const ways = [
    {
        heading: "Online & Mobile",
        paragraph: (
            <Typography mx="2rem" variant="subtitle1">
                Purchase your tickets now by using the table of tickets above!
            </Typography>
        ),
    },
    {
        heading: "Hotline",
        paragraph: (
            <Typography mx="2rem" variant="subtitle1">
                +65 XXXX XXXX <br />
                <br />
                Operating Hours: Monday to Saturday (10am - 6pm) <br />
                Sunday and Public Holidays (Closed)
            </Typography>
        ),
    },
    {
        heading: "Outlets",
        paragraph: (
            <Typography mx="2rem" variant="subtitle1">
                <b>Singpost</b>
                <br />
                The sale of tickets will be available at All SingPost outlets.
            </Typography>
        ),
    },
];

const WaysToBuyTickets = () => {
    return (
        <>
            <Grid item mx="2rem">
                <Grid container direction="column" gap={5}>
                    <Heading color="primary" variant="h2">
                        Ways To Buy Tickets
                    </Heading>
                    <Grid item>
                        <Grid container direction="column" gap={3}>
                            {ways.map(({ heading, paragraph }) => (
                                <Grid item mx="2rem">
                                    <Heading color="secondary" variant="h3">
                                        {heading}
                                    </Heading>
                                    {paragraph}
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default WaysToBuyTickets;
