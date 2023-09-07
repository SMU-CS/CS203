import React from "react";
import {
    Typography,
    TypographyProps,
    ButtonProps,
    Grid,
    Box,
} from "@mui/material";
import defaultTheme from "../../../assets/theme/defaultTheme";

type ColorType = "mono" | ButtonProps["color"];

interface HeadingOneProps extends TypographyProps {
    children: string;
    colorScheme?: ColorType;
}

/**
 * This is a HeadingOne custom component
 * @property {ColorType} colorScheme
 */
const HeadingOne: React.FC<HeadingOneProps> = ({
    colorScheme,
    children,
    ...props
}) => {
    const isMonoScheme = colorScheme === "mono";
    colorScheme = colorScheme ? colorScheme : "primary";

    return (
        <Grid container xs={12}>
            <Grid
                item
                xs={0.1}
                marginRight={"1.25rem"}
            >
                <Box
                    sx={{
                        backgroundColor: isMonoScheme ? "white" : `${colorScheme}.light`,
                        width: "0.3125rem",
                        height: "3.625rem",
                    }}
                />

            </Grid>
            <Grid item xs={11}>
                <Typography
                    color={isMonoScheme ? "white" : "black"}
                    {...props}
                    variant="h1"
                >
                    {children}
                </Typography>
            </Grid>
        </Grid>
    );
};

export default HeadingOne;
