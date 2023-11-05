import React from "react";
import { Paper, Grid, Container } from "@mui/material";
import SavedPaymentMethodsSection from "./sections/SavedPaymentMethodsSection";
import NewPaymentMethodsSection from "./sections/NewPaymentMethodsSection";

const PaymentMethodsCard: React.FC = () => {
    return (
        <Container>
            <Paper elevation={2} sx={{ m: "3rem" }}>
                <Grid container direction="column" gap={2}>
                    <SavedPaymentMethodsSection />
                    <NewPaymentMethodsSection />
                </Grid>
            </Paper>
        </Container>
    );
};

export default PaymentMethodsCard;
