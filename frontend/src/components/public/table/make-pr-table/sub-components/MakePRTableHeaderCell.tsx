import React from "react";
import { TableCell, Typography } from "@mui/material";

const headerRows = [
    { text: "Date & Time", width: "45%" },
    { text: "Ticket Type", width: "35%" },
    { text: "Quantity", width: "15%" },
    { text: "", width: "5%" },
];

const MakePRTableHeaderCell: React.FC = ({}) => {
    return headerRows.map(({ text, width }) => (
        <TableCell key={text} sx={{ width: width }}>
            <Typography color="white" fontWeight="bold" variant="subtitle2">
                {text}
            </Typography>
        </TableCell>
    ));
};

export default MakePRTableHeaderCell;
