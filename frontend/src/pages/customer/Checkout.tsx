import React from "react";
// import PaymentMethodsCard from "../../components/customer/PaymentMethodsCard/PaymentMethodsCard";
import PurchaseDetailsCard from "../../components/customer/PurchaseDetailsCard/PurchaseDetailsCard";
import { Grid, Container, Divider } from "@mui/material";
import Heading from "../../components/common/headings/Heading";
import Button from "../../components/common/buttons/Button";
import { useForm, FieldErrors } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Checkout: React.FC = () => {
    const formState = useForm();
    const { handleSubmit } = formState;
    const navigate = useNavigate();

    const onSubmit = (data: any) => {
        console.log("data", data);
    };

    const onError = (errors: FieldErrors) => {
        console.log(errors);
    };

    return (
        <Container maxWidth="xl">
            <Grid container direction="column">
                <Heading variant="h1" color="primary" sx={{ ml: "1rem" }}>
                    Checkout
                </Heading>
                <Grid item>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-around"
                    >
                        <Grid item xs={5}>
                            {/* <PaymentMethodsCard
                                paymentMethodFormState={formState}
                            /> */}
                        </Grid>
                        <Grid item xs={6}>
                            <PurchaseDetailsCard />
                        </Grid>
                    </Grid>
                </Grid>
                <Divider />
                <Grid item>
                    <Grid
                        container
                        direction="row"
                        justifyContent="flex-end"
                        gap={3}
                        sx={{ my: "1.5rem" }}
                    >
                        <Grid item>
                            <Button
                                variant="contained"
                                color="inherit"
                                onClick={() => navigate("fulfil/:id")}
                            >
                                Return to Previous Page
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button
                                type="submit"
                                variant="contained"
                                onClick={handleSubmit(onSubmit, onError)}
                            >
                                Confirm Payment
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};
export default Checkout;
