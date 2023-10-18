import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Grid, Typography } from "@mui/material";

interface PurchaseRequestSuccessProps {
    message: string; //old message was: Your Purchase Request has been successfully submitted!
}

const PurchaseRequestSuccess: React.FC<PurchaseRequestSuccessProps> = (
    {message}
) => {
    return (
        <Grid
            container
            wrap="nowrap"
            direction="row"
            gap="1rem"
            alignItems="center"
        >
            <Grid item sx={{ transform: "translateY(3px)" }}>
                <CheckCircleIcon color="primary" />
            </Grid>
            <Grid item>
                <Typography variant="body2" fontWeight="bold">
                    {`${message}`}
                </Typography>
            </Grid>
        </Grid>
    );
};

export default PurchaseRequestSuccess;
