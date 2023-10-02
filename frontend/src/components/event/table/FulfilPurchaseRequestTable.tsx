import React, { useState } from "react";
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
    Typography,
    Checkbox,
} from "@mui/material";

interface FulfilPurchaseRequestTableProps extends TableProps {
    activities: Activity[];
}

const FulfilPurchaseRequestTable: React.FC<FulfilPurchaseRequestTableProps> = ({
    activities,
    ...props
}) => {
    const theme = useTheme();

    const [selectedActivities, setSelectedActivities] = useState<string[]>([]);

    const handleActivitySelect = (activityId: string) => {
        setSelectedActivities((prevSelected) => {
            if (prevSelected.includes(activityId)) {
                return prevSelected.filter((id) => id !== activityId);
            } else {
                return [...prevSelected, activityId];
            }
        });
    };

    return (
        <TableContainer elevation={2} component={Paper}>
            <Table sx={{ minWidth: "700px" }} {...props}>
                <TableHead sx={{ bgcolor: theme.palette.primary.light }}>
                    <TableRow>
                        <TableCell width={"10%"} />
                        <TableCell width={"50%"}>
                            <Typography
                                color="white"
                                fontWeight="bold"
                                variant="subtitle2"
                            >
                                Datetime & Location
                            </Typography>
                        </TableCell>
                        <TableCell align="left" width={"30%"}>
                            <Typography
                                color="white"
                                fontWeight="bold"
                                variant="subtitle2"
                            >
                                Ticket Type
                            </Typography>
                        </TableCell>
                        <TableCell align="left" width={"20%"}>
                            <Typography
                                color="white"
                                fontWeight="bold"
                                variant="subtitle2"
                            >
                                Price
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {activities.map((activity) => (
                        <TableRow key={activity.id}>
                            <TableCell align="left" width={"10%"}>
                                <Checkbox
                                    color="primary"
                                    checked={selectedActivities.includes(
                                        activity.id
                                    )}
                                    onChange={() =>
                                        handleActivitySelect(activity.id)
                                    }
                                />
                            </TableCell>
                            <TableCell align="left" width={"40%"}>
                                <Typography variant="subtitle2">
                                    {activity.startDateTime +
                                        " " +
                                        activity.location}
                                </Typography>
                            </TableCell>
                            <TableCell align="left" width={"25%"}>
                                <Typography variant="subtitle2">
                                    {activity.ticketTypes.map(
                                        (ticketType) => ticketType.type
                                    )}
                                </Typography>
                            </TableCell>
                            <TableCell align="left">
                                <Typography variant="subtitle2">
                                    {activity.ticketTypes.map(
                                        (ticketType) => ticketType.price
                                    )}
                                </Typography>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default FulfilPurchaseRequestTable;
