import React from "react";
import {
    Button as MuiButton,
    ButtonProps as MuiButtonProps,
} from "@mui/material";
import defaultTheme from "../../../assets/theme/defaultTheme";

interface ButtonProps extends MuiButtonProps {
    children: string;
}

/**
 * This is a button that our team create, it takes in mainly
 * @param {ReactChildren} children
 *
 */
const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
    return (
        <MuiButton
            sx={{
                
                color: "white",
                backgroundColor: defaultTheme.palette.primary.main,
                margin: "5px",
                paddingLeft: "15px",
                paddingRight: "15px",
                boxShadow: 4,
                
                ":hover": {
                    color: "white",
                    backgroundColor: defaultTheme.palette.secondary.main,
                },

            }} 
            
            {...props}
        >
            {children}
        </MuiButton>
    );
};

export default Button;
