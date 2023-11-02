import {
    Stepper,
    Box,
    Step,
    StepLabel,
    Typography,
} from "@mui/material";
import React from "react";
import { SalesRoundAbstract } from "../../../types/salesround";
import { grey } from "@mui/material/colors";
import { formatDateToDateWithDay } from "../../../functions/formatter";

interface SalesRoundStepperProps {
    salesrounds: SalesRoundAbstract;
}

const SalesRoundStepper: React.FC<SalesRoundStepperProps> = ({
    salesrounds,
}) => {
    console.log(salesrounds)

    return (
        <Box width="100%">
            <Stepper activeStep={1} alternativeLabel>
                {[
                    {
                        text: formatDateToDateWithDay(
                            new Date(salesrounds.roundStart)
                        ),
                        optional: `${salesrounds.salesType} Starts`,
                    },
                    {
                        text: formatDateToDateWithDay(
                            new Date(salesrounds.roundEnd)
                        ),
                        optional: `${salesrounds.salesType} Ends`,
                    },
                ].map(({ text, optional }) => (
                    <Step key={text}>
                        <StepLabel
                            optional={
                                <Typography
                                    variant="subtitle2"
                                    color={grey[700]}
                                    fontSize={"1rem"}
                                >
                                    {optional}
                                </Typography>
                            }
                        >
                            <Typography
                                fontSize={"1rem"}
                                variant="subtitle1"
                                fontWeight="bold"
                            >
                                {text}
                            </Typography>
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
};

export default SalesRoundStepper;
