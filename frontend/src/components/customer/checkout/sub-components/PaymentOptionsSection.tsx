import { Grid, Typography } from "@mui/material";
import React from "react";
import SelectField from "../../../common/form/SelectField";
import mockPaymentsData from "../../PaymentMethodsCard/MockPaymentData";

const PaymentOptionsSection: React.FC = () => {
    return (
        <Grid container gap={2}>
            <Typography fontWeight="bold">Payment Option</Typography>
            <SelectField
                name="card"
                label="Payment Options"
                multiple={false}
                choices={[
                    { text: "New Payment Method", value: "New Payment Method" },
                    ...mockPaymentsData.map(({ id, card_number }) => ({
                        key: id,
                        text: card_number,
                        value: id,
                    })),
                ]}
                defaultValue="New Payment Method"
            />
        </Grid>
    );
};

export default PaymentOptionsSection;
