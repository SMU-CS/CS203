import React from "react";
import { Menu, MenuItem, Typography } from "@mui/material";

const settings = ["Profile", "Logout"];

interface ProfileMenuProps {
    setAnchorElUser: (value: React.SetStateAction<HTMLElement | null>) => void;
    anchorElUser: HTMLElement | null;
}

/**
 * This component is used to render various profile options tied to customer or admin
 * @returns {React.Component} A ProfileMenu component
 */

const ProfileMenu: React.FC<ProfileMenuProps> = ({
    setAnchorElUser,
    anchorElUser,
}) => {
    return (
        <Menu
            anchorEl={anchorElUser}
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={() => setAnchorElUser(null)}
        >
            {settings.map((setting) => (
                <MenuItem key={setting} onClick={() => setAnchorElUser(null)}>
                    <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
            ))}
        </Menu>
    );
};

export default ProfileMenu;
