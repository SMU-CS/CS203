import React from "react";
import MainImage from "../../../assets/app-logos/white-logo.png";
import { Divider, Grid, Fab } from "@mui/material";
import { ExpandLess } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import FooterNames from "./sub-components/FooterNames";

const Footer: React.FC = () => {
    return (
        <Grid
            container
            direction="column"
            position="fixed"
            bottom={0}
            bgcolor={grey[800]}
            p={3} // Stands for padding
        >
            <Grid item>
                <Grid
                    container
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Grid item>
                        <img
                            style={{
                                width: "7rem",
                                margin: "1rem"
                            }}
                            src={MainImage}
                            alt="MainImg"
                        />
                    </Grid>
                    <Grid item>
                        <Fab
                            size="medium"
                            sx={{
                                bgcolor: "primary.main",
                                elevation: 7,
                                ":hover": {
                                    bgcolor: "primary.dark",
                                },
                            }}
                        >
                            <ExpandLess sx={{ color: "white" }} />
                        </Fab>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item>
                <Divider sx={{ bgcolor: "rgba(255,255,255,0.12)" }} />
            </Grid>

            <Grid item mt={3} mb={1}>
                <Typography color="#FFFFFF" fontWeight="bold">
                    Creators
                </Typography>
            </Grid>
            <Grid item>
                {/* To display all the names of the creators */}
                <FooterNames />
            </Grid>
        </Grid>
    );
};

export default Footer;
