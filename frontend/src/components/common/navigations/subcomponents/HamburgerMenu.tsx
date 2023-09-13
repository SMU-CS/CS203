import {
    Box,
    BoxProps,
    IconButton,
    Menu,
    MenuItem,
    Typography,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

interface HamburgerMenuProps extends BoxProps {
    pages: string[];
    setAnchorElNav: (value: React.SetStateAction<HTMLElement | null>) => void;
    anchorElNav: HTMLElement | null;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
    pages,
    setAnchorElNav,
    anchorElNav,
    ...props
}) => {
    return (
        <Box
            {...props}
            sx={{
                display: { sm: "flex", md: "none" },
            }}
        >
            <IconButton
                size="large"
                onClick={(event) => setAnchorElNav(event.currentTarget)}
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
                onClose={() => setAnchorElNav(null)}
                sx={{
                    display: { xs: "block", md: "none" },
                }}
            >
                {pages.map((page) => (
                    <MenuItem key={page} onClick={() => setAnchorElNav(null)}>
                        <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    );
};

export default HamburgerMenu;
