import React, { ReactElement } from "react";
import {
    Button as MuiButton,
    ButtonProps as MuiButtonProps,
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
    return <MuiButton {...props}>{children}</MuiButton>;
};

export default Button;
