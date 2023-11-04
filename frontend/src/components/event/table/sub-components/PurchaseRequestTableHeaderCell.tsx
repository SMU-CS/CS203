import { TableCell, Typography } from "@mui/material";

const headerRows = [
    { text: "Datetime", width: "40%" },
    { text: "Ticket Type", width: "40%" },
    { text: "Price", width: "20%" },
];

const PurchaseRequestTableHeaderCell: React.FC = ({}) => {
    return headerRows.map(({ text, width }) => (
        <TableCell key={text} sx={{ width: width }}>
            <Typography color="white" fontWeight="bold" variant="subtitle2">
                {text}
            </Typography>
        </TableCell>
    ));
};

export default PurchaseRequestTableHeaderCell;