import React from "react";
import {
    AppBar,
    AppBarProps,
    Toolbar,
    Container,
    IconButton,
    Grid,
    Tooltip,
    Avatar,
} from "@mui/material";
import ProfilePic from "../../../assets/illustrations/DefaultAvatar.png";
import NavLogo from "./subcomponents/NavLogo";
import HamburgerMenu from "./subcomponents/HamburgerMenu";
import ProfileMenu from "./subcomponents/ProfileMenu";
import NavPageButton from "./subcomponents/NavPageButton";

const pages = {
    customer: ["Home", "Event Listing", "Order History"],
    admin: ["Event Management", "User Management"],
    manager: ["Event Approval", "User Approval"],
    guest: ["Home", "Event Listing"],
};
const authPages = ["Login", "Register"];

interface NavBarProps extends AppBarProps {
    role: "customer" | "admin" | "manager" | "guest";
}

const NavBar: React.FC<NavBarProps> = ({ role, ...props }) => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
        null
    );
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
        null
    );

    return (
        <AppBar
            {...props}
            position="static"
            sx={{ backgroundColor: "#651FFF" }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <HamburgerMenu
                        anchorElNav={anchorElNav}
                        setAnchorElNav={setAnchorElNav}
                        pages={pages[role]}
                    />
                    <NavLogo />

                    <Grid
                        container
                        width="100%"
                        flexDirection={{ md: "row", xs: "row-reverse" }}
                        justifyContent="space-between"
                    >
                        <Grid
                            item
                            display={{ xs: "none", md: "flex" }}
                            flexDirection="row"
                        >
                            {pages[role].map((page) => (
                                <NavPageButton
                                    key={page}
                                    page={page}
                                    onClick={() => setAnchorElNav(null)}
                                />
                            ))}
                        </Grid>
                        <Grid item display="flex" flexDirection="row">
                            {role !== "guest" && (
                                <Tooltip title="Open settings">
                                    <IconButton
                                        onClick={(event) =>
                                            setAnchorElUser(event.currentTarget)
                                        }
                                        sx={{ p: 0 }}
                                    >
                                        <Avatar
                                            sx={{ width: 56, height: 56 }}
                                            alt="Remy Sharp"
                                            src={ProfilePic}
                                        />
                                    </IconButton>
                                </Tooltip>
                            )}
                            <ProfileMenu
                                anchorElUser={anchorElUser}
                                setAnchorElUser={setAnchorElUser}
                            />
                            {role === "guest" &&
                                authPages.map((page) => (
                                    <NavPageButton
                                        key={page}
                                        page={page}
                                        onClick={() => setAnchorElNav(null)}
                                    />
                                ))}
                        </Grid>
                    </Grid>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default NavBar;
