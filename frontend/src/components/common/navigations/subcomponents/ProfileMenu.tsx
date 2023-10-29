import React from "react";
import { Menu, MenuItem, Typography } from "@mui/material";
import { useKeycloak } from "@react-keycloak/web";
import { useNavigate } from "react-router-dom";

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
    const { keycloak, initialized } = useKeycloak();
    const navigate = useNavigate();

    return (
        initialized && (
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
                <MenuItem
                    onClick={() => {
                        setAnchorElUser(null);
                        navigate("/profile");
                    }}
                >
                    <Typography textAlign="center">Profile</Typography>
                </MenuItem>
                <MenuItem
                    onClick={() => {
                        setAnchorElUser(null);
                        keycloak.logout();
                        navigate("/");
                    }}
                >
                    <Typography textAlign="center">Logout</Typography>
                </MenuItem>
            </Menu>
        )
    );
};

export default ProfileMenu;
