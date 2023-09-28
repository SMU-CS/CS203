import { Grid, Card, CardMedia, Skeleton, CardContent } from "@mui/material";
import React from "react";

interface EventCardSkeletonType {
    purpose: "listing" | "home";
}

const EventCardSkeleton: React.FC<EventCardSkeletonType> = ({ purpose }) => {
    return (
        <Grid
            xs={purpose === "home" ? 9 : 9.7}
            sm={5}
            lg={purpose === "home" ? 3 : 3.5}
            item
        >
            <Card>
                <CardMedia
                    sx={{
                        width: "100%",
                        height: "10rem",
                    }}
                >
                    <Skeleton
                        animation="wave"
                        variant="rounded"
                        height="100%"
                        width="100%"
                    />
                </CardMedia>
                <CardContent>
                    <Grid
                        container
                        justifyContent="space-between"
                        sx={{
                            height: {
                                xs: "120px",
                                sm: "150px",
                                md: "200px",
                            },
                        }}
                        direction="column"
                    >
                        <Grid item>
                            <Skeleton
                                variant="rectangular"
                                height="1rem"
                                width="60%"
                                sx={{ mb: "0.5rem" }}
                            />
                            <Skeleton
                                variant="rectangular"
                                height="2rem"
                                width="80%"
                            />
                        </Grid>
                        <Grid item>
                            <Skeleton
                                variant="rectangular"
                                height="1rem"
                                width="60%"
                            />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default EventCardSkeleton;
