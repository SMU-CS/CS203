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

interface PurchaseRequestItemConfirmationProps {
    item: PRItemType;
}

const PurchaseRequestItemConfirmation: React.FC<
    PurchaseRequestItemConfirmationProps
> = ({ item }) => {
    return (
        <Grid justifyContent={"space-between"} container>
            <Grid container width={"80%"}>
                <Grid width={"10%"}>
                    <Typography variant="body2">x{item.quantity}</Typography>
                </Grid>
                <Grid width={"90%"}>
                    <Typography variant="body2">{`${item.datetime} @ ${item.location} < ${item.type} >`}</Typography>
                </Grid>
            </Grid>
            <Grid>
                <Typography variant="body2">
                    ${item.price.toFixed(2)}
                </Typography>
            </Grid>
        </Grid>
    );
};

export default PurchaseRequestItemConfirmation;
