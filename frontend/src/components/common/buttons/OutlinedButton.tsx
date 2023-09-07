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
const OutlinedButton: React.FC<ButtonProps> = ({ children, ...props }) => {
    return (
        <MuiButton
            sx={{

                margin: "5px",
                paddingLeft: "15px",
                paddingRight: "15px",
                ":hover": {
                    color: defaultTheme.palette.secondary.main,
                    borderColor: defaultTheme.palette.secondary.main,
                    outlineWidth: "5px",
                    backgroundColor: "transparent",
                    boxShadow: 4,
                },
            }} 
            
            variant=  "outlined"
            

            {...props}
        >
            {children}
        </MuiButton>
    );
};

export default OutlinedButton;
