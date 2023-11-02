import { Grid, Button } from "@mui/material";
import React from "react";
import Heading from "../../../common/headings/Heading";
import { FormProvider, useForm } from "react-hook-form";


const SavedPaymentMethodsSection: React.FC = ({}) => {
    const formState = useForm();

    return (
        <FormProvider {...formState}>
            <Grid container direction="column">
                <Grid item sx={{ margin: "2rem 2rem 2rem" }}>
                    <Heading
                        variant="h2"
                        color="secondary"
                        style={{ marginLeft: "1rem" }}
                    >
                        Saved Payment Methods
                    </Heading>
                </Grid>
                <Grid item sx={{ margin: "-2rem 2rem 2rem" }}>
                    {/* <CheckboxList onToggle={handleToggle} checked={checked} /> */}
                </Grid>
                <Grid item sx={{ mx: "2rem" }}>
                    <Grid container direction="row" justifyContent="flex-end">
                        <Grid item>
                            <Button
                                type="submit"
                                variant="contained"
                                color="error"
                                // onClick={handleRemovePayment}
                            >
                                Remove Payment Methods
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </FormProvider>
    );
};

export default SavedPaymentMethodsSection;
