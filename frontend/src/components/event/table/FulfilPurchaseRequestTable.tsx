import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableProps,
    useTheme,
    Paper,
    TableCell,
} from "@mui/material";
import PurchaseRequestTableHeaderCell from "./sub-components/PurchaseRequestTableHeaderCell";
import PurchaseRequestTableRow from "./sub-components/PurchaseRequestTableRow";
import { PurchaseRequestItemWithDetails } from "../../../types/pr";
import { formatDateToDateWithDay } from "../../../functions/formatter";

interface FulfilPurchaseRequestTableProps extends TableProps {
    prItems: PurchaseRequestItemWithDetails[];
}
const FulfilPurchaseRequestTable: React.FC<FulfilPurchaseRequestTableProps> = ({
    prItems,
    ...props
}) => {
    const theme = useTheme();

    return (
        <TableContainer elevation={2} component={Paper}>
            <Table {...props}>
                <TableHead sx={{ bgcolor: theme.palette.primary.light }}>
                    <TableRow>
                        <TableCell />
                        <PurchaseRequestTableHeaderCell></PurchaseRequestTableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {prItems.map(
                        (
                            {
                                quantityRequested,
                                ticketType,
                                price,
                                eventStartDateTime,
                            },
                            index
                        ) =>
                            [...Array(quantityRequested)].map((i) => (
                                <PurchaseRequestTableRow
                                    key={`${i}${index}`}
                                    startDateTime={formatDateToDateWithDay(
                                        new Date(eventStartDateTime)
                                    )}
                                    ticketType={ticketType}
                                    price={price / quantityRequested}
                                />
                            ))
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default FulfilPurchaseRequestTable;
