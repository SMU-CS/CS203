import React from "react";
import { Outlet } from "react-router-dom";
import { Grid } from "@mui/material";

const ProfileDetails: React.FC = () => {
    return (
        <Grid container justifyContent="center">
            <Grid item>
                <Outlet />
            </Grid>
        </Grid>
    );
};

export default ProfileDetails;
