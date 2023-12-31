import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

interface EventBreadCrumbLinksProps {
    to: string;
    bold?: boolean;
    children: string;
}

const EventBreadCrumbLinks: React.FC<EventBreadCrumbLinksProps> = ({
    to,
    bold,
    children,
}) => {
    return (
        <Link to={to} style={{ color: "black", textDecoration: "none" }}>
            <Typography
                fontWeight={bold ? "bold" : "normal"}
                variant="subtitle1"
            >
                {children}
            </Typography>
        </Link>
    );
};

export default EventBreadCrumbLinks;
