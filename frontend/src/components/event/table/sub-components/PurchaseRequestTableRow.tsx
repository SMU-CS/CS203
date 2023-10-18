import React from "react";
import { TableRow, TableCell, Typography, Checkbox } from "@mui/material";
import { useForm, Controller } from "react-hook-form";

interface PurchaseRequestTableRowProps {
    startDateTime: string;
    ticketType: string;
    price: number;
}

const PurchaseRequestTableRow: React.FC<PurchaseRequestTableRowProps> = ({
    startDateTime,
    ticketType,
    price,
}) => {
    const { control } = useForm();

    const cells = [
        { text: `${startDateTime}`, width: "35%" },
        { text: `${ticketType}`, width: "40%" },
        { text: `${price}`, width: "25%" },
    ];

    return (
        <TableRow>
            <TableCell width={"5%"}>
                <Controller
                    name="isChecked"
                    control={control}
                    defaultValue={false} 
                    render={({ field }) => (
                        <Checkbox
                            color="primary"
                            {...field}
                        />
                    )}
                />
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
