import { Button, ButtonProps } from "@mui/material";
import React from "react";

interface NavPageButtonProps extends ButtonProps {
    page: string;
    onClick: () => void;
}

const NavPageButton: React.FC<NavPageButtonProps> = ({
    onClick,
    page,
    ...props
}) => {
    return (
        <Button
            {...props}
            onClick={onClick}
            sx={{
                ml: 2,
                my: 2,
                color: "white",
                display: "block",
            }}
        >
            {page}
        </Button>
    );
};

export default NavPageButton;
