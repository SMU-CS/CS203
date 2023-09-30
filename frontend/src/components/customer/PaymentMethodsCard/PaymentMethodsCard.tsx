import React, { useState } from "react";
import {
    Paper,
    Grid,
    Button,
    TextField,
    Divider,
    InputLabel,
} from "@mui/material";
import Heading from "../../common/headings/Heading";
import mockPaymentsData from "./MockPaymentData";
import CheckboxList from "./CheckBoxList";
import { creditcard } from "../../../types/creditcard";

const PaymentMethodsCard: React.FC = () => {
    const [paymentsData, setPaymentsData] =
        useState<creditcard[]>(mockPaymentsData);
    const [checked, setChecked] = useState<number[]>([]);

    const [newPayment, setNewPayment] = useState<creditcard>({
        card_number: "",
        card_name: "",
        cvv: "",
        expiration_date: "",
    });

    const [formErrors, setFormErrors] = useState<Record<string, string>>({});

    const handleRemovePayment = (e: React.FormEvent) => {
        e.preventDefault();
        const removedPayments = paymentsData.filter((_, index) =>
            checked.includes(index)
        );
        console.log("Removed Payment Data:", removedPayments);
        const updatedPaymentsData = paymentsData.filter(
            (_, index) => !checked.includes(index)
        );
        setPaymentsData(updatedPaymentsData);
        setChecked([]);
    };

    const handleToggle = (value: number) => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormErrors({});
        const errors: Record<string, string> = {};

        if (!newPayment.card_number) {
            errors.card_number = "Card No. is required";
        } else if (newPayment.card_number.length !== 16) {
            errors.card_number = "Card No. must be 16 digits";
        } else if (!/^[0-9]+$/.test(newPayment.card_number)) {
            errors.card_number = "Invalid card number";
        }

        if (!newPayment.cvv) {
            errors.cvv = "CVV is required";
        } else if (newPayment.cvv.length !== 3) {
            errors.cvv = "CVV must be three digits";
        } else if (!/^[0-9]+$/.test(newPayment.cvv)) {
            errors.cvv = "Invalid CVV";
        }
        if (!newPayment.card_name) {
            errors.card_name = "Card Name is required";
        }

        if (!newPayment.expiration_date) {
            errors.expiration_date = "Expiration Date is required";
        } else if (newPayment.expiration_date.length !== 7) {
            errors.expiration_date = "Invalid Expiration Date";
        } else if (newPayment.expiration_date.charAt(2) !== "/") {
            errors.expiration_date = "Invalid Expiration Date";
        } else {
            const [month, year] = newPayment.expiration_date.split("/");
            const inputDate = new Date(Number(year), Number(month) - 1);
            const currentDate = new Date(
                new Date().getFullYear(),
                new Date().getMonth()
            );
            if (inputDate < currentDate) {
                errors.expiration_date = "Invalid Expiration Date";
            }
        }

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
        } else {
            console.log("New Payment Data:", newPayment);

            const updatedPaymentsData = [...paymentsData, newPayment];
            setPaymentsData(updatedPaymentsData);

            setNewPayment({
                card_number: "",
                card_name: "",
                cvv: "",
                expiration_date: "",
            });
        }
    };
    const handleCancel = () => {
        setNewPayment({
            card_number: "",
            card_name: "",
            cvv: "",
            expiration_date: "",
        });
    };
    return (
        <form onSubmit={handleSubmit}>
            <Paper elevation={2} sx={{ mt: "3rem", mb: "3rem" }}>
                <Grid container direction="column" gap={2}>
                    <Grid container direction="column">
                        <Grid item sx={{ ml: "2rem", mr: "2rem", mt: "2rem" }}>
                            <Heading
                                variant="h2"
                                color="secondary"
                                style={{ marginLeft: "1rem" }}
                            >
                                Saved Payment Methods
                            </Heading>
                        </Grid>
                        <Grid item sx={{ mt: "-2rem", ml: "2rem", mr: "2rem" }}>
                            <CheckboxList
                                data={paymentsData}
                                onToggle={handleToggle}
                                checked={checked}
                            />
                        </Grid>
                        <Grid item sx={{ ml: "2rem", mr: "2rem" }}>
                            <Grid
                                container
                                direction="row"
                                justifyContent="flex-end"
                            >
                                <Grid item>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="error"
                                        onClick={handleRemovePayment}
                                    >
                                        Remove Payment Methods
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item sx={{ mt: "2rem", ml: "2rem", mr: "2rem" }}>
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
                            <Grid item sx={{ mt: "-1rem" }}>
                                <Grid container direction="row" spacing={3}>
                                    <Grid item>
                                        <TextField
                                            label="Card Number"
                                            type="text"
                                            variant="outlined"
                                            size="medium"
                                            InputLabelProps={{
                                                sx: {
                                                    fontFamily: "Lato",
                                                    fontSize: "1rem",
                                                    fontWeight: "400",
                                                },
                                            }}
                                            error={!!formErrors.card_number}
                                            helperText={formErrors.card_number}
                                            value={newPayment.card_number}
                                            onChange={(e) =>
                                                setNewPayment({
                                                    ...newPayment,
                                                    card_number: e.target.value,
                                                })
                                            }
                                            sx={{
                                                "& .MuiFormHelperText-root": {
                                                    fontSize: "1rem",
                                                    fontWeight: "400",
                                                },
                                            }}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <TextField
                                            label="CVV"
                                            type="text"
                                            variant="outlined"
                                            size="medium"
                                            InputLabelProps={{
                                                sx: {
                                                    fontFamily: "Lato",
                                                    fontSize: "1rem",
                                                    fontWeight: "400",
                                                },
                                            }}
                                            error={!!formErrors.cvv}
                                            helperText={formErrors.cvv}
                                            value={newPayment.cvv}
                                            onChange={(e) =>
                                                setNewPayment({
                                                    ...newPayment,
                                                    cvv: e.target.value,
                                                })
                                            }
                                            sx={{
                                                "& .MuiFormHelperText-root": {
                                                    fontSize: "1rem",
                                                    fontWeight: "400",
                                                },
                                            }}
                                        />
                                    </Grid>
                                </Grid>
                                <Grid
                                    container
                                    direction="row"
                                    spacing={3}
                                    alignItems="flex-end"
                                    sx={{ mt: "0.1rem" }}
                                >
                                    <Grid item>
                                        <InputLabel shrink></InputLabel>
                                        <TextField
                                            label="Card Holder Name"
                                            type="text"
                                            variant="outlined"
                                            size="medium"
                                            InputLabelProps={{
                                                sx: {
                                                    fontFamily: "Lato",
                                                    fontSize: "1rem",
                                                    fontWeight: "400",
                                                },
                                            }}
                                            error={!!formErrors.card_name}
                                            helperText={formErrors.card_name}
                                            value={newPayment.card_name}
                                            onChange={(e) =>
                                                setNewPayment({
                                                    ...newPayment,
                                                    card_name: e.target.value,
                                                })
                                            }
                                            sx={{
                                                "& .MuiFormHelperText-root": {
                                                    fontSize: "1rem",
                                                    fontWeight: "400",
                                                },
                                            }}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <TextField
                                            label="Expiration Date (MM/YYYY)"
                                            sx={{
                                                "& input::placeholder": {
                                                    fontFamily: "Lato",
                                                    fontSize: "1rem",
                                                    fontWeight: "400",
                                                },
                                                "& .MuiFormHelperText-root": {
                                                    fontSize: "1rem",
                                                    fontWeight: "400",
                                                },
                                            }}
                                            type="text"
                                            variant="outlined"
                                            size="medium"
                                            InputLabelProps={{
                                                sx: {
                                                    fontFamily: "Lato",
                                                    fontSize: "1rem",
                                                    fontWeight: "400",
                                                },
                                            }}
                                            error={!!formErrors.expiration_date}
                                            helperText={
                                                formErrors.expiration_date
                                            }
                                            value={newPayment.expiration_date}
                                            onChange={(e) =>
                                                setNewPayment({
                                                    ...newPayment,
                                                    expiration_date:
                                                        e.target.value,
                                                })
                                            }
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item sx={{ ml: "2rem", mr: "2rem" }}></Grid>

                    <Grid item sx={{ ml: "2rem", mr: "2rem" }}>
                        <Divider />
                    </Grid>
                    <Grid item sx={{ ml: "2rem", mr: "2rem", mb: "2rem" }}>
                        <Grid
                            container
                            direction="row"
                            justifyContent="flex-end"
                            spacing={3}
                        >
                            <Grid item>
                                <Button
                                    type="button"
                                    variant="contained"
                                    onClick={handleCancel}
                                    sx={{
                                        backgroundColor: "#000000",
                                        opacity: "38%",
                                    }}
                                >
                                    cancel
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button type="submit" variant="contained">
                                    Add New Payment Method
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </form>
    );
};

export default PaymentMethodsCard;
