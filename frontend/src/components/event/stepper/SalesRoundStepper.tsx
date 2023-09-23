import {
    Stepper,
    Box,
    StepperProps,
    Step,
    StepLabel,
    Typography,
} from "@mui/material";
import React from "react";
import { SalesRound } from "../../../types/salesround";
import { grey } from "@mui/material/colors";

interface SalesRoundStepperProps extends StepperProps {
    salesrounds: SalesRound[];
}

const SalesRoundStepper: React.FC<SalesRoundStepperProps> = ({
    salesrounds,
    ...props
}) => {
    return (
        <Box width="100%">
            <Stepper activeStep={1} alternativeLabel {...props}>
                {salesrounds.map((sr, index) => (
                    <Step key={index} completed={true} {...props}>
                        <StepLabel
                            optional={
                                <Typography
                                    variant="subtitle2"
                                    color={grey[700]}
                                >
                                    {sr.round_start}
                                </Typography>
                            }
                        >
                            <Typography variant="subtitle1" fontWeight="bold">
                                {" "}
                                {`Round ${index + 1}`}
                            </Typography>
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
};

export default SalesRoundStepper;
