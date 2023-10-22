import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import ProfileTabBar from "../../components/customer/ProfileTabBar/ProfileTabBar";
import { Grid } from "@mui/material";

const ProfileDetails: React.FC = () => {
  const location = useLocation()
  console.log(location.pathname)
  const pathLocation = location.pathname == "/profile/id:/paymentmethods" ? "S3" : location.pathname == "/profile/id:/changepassword" ? "S2" : "S1"  
  console.log(pathLocation);
  return (
    <>
      <ProfileTabBar pathname={pathLocation}/>
      <Grid container justifyContent="center">
        <Grid item>
            <Outlet />
        </Grid>

      </Grid>
    </>
  );
};

export default ProfileDetails;
