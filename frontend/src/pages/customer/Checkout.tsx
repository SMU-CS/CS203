import React from "react";
import PaymentMethodsCard from "../../components/customer/PaymentMethodsCard/PaymentMethodsCard";
import PurchaseDetailsCard from "../../components/customer/PurchaseDetailsCard/PurchaseDetailsCard";
import { Grid, Container, Divider } from "@mui/material";
import Heading from "../../components/common/headings/Heading";
import Button from "../../components/common/buttons/Button";
import { useForm, FormProvider, FieldErrors } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { CreditCard } from "../../types/creditcard";

const Checkout: React.FC = () => {
    const formState = useForm<CreditCard>();
    const { handleSubmit } = formState;
    const navigate = useNavigate();

    const onSubmit = (data: CreditCard) => {
        console.log("data", data);
    };

    const onError = (errors: FieldErrors<CreditCard>) => {
        console.log(errors);
    };

    return (
        <FormProvider {...formState}>
            <Container maxWidth={"xl"}>
                <Grid container direction="column">
                    <Grid item sx={{ margin: "2rem 2rem" }}>
                        <Heading
                            variant="h1"
                            color="primary"
                            style={{ marginLeft: "1rem" }}
                        >
                            Checkout
                        </Heading>
                    </Grid>
                    <Grid item sx={{ mt: "-2rem" }}>
                        <Grid container direction="row" xs={12}>
                            <Grid item xs={6}>
                                <PaymentMethodsCard />
                            </Grid>
                            <Grid item xs={6}>
                                <PurchaseDetailsCard />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Divider />
                    </Grid>
                    <Grid item>
                        <Grid
                            container
                            direction="row"
                            justifyContent="flex-end"
                            spacing={3}
                            sx={{ my: "1.5rem" }}
                        >
                            <Grid item>
                                <Button
                                    type="button"
                                    variant="contained"
                                    sx={{
                                        backgroundColor: "#000000",
                                        opacity: "38%",
                                    }}
                                    onClick={() => navigate("fulfil/:id")}
                                >
                                    Return to Previous Page
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    onClick={handleSubmit(
                                        onSubmit,
                                        onError
                                    )}
                                >
                                    Confirm Payment
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </FormProvider>
    );
};
export default Checkout;
