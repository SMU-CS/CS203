import React from "react";
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
} from "@mui/material";
import TicketPricingTableRows from "./sub-components/TicketPricingTableRows";
import TicketPricingTableHeaderCell from "./sub-components/TicketPricingTableHeaderCell";

interface TicketPricingTableProps extends TableProps {
    activities: Activity[];
    eventName: string;
    eventVenue: string;
}

const TicketPricingTable: React.FC<TicketPricingTableProps> = ({
    activities,
    eventName,
    eventVenue,
    ...props
}) => {
    const theme = useTheme();

    return (
        <TableContainer elevation={2} component={Paper}>
            <Table sx={{ minWidth: "700px" }} {...props}>
                <TableHead sx={{ bgcolor: theme.palette.primary.light }}>
                    <TableRow>
                        <TicketPricingTableHeaderCell />
                    </TableRow>
                </TableHead>
                <TableBody>
                    {activities.map((activity) => (
                        <TicketPricingTableRows
                            key={activity.id}
                            eventName={eventName}
                            eventVenue={eventVenue}
                            activity={activity}
                        />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TicketPricingTable;
