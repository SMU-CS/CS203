import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Grid, Typography } from "@mui/material";

const PurchaseRequestSuccess: React.FC = () => {
    return (
        <Grid container wrap="nowrap" direction="row" gap="1rem" alignItems="center">
            <Grid item sx={{ transform: "translateY(3px)" }}>
                <CheckCircleIcon color="primary" />
            </Grid>
            <Grid item>
                <Typography
                    variant="body2"
                    fontWeight="bold"
                >
                    Your Purchase Request has been successfully submitted!
                </Typography>
            </Grid>
        </Grid>
    );
};

export default PurchaseRequestSuccess;
