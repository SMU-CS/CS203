import React, { Fragment } from "react";
import { Tabs, Tab, Typography } from "@mui/material";
import { Box, useTheme } from "@mui/material";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import PianoIcon from '@mui/icons-material/Piano';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import NightlifeIcon from '@mui/icons-material/Nightlife';
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

const CategoryBarSlider: React.FC = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <Fragment>
            <div style={{ width: "100%", maxWidth: "100vw" }}>
                <Box
                    sx={{
                        width: "100%",
                        height: "4.5rem",
                    }}
                >
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        aria-label="scrollable force tabs example"
                    >
                        <Tab
                            sx={{ width: "12rem", height: "4.5rem" }}
                            icon={<AllInclusiveIcon />}
                            label={
                                <Typography fontSize="medium"> All </Typography>
                            }
                        />
                        <Tab
                            sx={{ width: "12rem", height: "4.5rem" }}
                            icon={<LocalActivityIcon />}
                            label={
                                <Typography fontSize="medium">
                                    {" "}
                                    Concert{" "}
                                </Typography>
                            }
                        />
                        <Tab
                            sx={{ width: "12rem", height: "4.5rem" }}
                            icon={<PianoIcon />}
                            label={
                                <Typography fontSize="medium">
                                    {" "}
                                    Musical{" "}
                                </Typography>
                            }
                        />
                        <Tab
                            sx={{ width: "12rem", height: "4.5rem" }}
                            icon={<TheaterComedyIcon />}
                            label={
                                <Typography fontSize="medium">
                                    {" "}
                                    Theatre{" "}
                                </Typography>
                            }
                        />
                        <Tab
                            sx={{ width: "10rem", height: "4.5rem" }}
                            icon={<EmojiEmotionsIcon />}
                            label={
                                <Typography fontSize="medium">
                                    {" "}
                                    Comedy{" "}
                                </Typography>
                            }
                        />
                        <Tab
                            sx={{ width: "12rem", height: "4.5rem" }}
                            icon={<NightlifeIcon />}
                            label={
                                <Typography fontSize="medium">
                                    {" "}
                                    Lifestyle{" "}
                                </Typography>
                            }
                        />
                        <Tab
                            sx={{ width: "10rem", height: "4.5rem" }}
                            icon={<SportsVolleyballIcon />}
                            label={
                                <Typography fontSize="medium">
                                    {" "}
                                    Sports{" "}
                                </Typography>
                            }
                        />
                        <Tab
                            sx={{ width: "12rem", height: "4.5rem" }}
                            icon={<FamilyRestroomIcon />}
                            label={
                                <Typography
                                    fontSize="medium"
                                    sx={{ whiteSpace: "nowrap" }}
                                >
                                    {" "}
                                    Family Entertainment{" "}
                                </Typography>
                            }
                        />
                        <Tab
                            sx={{ width: "12rem", height: "4.5rem" }}
                            icon={<SportsKabaddiIcon />}
                            label={
                                <Typography fontSize="medium">
                                    {" "}
                                    Dance{" "}
                                </Typography>
                            }
                        />
                        <Tab
                            sx={{ width: "12rem", height: "4.5rem" }}
                            icon={<MusicNoteIcon />}
                            label={
                                <Typography fontSize="medium">
                                    {" "}
                                    Orchestra{" "}
                                </Typography>
                            }
                        />
                        <Tab
                            sx={{ width: "12rem", height: "4.5rem" }}
                            icon={<HomeRepairServiceIcon />}
                            label={
                                <Typography fontSize="medium">
                                    {" "}
                                    Workshop{" "}
                                </Typography>
                            }
                        />
                    </Tabs>
                </Box>
            </div>
        </Fragment>
    );
};

export default CategoryBarSlider;
