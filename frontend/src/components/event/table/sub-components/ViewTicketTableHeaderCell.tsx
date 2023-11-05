import { TableCell, Typography } from "@mui/material";

const headerRows = [
    { text: "Datetime", width: "40%" },
    { text: "Ticket Type", width: "35%" },
    { text: "Price", width: "15%" },
    { text: "Quantity", width: "10%" },
];

const ViewTicketTableHeaderCell: React.FC = ({}) => {
    return headerRows.map(({ text, width }) => (
        <TableCell key={text} sx={{ width: width }}>
            <Typography color="white" fontWeight="bold" variant="subtitle2">
                {text}
            </Typography>
        </TableCell>
    ));
};

export default ViewTicketTableHeaderCell;
