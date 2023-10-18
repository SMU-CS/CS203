import { Activity } from "../../../types/activity";
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

interface FulfilPurchaseRequestTableProps extends TableProps {
    activities: Activity[];
}
const FulfilPurchaseRequestTable: React.FC<FulfilPurchaseRequestTableProps> = ({
    activities,
    ...props
}) => {
    const theme = useTheme();

    return (
        <TableContainer elevation={2} component={Paper}>
            <Table {...props}>
                <TableHead sx={{ bgcolor: theme.palette.primary.light }}>
                    <TableRow>
                        <TableCell/>
                        <PurchaseRequestTableHeaderCell></PurchaseRequestTableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {activities.map((activity) =>
                        activity.ticketTypes.map((ticket) => (
                            <PurchaseRequestTableRow
                                startDateTime={activity.startDateTime}
                                ticketType={"cat A"}
                                price={77}
                            />
                        ))
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default FulfilPurchaseRequestTable;
