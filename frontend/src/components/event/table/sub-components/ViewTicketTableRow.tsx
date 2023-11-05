import React from "react";
import { TableRow, TableCell, Typography } from "@mui/material";
import { formatDateToDateWithDay } from "../../../../functions/formatter";
import { OrderItems } from "../../../../types/order";

interface ViewTicketTableRowProps {
    orderItem: OrderItems;
}

const ViewTicketTableRow: React.FC<ViewTicketTableRowProps> = ({
    orderItem,
}) => {
    const { startTime, ticketType, price, quantity } = orderItem;

    const cells = [
        {
            text: `${formatDateToDateWithDay(new Date(startTime))}`,
            width: "40%",
        },
        { text: `${ticketType}`, width: "35%" },
        { text: `$${price.toFixed(2)}`, width: "15%" },
        { text: `${quantity}`, width: "15%" },
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

export default ViewTicketTableRow;
