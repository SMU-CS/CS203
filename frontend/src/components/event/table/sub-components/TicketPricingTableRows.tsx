import React from "react";
import { Activity } from "../../../../types/activity";
import { TableRow, TableCell, Typography } from "@mui/material";

interface TicketPricingTableRowsProps {
    activity: Activity;
    eventName: string;
    eventVenue: string;
}

const TicketPricingTableRows: React.FC<TicketPricingTableRowsProps> = ({
    activity,
    eventName,
    eventVenue,
}) => {
    const cells = [
        { text: `${activity.startDateTime}`, width: "25%" },
        { text: `${eventName}`, width: "50%" },
        { text: `${eventVenue}`, width: "25%" },
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

export default TicketPricingTableRows;
