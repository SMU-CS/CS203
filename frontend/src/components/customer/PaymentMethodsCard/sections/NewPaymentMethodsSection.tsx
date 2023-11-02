import { Container, Grid } from "@mui/material";
import React from "react";
import Heading from "../../../common/headings/Heading";
import PaymentTextFields from "../sub-components/PaymentTextFields";

const NewPaymentMethodsSection: React.FC = () => {
    return (
        <Container>
            <Grid container direction="column">
                <Grid item>
                    <Heading
                        variant="h2"
                        color="primary"
                        style={{ marginLeft: "1rem" }}
                    >
                        New Payment Methods
                    </Heading>
                </Grid>
                <PaymentTextFields />
            </Grid>
        </Container>
    );
};

export default NewPaymentMethodsSection;
