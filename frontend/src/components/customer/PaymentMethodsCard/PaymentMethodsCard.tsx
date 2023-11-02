import React from "react";
import { Paper, Grid, Button, Divider } from "@mui/material";
import {
    FormProvider,
    useForm,
} from "react-hook-form";
import SavedPaymentMethodsSection from "./sections/SavedPaymentMethodsSection";
import NewPaymentMethodsSection from "./sections/NewPaymentMethodsSection";

const PaymentMethodsCard: React.FC = () => {
    const formState = useForm();
    const { reset } = formState;

    return (
        <FormProvider {...formState}>
            <Paper elevation={2} sx={{ mt: "3rem", mb: "3rem" }}>
                <Grid container direction="column" gap={2}>
                    <SavedPaymentMethodsSection />
                    <NewPaymentMethodsSection />
                    <Divider sx={{ mx: "2rem" }} />
                    <Grid item sx={{ mx: "2rem" }}>
                        <Grid
                            container
                            direction="row"
                            justifyContent="flex-end"
                            spacing={3}
                            mb="1rem"
                        >
                            <Grid item>
                                <Button
                                    variant="contained"
                                    onClick={reset}
                                    color="inherit"
                                >
                                    Cancel
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
        </FormProvider>
    );
};

export default PaymentMethodsCard;
