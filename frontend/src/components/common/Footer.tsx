import React from "react";
import MainImage from "../../assets/app-logos/white-logo.png";
import { Divider, Grid, Fab } from "@mui/material";
import { ExpandLess } from "@mui/icons-material";

const Footer: React.FC = () => {
    return (
        <div>
            <Grid
                container
                direction={"column"}
                position="fixed"
                bottom={0}
                marginLeft="-2rem"
                sx={{ backgroundColor: "#424242" }}
            >
                <Grid item>
                    <Grid
                        container
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                        marginBottom="-0.5rem"
                    >
                        <Grid item xs={2} textAlign={"center"}>
                            <img
                                style={{
                                    width: "7rem",
                                }}
                                src={MainImage}
                                alt="MainImg"
                            />
                        </Grid>
                        <Grid item xs={9}></Grid>
                        <Grid item xs={1} textAlign={"center"}>
                            <Fab
                                size={"medium"}
                                sx={{
                                    backgroundColor: "#651FFF",
                                    boxShadow:
                                        "0px 2px 16px 1px rgba(0, 0, 0, 0.12), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 4px 5px -2px rgba(0, 0, 0, 0.20)",
                                }}
                            >
                                <ExpandLess sx={{ color: "white" }} />
                            </Fab>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item>
                    <Grid
                        container
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                        marginBottom="-1.5rem"
                        maxHeight="8rem"
                    >
                        <Grid item xs={11.5}>
                            <Divider
                                style={{
                                    backgroundColor: "#FFFFFF",
                                    opacity: "12%",
                                }}
                            />
                            <Grid item marginBottom="-1.5rem">
                                <p
                                    style={{
                                        //FontFamily and Fontsize to be changed
                                        fontFamily: "",
                                        fontSize: "1.5rem",
                                        color: "white",
                                    }}
                                >
                                    Creators
                                </p>
                            </Grid>
                            <Grid
                                container
                                direction="row"
                                alignItems="center"
                                justifyContent="left"
                            >
                                <Grid item>
                                    <Grid
                                        container
                                        direction="row"
                                        alignItems="flex-start"
                                        justifyContent="flex-start"
                                        spacing="4rem"
                                    >
                                        <Grid item>
                                            <p
                                                style={{
                                                    color: "white",
                                                }}
                                            >
                                                Eric
                                            </p>
                                        </Grid>
                                        <Grid item>
                                            <p
                                                style={{
                                                    color: "white",
                                                }}
                                            >
                                                Hui Feng
                                            </p>
                                        </Grid>
                                        <Grid item>
                                            <p
                                                style={{
                                                    color: "white",
                                                }}
                                            >
                                                Wesly
                                            </p>
                                        </Grid>
                                        <Grid item>
                                            <p
                                                style={{
                                                    color: "white",
                                                }}
                                            >
                                                Damien
                                            </p>
                                        </Grid>
                                        <Grid item>
                                            <p
                                                style={{
                                                    color: "white",
                                                }}
                                            >
                                                En Xi
                                            </p>
                                        </Grid>
                                        <Grid item>
                                            <p
                                                style={{
                                                    color: "white",
                                                }}
                                            >
                                                Maverick
                                            </p>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default Footer;
