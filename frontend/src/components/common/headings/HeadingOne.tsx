import React from "react";
import { Typography, TypographyProps, Grid, Box } from "@mui/material";

type ColorType = "mono" | "primary" | "secondary";

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
    // colorScheme = colorScheme ? colorScheme : "primary";

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
                    fontSize={"3rem"}
                    fontWeight={"400"}
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
