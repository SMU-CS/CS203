import React from "react";
import {
    Button as MuiButton,
    ButtonProps as MuiButtonProps,
} from "@mui/material";
import defaultTheme from "../../../assets/theme/defaultTheme";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface ButtonProps extends MuiButtonProps {
    children: string;
}

/**
 * This is a button that our team create, it takes in mainly
 * @param {ReactChildren} children
 *
 */
const NextButton: React.FC<ButtonProps> = ({ children, ...props }) => {
    return (
        <MuiButton
            sx={{

                fontFamily: 'circular-spotify-bold',
                margin: "5px",
                paddingLeft: "15px",
                paddingRight: "15px",
                color: "white",
                backgroundColor: defaultTheme.palette.primary.main,
                boxShadow: 4,
                
                ":hover": {
                    color: "white",
                    backgroundColor: defaultTheme.palette.secondary.main,
                },

            }} 
            
            endIcon={<ArrowForwardIcon />}

            {...props}
        >
            {children}
        </MuiButton>
    );
};

export default NextButton;
