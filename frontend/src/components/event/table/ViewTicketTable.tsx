import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableProps,
    Paper,
} from "@mui/material";
import ViewTicketTableHeaderCell from "./sub-components/ViewTicketTableHeaderCell";
import ViewTicketTableRow from "./sub-components/ViewTicketTableRow";
import { OrderItems } from "../../../types/order";

interface ViewTicketTableProps extends TableProps {
    orderItems: OrderItems[];
}
const ViewTicketTable: React.FC<ViewTicketTableProps> = ({
    orderItems,
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
                    {orderItems.map((orderItem) => (
                        <ViewTicketTableRow orderItem={orderItem} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ViewTicketTable;
