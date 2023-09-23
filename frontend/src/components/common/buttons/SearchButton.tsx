import React, { ReactElement } from "react";
import {
    Paper,
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
const SearchButton: React.FC<ButtonProps> = ({
    children,
    onClick = () => {
        console.log("Button pressed");
    },
    ...props
}) => {
    return (
        <Paper
            elevation={2}
            sx={{
                height: "2.625rem",
                width: "5.8125rem",
                backgroundColor: "#651FFF",
                borderRadius: "6.25rem",
                display: "flex", // Use flex display
                alignItems: "center", // Center vertically
                justifyContent: "center", // Center horizontally
            }}
        >
            <MuiButton {...props}>
                <Typography
                    variant="button"
                    sx={{
                        color: "white",
                        transform: {
                            xs: "translateY(2px)",
                            sm: "none",
                            md: "translateY(2px)",
                        },
                    }}
                    onClick={onClick}
                >
                    {children}
                </Typography>
            </MuiButton>
        </Paper>
    );
};

export default SearchButton;
