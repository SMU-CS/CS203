import React from "react";
import { Activity } from "../../../types/activity";
import { Typography } from "@mui/material";
import TicketTypeList from "./TicketTypeList";

interface ActivityListProps {
    activities: Activity[];
}

const ActivityList: React.FC<ActivityListProps> = ({ activities }) => {
    return (
        <ul>
            {activities.map((activity) => (
                <li>
                    <Typography variant="subtitle1">
                        {activity.startDateTime}
                    </Typography>
                    <TicketTypeList tickets={activity.ticketTypes} />
                </li>
            ))}
        </ul>
    );
};

export default ActivityList;
