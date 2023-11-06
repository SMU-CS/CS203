import React from "react";
import { TableRow, TableCell, Typography } from "@mui/material";
import { formatDateToDateWithDay } from "../../../../functions/formatter";
import { PurchaseRequestItemWithDetails } from "../../../../types/pr";

interface ViewPurchaseRequestTableRowProps {
    prItem: PurchaseRequestItemWithDetails;
}

const ViewPurchaseRequestTableRow: React.FC<
    ViewPurchaseRequestTableRowProps
> = ({ prItem }) => {
    const { eventStartDateTime, ticketType, price, quantityRequested } =
        prItem;

    const cells = [
        {
            text: `${formatDateToDateWithDay(new Date(eventStartDateTime))}`,
            width: "40%",
        },
        { text: `${ticketType}`, width: "35%" },
        { text: `$${price.toFixed(2)}`, width: "15%" },
        { text: `${quantityRequested}`, width: "15%" },
    ];

    return (
        <TableRow>
            {cells.map(({ text, width }, index) => (
                <TableCell key={index} sx={{ width: width }}>
                    <Typography variant="subtitle2">{text}</Typography>
                </TableCell>
            ))}
        </TableRow>
    );
};

export default ViewPurchaseRequestTableRow;
