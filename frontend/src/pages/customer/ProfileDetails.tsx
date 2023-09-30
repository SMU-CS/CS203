import React from "react";
import { Outlet } from "react-router-dom";
import ProfileTabBar from "../../components/customer/ProfileTabBar/ProfileTabBar";
import { Grid } from "@mui/material";

const ProfileDetails: React.FC = () => {
  return (
    <div>
      <ProfileTabBar />
      <Grid container justifyContent="center">
        <Grid item>
            <Outlet />
        </Grid>

      </Grid>
    </div>
  );
};

export default ProfileDetails;
