import { Box, Typography } from "@mui/material";
import Heading from "../../common/headings/Heading";

const WaysToBuyTickets = () => {
    return (
        <>
            <Box padding={"1rem"}>
                <Typography fontFamily={"Lato"} fontSize={"1rem"}>
                    <Heading color="secondary" variant="h3">
                        Online & Mobile
                    </Heading>

                    <Box padding={"1rem"}>
                        Purchase your tickets now by using the table of tickets
                        above!
                    </Box>

                    <Heading color="secondary" variant="h3">
                        Hotline
                    </Heading>

                    <Box padding={"1rem"}>
                        +65 XXXX XXXX <br /> <br />
                        Operating Hours: Monday to Saturday (10am - 6pm) <br />
                        Sunday and Public Holidays (Closed)
                    </Box>

                    <Heading color="secondary" variant="h3">
                        Outlets
                    </Heading>

                    <Box padding={"1rem"}>
                        <Typography fontFamily={"Lato"} fontWeight={"bold"}>
                            Singpost
                        </Typography>{" "}
                        <br />
                        The sale of tickets will be available at All SingPost
                        outlets.
                    </Box>
                </Typography>
            </Box>
        </>
    );
};

export default WaysToBuyTickets;
