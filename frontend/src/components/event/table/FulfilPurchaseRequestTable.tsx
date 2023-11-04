import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableProps,
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
    return (
        <TableContainer elevation={2} component={Paper}>
            <Table {...props}>
                <TableHead sx={{ bgcolor: "primary.light" }}>
                    <TableRow>
                        <TableCell />
                        <PurchaseRequestTableHeaderCell />
                    </TableRow>
                </TableHead>
                <TableBody>
                    {prItems.map(
                        (
                            {
                                id,
                                quantityRequested,
                                ticketType,
                                price,
                                eventStartDateTime,
                            },
                            index
                        ) =>
                            [...Array(quantityRequested)].map((i, index2) => (
                                <PurchaseRequestTableRow
                                    id={id}
                                    index={index2}
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
