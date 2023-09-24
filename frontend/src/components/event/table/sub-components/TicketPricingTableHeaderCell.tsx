import React from "react";
import { TableCell, Typography } from "@mui/material";

const headerRows = [
    { text: "Event Date & Time", width: "25%" },
    { text: "Event Name", width: "50%" },
    { text: "Venue", width: "25%" },
];

const TicketPricingTableHeaderCell: React.FC = ({}) => {
    return headerRows.map(({ text, width }) => (
        <TableCell key={text} sx={{ width: width }}>
            <Typography color="white" fontWeight="bold" variant="subtitle2">
                {text}
            </Typography>
        </TableCell>
    ));
};

export default TicketPricingTableHeaderCell;
