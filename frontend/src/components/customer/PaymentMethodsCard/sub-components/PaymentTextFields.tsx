import { Container, Grid } from "@mui/material";
import React from "react";
import TextField from "../../../common/form/TextField";

const cardNumLengthInfo = {
    value: 16,
    message: "Card Number should be 16 digits",
};

const PaymentTextFields: React.FC = ({}) => {
    return (
        <Container>
            <Grid container spacing={3}>
                <Grid item>
                    <Grid container direction="row" spacing={3}>
                        <Grid item>
                            <TextField
                                label="Card Number"
                                name="card_number"
                                rules={{
                                    validate: (value) =>
                                        !/^[0-9]+$/.test(value)
                                            ? "Invalid card number"
                                            : false,
                                    required: "Card Number is required",
                                    minLength: cardNumLengthInfo,
                                    maxLength: cardNumLengthInfo,
                                }}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                label="CVV"
                                name="cvv"
                                type="password"
                                rules={{
                                    validate: (value) =>
                                        !/^[0-9]+$/.test(value)
                                            ? "Invalid CVV"
                                            : false,
                                    required: "CVV is required",
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
                            <TextField
                                label="Expiration Date (MM/YYYY)"
                                name="exp_date"
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default PaymentTextFields;
