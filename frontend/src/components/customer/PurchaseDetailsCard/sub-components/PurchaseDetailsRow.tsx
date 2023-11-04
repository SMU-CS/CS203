import { Grid, Typography } from "@mui/material";
import React from "react";
import { PurchaseRequestItemWithDetails } from "../../../../types/pr";
import { formatDatetoDateTimeWithDay } from "../../../../functions/formatter";

interface PurchaseDetailsRowProps {
    prItem: PurchaseRequestItemWithDetails;
}

const PurchaseDetailsRow: React.FC<PurchaseDetailsRowProps> = ({ prItem }) => {   
    return (
        <Grid container direction="column">
            <Grid container direction="row" alignItems="center">
                <Grid item xs={1}>
                    <Typography variant="body2">
                        {`x${prItem.quantityRequested}`}
                    </Typography>
                </Grid>
                <Grid item xs={8}>
                    <Typography variant="body2">
                        {`${formatDatetoDateTimeWithDay(
                            new Date(prItem.eventStartDateTime)
                        )}<${prItem.ticketType}>`}
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography variant="body2">
                        {`$${prItem.price.toFixed(2)}`}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default PurchaseDetailsRow;
