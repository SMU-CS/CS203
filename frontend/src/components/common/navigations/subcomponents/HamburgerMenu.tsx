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
import { useNavigate } from "react-router-dom";

interface HamburgerMenuProps extends BoxProps {
    pages: { text: string; link: string }[];
    setAnchorElNav: (value: React.SetStateAction<HTMLElement | null>) => void;
    anchorElNav: HTMLElement | null;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
    pages,
    setAnchorElNav,
    anchorElNav,
    ...props
}) => {
    const navigate = useNavigate();

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
                {pages.map(({ text, link }) => (
                    <MenuItem
                        key={text}
                        onClick={() => {
                            setAnchorElNav(null);
                            navigate(link);
                        }}
                    >
                        <Typography textAlign="center">{text}</Typography>
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    );
};

export default HamburgerMenu;
