import { Button, Divider, Grid } from "@mui/material";
import React from "react";
import Heading from "../../../common/headings/Heading";
import PaymentTextFields from "../sub-components/PaymentTextFields";
import { FormProvider, useForm } from "react-hook-form";

const NewPaymentMethodsSection: React.FC = () => {
    const formState = useForm();
    const { reset, handleSubmit } = formState;

    return (
        <FormProvider {...formState}>
            <Grid m="2rem" xs={11} container gap={2} direction="column">
                <Grid item>
                    <Heading variant="h2" color="primary">
                        New Payment Methods
                    </Heading>
                </Grid>
                <Grid item mx={4}>
                <PaymentTextFields />

                </Grid>
                <Divider />
                <Grid item>
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
                                onClick={() => {
                                    reset();
                                    console.log("He");
                                }}
                                color="inherit"
                            >
                                Cancel
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button
                                onClick={handleSubmit(
                                    (data) => console.log(data),
                                    (err) => console.log(err)
                                )}
                                variant="contained"
                            >
                                Add New Payment Method
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </FormProvider>
    );
};

export default NewPaymentMethodsSection;
