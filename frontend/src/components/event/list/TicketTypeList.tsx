import React from "react";
import { TicketType } from "../../../types/ticket";
import { Typography } from "@mui/material";

interface TicketTypeListProps {
    tickets: TicketType[];
}

const TicketTypeList: React.FC<TicketTypeListProps> = ({ tickets }) => {
    return (
        <ul>
            {tickets.map(({ type, price, id }) => (
                <li key={id}>
                    <Typography variant="subtitle1">{`${type}: $${price.toFixed(
                        2
                    )}`}</Typography>
                </li>
            ))}
        </ul>
    );
};

export default TicketTypeList;
