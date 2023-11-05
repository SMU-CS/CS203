import { Grid, Paper } from "@mui/material";
import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import Heading from "../../common/headings/Heading";
import PaymentOptionsSection from "./sub-components/PaymentOptionsSection";
import PaymentDetailsForm from "./sub-components/PaymentDetailsForm";
import mockPaymentsData from "../PaymentMethodsCard/MockPaymentData";
import dayjs from "dayjs";

const PaymentCheckoutCard: React.FC = ({}) => {
    const { setValue, watch, reset } = useFormContext();
    const currentCard = watch("card");

    useEffect(() => {
        if (currentCard !== "New Payment Method") {
            // function to auto fill
            console.log("Current card is filled");
            const cardDetails = mockPaymentsData.find(
                ({ id }) => id === currentCard
            );
            if (!!cardDetails) {
                const { card_number, card_name, cvv, expiration_date } =
                    cardDetails;
                setValue("card_number", card_number.replace(/\s/g, ''), {
                    shouldValidate: true,
                    shouldDirty: true
                  });
                setValue("card_holder_name", card_name);
                setValue("cvv", cvv);
                setValue("exp_date", dayjs(expiration_date));
            }
        } else {
            reset()
        }
    }, [currentCard]);

    return (
        <Paper elevation={2} sx={{ mt: "3rem" }}>
            <Grid container direction="column" gap={4} p="2rem">
                <Heading variant="h2" color="primary">
                    Payment Method
                </Heading>
                <PaymentOptionsSection />
                <PaymentDetailsForm />
            </Grid>
        </Paper>
    );
};

export default PaymentCheckoutCard;
