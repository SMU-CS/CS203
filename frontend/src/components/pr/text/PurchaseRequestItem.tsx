import React from "react";
import { Grid, Typography } from "@mui/material";
import { PurchaseRequestItemWithDetails } from "../../../types/pr";
import { formatDateToDateWithDay } from "../../../functions/formatter";

interface PurchaseRequestItemProps {
    item: PurchaseRequestItemWithDetails;
    location: string
}

const PurchaseRequestItem: React.FC<PurchaseRequestItemProps> = ({ item , location}) => {
    return (
        <Grid item xs={12}>
            <Grid spacing={1} container>
                <Grid item xs={1}>
                    <Typography variant="body2">
                        x{item.quantityRequested}
                    </Typography>
                </Grid>
                <Grid item xs={9}>
                    <Typography variant="body2">{`${formatDateToDateWithDay(
                        new Date(item.eventStartDateTime)
                    )} @ ${location} < ${item.ticketType} >`}</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography variant="body2">
                        ${item.price.toFixed(2)}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default PurchaseRequestItem;
