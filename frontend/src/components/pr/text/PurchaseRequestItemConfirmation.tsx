import React from "react";
import { Grid, Typography } from "@mui/material";
import { OrderItems } from "../../../types/order";
import { formatDateToDateWithDay } from "../../../functions/formatter";

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
    item: PRItemType | OrderItems;
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
                    <Typography variant="body2">{`${
                        "datetime" in item
                            ? item.datetime
                            : formatDateToDateWithDay(new Date(item.startTime))
                    } @ ${item.location} < ${
                        "type" in item ? item.type : item.ticketType
                    } >`}</Typography>
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
