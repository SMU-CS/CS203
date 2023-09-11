import React from "react";
import { Typography, TypographyProps, Grid, Box } from "@mui/material";

interface HeadingProps extends TypographyProps {
    children: string;
    color?: "mono" | "primary" | "secondary";
}

/**
 * Custom Heading component
 * Only takes in h1, h2 and h3
 *
 * @property {"mono" | "primary" | "secondary"} color
 * @property {string} children
 * @property {TypographyProps.variant} variant
 *
 * @returns {Typography} A heading element
 */
const Heading: React.FC<HeadingProps> = ({
    color,
    children,
    variant,
    ...props
}) => {
    const isMonoScheme = color === "mono";

    return (
        <Grid container>
            <Grid item xs={0.1} marginRight={"1rem"}>
                <Box
                    sx={{
                        backgroundColor: isMonoScheme
                            ? "white"
                            : `${color}.light`,
                        width: "0.3125rem",
                        height: "100%",
                    }}
                />
            </Grid>
            <Grid item xs={11}>
                <Typography
                    variant={!variant ? "h1" : variant}
                    my={"0.5rem"}
                    color={isMonoScheme ? "white" : "black"}
                    {...props}
                >
                    {children}
                </Typography>
            </Grid>
        </Grid>
    );
};

export default Heading;
