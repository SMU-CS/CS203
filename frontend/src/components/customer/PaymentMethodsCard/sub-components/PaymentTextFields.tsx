import { Grid } from "@mui/material";
import React from "react";
import TextField from "../../../common/form/TextField";
import ExpirationDateField from "../../../common/form/ExpirationDateField";
import dayjs from "dayjs";

const cardNumLengthInfo = {
    value: 16,
    message: "Card Number should be 16 digits",
};

const cvvLengthInfo = {
    value: 3,
    message: "CVV should be 3 digits",
};

const PaymentTextFields: React.FC = ({}) => {
    return (
        <Grid container spacing={3}>
            <Grid item>
                <Grid container direction="row" spacing={3}>
                    <Grid item>
                        <TextField
                            label="Card Number"
                            name="card_number"
                            rules={{
                                required: "Card Number is required",
                                minLength: cardNumLengthInfo,
                                maxLength: cardNumLengthInfo,
                                validate: (value) =>
                                    !/^[0-9]+$/.test(value)
                                        ? "Invalid card number"
                                        : true,
                            }}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            label="CVV"
                            name="cvv"
                            type="password"
                            rules={{
                                required: "CVV is required",
                                minLength: cvvLengthInfo,
                                maxLength: cvvLengthInfo,
                                validate: (value) =>
                                    !/^[0-9]+$/.test(value)
                                        ? "Invalid CVV"
                                        : true,
                            }}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid
                    container
                    direction="row"
                    spacing={3}
                    alignItems="flex-end"
                >
                    <Grid item>
                        <TextField
                            label="Card Holder Name"
                            name="card_holder_name"
                            rules={{
                                required: "Card Holder Name is required",
                            }}
                        />
                    </Grid>
                    <Grid item>
                        <ExpirationDateField
                            label="Expiration Date (MM/YYYY)"
                            name="exp_date"
                            rules={{
                                required: "Expiration date is required",
                                validate: (value) =>
                                    value < dayjs() ? "Card expired" : true,
                            }}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default PaymentTextFields;
