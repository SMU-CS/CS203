import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableProps,
    Paper,
} from "@mui/material";
import { PurchaseRequestItemWithDetails } from "../../../types/pr";
import ViewPurchaseRequestTableRow from "./sub-components/ViewPurchaseRequestTableRow";
import ViewTicketTableHeaderCell from "./sub-components/ViewTicketTableHeaderCell";

interface ViewPurchaseRequestTableProps extends TableProps {
    prItems: PurchaseRequestItemWithDetails[];
}
const ViewPurchaseRequestTable: React.FC<ViewPurchaseRequestTableProps> = ({
    prItems,
    ...props
}) => {
    return (
        <TableContainer elevation={2} component={Paper}>
            <Table {...props}>
                <TableHead sx={{ bgcolor: "primary.light" }}>
                    <TableRow>
                        <ViewTicketTableHeaderCell />
                    </TableRow>
                </TableHead>
                <TableBody>
                    {prItems.map((prItem) => (
                        <ViewPurchaseRequestTableRow prItem={prItem} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ViewPurchaseRequestTable;
