import React, { useState } from "react";
import { Tab, Tabs, Paper, Typography } from "@mui/material";
import {useNavigate } from "react-router-dom";
import ProfileDetailsCard from "../ProfileDetailsCard/ProfileDetailsCard";
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
interface ProfileTabBarComponents {
    pathname : String
}

const ProfileTabBar: React.FC<ProfileTabBarComponents> = ({pathname}) => {

    const navigate = useNavigate();

    const handleChange = (_event: React.ChangeEvent<{}>, valueData: string) => {
        navigate(valueData);
    };
    
    const valueData = pathname == "S3" ? "paymentmethods" : pathname == "S2" ? "changepassword" : "profiledetails";
    console.log(valueData);
    return (
       
            <Paper elevation={4} >
                <Tabs variant="standard" value={valueData} onChange={handleChange}>
                    {tabs.map((item) => (
                        <Tab 
                            key={item.value}
                            sx={{ margin: { xs: "0.5rem", md: "0.8rem", lg: "1rem" } }}
                            label={<Typography variant="body1" fontWeight="bold">{item.label}</Typography>}
                            value={item.value}
                        />
                    ))}
                </Tabs>
            </Paper>
    

    );
};

export default ProfileTabBar;
