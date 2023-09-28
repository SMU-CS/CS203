import { Paper, Grid, Skeleton, useTheme } from "@mui/material";
import React from "react";

const GallerySectionSkeleton: React.FC = () => {
    const theme = useTheme();

    return (
        <Paper>
            <Grid container>
                <GallerySectionSkeletonItem />
                {theme.breakpoints.up("md") && <GallerySectionSkeletonItem />}
            </Grid>
        </Paper>
    );
};

const GallerySectionSkeletonItem: React.FC = () => {
    return (
        <Grid item md={6} sm={12}>
            <Skeleton variant="rounded" animation="wave" height="40vh" />
        </Grid>
    );
};

export default GallerySectionSkeleton;
