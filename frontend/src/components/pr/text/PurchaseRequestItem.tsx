import React from "react";
import { Grid, Typography } from "@mui/material";

interface PRItemType {
    ticket_type_id: string;
    activity_id: string;
    type: string;
    price: number;
    quantity: number;
    datetime: string;
    location: string;
}

interface PurchaseRequestItemProps {
    item: PRItemType;
}

const PurchaseRequestItem: React.FC<PurchaseRequestItemProps> = ({ item }) => {
    return (
        <Grid item xs={12}>
            <Grid spacing={1} container>
                <Grid item xs={1}>
                    <Typography variant="body2">x{item.quantity}</Typography>
                </Grid>
                <Grid item xs={9}>
                    <Typography variant="body2">{`${item.datetime} @ ${item.location} < ${item.type} >`}</Typography>
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
