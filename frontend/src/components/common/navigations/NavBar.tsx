import React from "react";
import {
    AppBar,
    AppBarProps,
    Toolbar,
    Typography,
    Container,
    IconButton,
    MenuItem,
    Menu,
    Box,
    Button,
    useMediaQuery,
    Tooltip,
    Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AppLogo from "../../../assets/app-logos/white-logo.png";
import ProfilePic from "../../../assets/illustrations/DefaultAvatar.png";
//import { Link } from "react-router-dom";

type UserVariant = "customer" | "admin" | "manager";
type isAuthenticated = "true" | "false";

let pages = ["Home", "Event Listing", "Order History"];
let settings = ["Profile", "Account", "Logout"];
let loginPagesArray = ["Login", "Register"];

interface NavBarProps extends AppBarProps {
    UserVariant?: UserVariant;
    authenticated?: isAuthenticated;
}

const NavBar: React.FC<NavBarProps> = ({
    UserVariant,
    authenticated,
    ...props
}) => {
    if (UserVariant === "admin") {
        pages = ["Event Management", "User Management"];
    }
    if (UserVariant === "manager") {
        pages = ["Event Approval", "User Approval"];
    }

    const isMediumScreen = useMediaQuery("(min-width: 900px)");
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorElNav(event.currentTarget as any);
    };

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorElUser(event.currentTarget as any);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <AppBar position="static" sx={{ backgroundColor: "#651FFF" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <img
                        style={{
                            height: "6.25rem",
                            width: "6.25rem",
                            display: isMediumScreen ? "flex" : "none",
                        }}
                        src={AppLogo}
                        alt="App Logo"
                    />
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" },
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>

                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                >
                                    <Typography textAlign="center">
                                        {page}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <img
                        style={{
                            height: "6.25rem",
                            width: "6.25rem",
                            display: isMediumScreen ? "none" : "flex",
                            marginRight: "40%",
                        }}
                        src={AppLogo}
                        alt="App Logo"
                    />
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", md: "flex" },
                            marginLeft: "1rem",
                        }}
                    >
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{
                                    ml: 2,
                                    my: 2,
                                    color: "white",
                                    display: "block",
                                }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        {authenticated === "true" && (
                            <Tooltip title="Open settings">
                                <IconButton
                                    onClick={handleOpenUserMenu}
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
                        <Menu
                            sx={{ mt: "45px" }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem
                                    key={setting}
                                    onClick={handleCloseUserMenu}
                                >
                                    <Typography textAlign="center">
                                        {setting}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                        {authenticated === "false" && (
                            <Box
                                sx={{
                                    flexGrow: 1,
                                    display: { xs: "flex", md: "flex" },
                                    marginLeft: "1rem",
                                }}
                            >
                                {loginPagesArray.map((loginPage) => (
                                    <Button
                                        key={loginPage}
                                        onClick={handleCloseNavMenu}
                                        sx={{
                                            ml: 2,
                                            my: 2,
                                            color: "white",
                                            display: "block",
                                        }}
                                    >
                                        {loginPage}
                                    </Button>
                                ))}
                            </Box>
                        )}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default NavBar;
