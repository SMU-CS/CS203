import React from "react";
import { Grid, Typography } from "@mui/material";
import PaymentTextFields from "../../PaymentMethodsCard/sub-components/PaymentTextFields";

const PaymentDetailsForm: React.FC = () => {
    return (
        <Grid container gap={2} direction="column">
            <Grid item>
                <Typography fontWeight="bold">Payment Details</Typography>
            </Grid>
            <PaymentTextFields />
        </Grid>
    );
};

export default PaymentDetailsForm;
