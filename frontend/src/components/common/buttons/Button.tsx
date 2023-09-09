import React from "react";
import {
    Button as MuiButton,
    ButtonProps as MuiButtonProps,
} from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface ButtonProps extends MuiButtonProps {
    children: string;
    colorType: 'primary' | 'secondary';
    hasNextIcon: boolean;
    variantType: 'outlined' | 'contained';
}

/**
 * This is a button that our team create, it takes in mainly
 * @param {ReactChildren} children
 *
 */
const Button: React.FC<ButtonProps> = ({ children, colorType, hasNextIcon, variantType, ...props }) => {

    const isContained = variantType === "contained";
    const nextIcon = hasNextIcon ? <ArrowForwardIcon /> : null;

    return (
        <MuiButton

            variant= {variantType}
            endIcon= {nextIcon}
            

            sx={{
                
                backgroundColor: isContained ? `${colorType}.main` : 'transparent',
                borderColor: isContained ? 'transparent' : `${colorType}.main`,
                boxShadow: isContained ? 4 : 0,
                color: isContained ? "white" : `${colorType}.main`,
                margin: "5px",
                paddingLeft: "25px",
                paddingRight: "25px",
                
                ":hover": {
                    backgroundColor: isContained ? `${colorType}.dark` : 'transparent',
                    borderColor: isContained ? 'transparent' : `${colorType}.dark`,
                    boxShadow: 4,
                    color: isContained ? "white" : `${colorType}.dark`,
                },

            }} 
            
            {...props}
        >
            {children}
        </MuiButton>
    );
};

export default Button;
