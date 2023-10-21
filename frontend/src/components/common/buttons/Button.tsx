import React from "react";
import {
    Button as MuiButton,
    ButtonProps as MuiButtonProps,
    Typography,
} from "@mui/material";

interface ButtonProps extends MuiButtonProps {
    children: string;
}

/**
 * Common Button component used in the application. It can take in all the properties listed out by MUI Button API
 * @param {ReactChildren} children
 *
 * @returns {ReactElement} Button
 */
const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
    return (
        <MuiButton {...props}>
            <Typography
                variant="button"
                sx={{
                    transform: {
                        xs: "translateY(2px)",
                        sm: "none",
                        md: "translateY(2px)",
                    },
                }}
            >
                {children}
            </Typography>
        </MuiButton>
    );
};

export default Button;
