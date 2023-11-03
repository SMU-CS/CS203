import React from "react";
import { Tab, Tabs, Paper, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

interface TabData {
    label: string;
    value: string;
}

const tabs: TabData[] = [
    {
        label: "Profile Details",
        value: "/profile",
    },
    {
        label: "Change Password",
        value: "/profile/changepassword",
    },
    {
        label: "Payment Methods",
        value: "/profile/paymentmethods",
    },
];

const ProfileTabBar: React.FC = ({}) => {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <Paper elevation={4}>
            <Tabs variant="standard" value={location.pathname}>
                {tabs.map(({ value, label }) => (
                    <Tab
                        onClick={() => navigate(value)}
                        key={value}
                        sx={{
                            margin: { xs: "0.5rem", md: "0.8rem", lg: "1rem" },
                        }}
                        label={
                            <Typography variant="body1" fontWeight="bold">
                                {label}
                            </Typography>
                        }
                        value={value}
                    />
                ))}
            </Tabs>
        </Paper>
    );
};

export default ProfileTabBar;
