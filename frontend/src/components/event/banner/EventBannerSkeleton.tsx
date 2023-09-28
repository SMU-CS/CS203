import { Box, Grid, Skeleton } from "@mui/material";
import React from "react";

const EventBannerSkeleton: React.FC = () => {
    return (
        <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
            gap={3}
        >
            <Grid item sx={{ width: "70%" }}>
                <Skeleton
                    sx={{ height: { xs: "35vw", sm: "33vw", lg: "25vw" } }}
                    animation="wave"
                    variant="rounded"
                    width="100%"
                />
            </Grid>
            <Grid item>
                <Grid
                    container
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    gap={4}
                >
                    <Box
                        bgcolor={({ palette }) => palette.primary.light}
                        width="90px"
                        height="10px"
                    />
                    <Grid item>
                        <Grid container direction="column" alignItems="center">
                            <Skeleton width="300px" height="2rem" />
                            <Skeleton width="180px" height="1rem" />
                        </Grid>
                    </Grid>

                    <Box
                        bgcolor={({ palette }) => palette.primary.dark}
                        width="60px"
                        height="10px"
                    />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default EventBannerSkeleton;
