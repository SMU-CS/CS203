import React from "react";
import {
    Typography,
    TypographyProps,
    ButtonProps,
    Grid,
    Box,
} from "@mui/material";

type ColorType = "mono" | ButtonProps["color"];

interface HeadingOneProps extends TypographyProps {
    children: string;
    colorScheme?: ColorType;
}

/**
 * This is a HeadingOne custom component
 * @property {ColorType} colorScheme
 */
const HeadingThree: React.FC<HeadingOneProps> = ({
    colorScheme,
    children,
    ...props
}) => {
    const isMonoScheme = colorScheme === "mono";
    colorScheme = colorScheme ? colorScheme : "primary";

    return (
        <Grid container xs={12}>
            <Grid item xs={0.1} marginRight={"1rem"}>
                <Box
                    sx={{
                        backgroundColor: isMonoScheme
                            ? "white"
                            : `${colorScheme}.light`,
                        width: "0.3125rem",
                        height: "100%",
                    }}
                />
            </Grid>
            <Grid item xs={11}>
                <Typography
                    marginTop={"0.5rem"}
                    marginBottom={"0.5rem"}
                    textAlign={"left"}
                    fontFamily={""}
                    fontSize={"2rem"}
                    fontWeight={"400"}
                    color={isMonoScheme ? "white" : "black"}
                    textTransform={"uppercase"}
                    {...props}
                    variant="h3"
                >
                    {children}
                </Typography>
            </Grid>
        </Grid>
    );
};

export default HeadingThree;
