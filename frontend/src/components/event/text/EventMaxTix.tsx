import { Container, Typography } from "@mui/material";
import React from "react";

const EventMaxTix: React.FC = () => {
    return (
        <Container sx={{ my: "1.5rem" }}>
            <Typography variant="subtitle1">
                *You can only make a purchase request of maximum 4 tickets in
                total for each event
            </Typography>
        </Container>
    );
};

export default EventMaxTix;
