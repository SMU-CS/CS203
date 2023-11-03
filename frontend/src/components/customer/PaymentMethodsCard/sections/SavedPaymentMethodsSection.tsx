import { Grid, Button } from "@mui/material";
import React from "react";
import Heading from "../../../common/headings/Heading";
import { FormProvider, useForm } from "react-hook-form";
import CheckboxList from "../CheckBoxList";
import mockPaymentsData from "../MockPaymentData";

const SavedPaymentMethodsSection: React.FC = ({}) => {
    const formState = useForm();
    const { handleSubmit } = formState;

    return (
        <FormProvider {...formState}>
            <Grid container xs={11} m="2rem" direction="column">
                <Grid item>
                    <Heading variant="h2" color="secondary">
                        Saved Payment Methods
                    </Heading>
                </Grid>
                <Grid item sx={{ margin: "-2rem 2rem 2rem" }}>
                    <CheckboxList data={mockPaymentsData} />
                </Grid>
                <Grid item>
                    <Grid container direction="row" justifyContent="flex-end">
                        <Grid item>
                            <Button
                                type="submit"
                                variant="contained"
                                color="error"
                                onClick={handleSubmit((data) =>
                                    console.log(data)
                                )}
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
