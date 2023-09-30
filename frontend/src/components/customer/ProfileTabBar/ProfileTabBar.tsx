import React, { useState, useEffect } from "react";
import { Tab, Tabs, Paper } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import ProfileDetailsCard from "../ProfileDetailsCard.tsx/ProfileDetailsCard";
import ChangePasswordCard from "../ChangePasswordCard/ChangePasswordCard";
import PaymentMethodsCard from "../PaymentMethodsCard/PaymentMethodsCard";

interface TabData {
    label: string;
    value: string;
    component: JSX.Element;
}

const tabs: TabData[] = [
    {
        label: "Profile Details",
        value: "profiledetails",
        component: <ProfileDetailsCard />,
    },
    {
        label: "Change Password",
        value: "changepassword",
        component: <ChangePasswordCard />,
    },
    {
        label: "Payment Methods",
        value: "paymentmethods",
        component: <PaymentMethodsCard />,
    },
];

const ProfileTabBar: React.FC = () => {
    const { tab } = useParams<{ tab: string }>();
    const navigate = useNavigate();
    const [value, setValue] = useState<string>(
        localStorage.getItem("selectedTab") || tab || "profiledetails"
    );

    const handleChange = (_event: React.ChangeEvent<{}>, newValue: string) => {
        localStorage.setItem("selectedTab", newValue);
        navigate(newValue);
        setValue(newValue);
    };
    useEffect(() => {
        setValue(localStorage.getItem("selectedTab") || "profiledetails");
    }, []);

    return (
        <div style={{ width: "100%", maxWidth: "100vw" }}>
            <Paper elevation={4} sx={{ width: "100%", height: "4.5rem" }}>
                <Tabs variant="standard" value={value} onChange={handleChange}>
                    {tabs.map((item) => (
                        <Tab
                            key={item.value}
                            sx={{
                                width: "12rem",
                                height: "4.5rem",
                            }}
                            label={<h3>{item.label}</h3>}
                            value={item.value}
                        />
                    ))}
                </Tabs>
            </Paper>
        </div>
    );
};

export default ProfileTabBar;
