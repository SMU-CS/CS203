import React from "react";
import { TableRow, TableCell, Typography } from "@mui/material";
import Checkbox from "../../../common/form/Checkbox";

interface PurchaseRequestTableRowProps {
    id: number;
    index: number;
    startDateTime: string;
    ticketType: string;
    price: number;
}

const PurchaseRequestTableRow: React.FC<PurchaseRequestTableRowProps> = ({
    id,
    index,
    startDateTime,
    ticketType,
    price,
}) => {
    const cells = [
        { text: `${startDateTime}`, width: "35%" },
        { text: `${ticketType}`, width: "40%" },
        { text: `$${price.toFixed(2)}`, width: "25%" },
    ];

    return (
        <TableRow>
            <TableCell width={"5%"}>
                <Checkbox name={`${index}-${id}`} />
            </TableCell>
            {cells.map(({ text, width }, index) => (
                <TableCell key={index} sx={{ width: width }}>
                    <Typography variant="subtitle2">{text}</Typography>
                </TableCell>
            ))}
        </TableRow>
    );
};

export default PurchaseRequestTableRow;
