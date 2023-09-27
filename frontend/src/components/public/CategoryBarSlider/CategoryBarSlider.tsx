import React from "react";
import { Tabs, Tab, Typography, Paper } from "@mui/material";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import PianoIcon from "@mui/icons-material/Piano";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import NightlifeIcon from "@mui/icons-material/Nightlife";
import SportsVolleyballIcon from "@mui/icons-material/SportsVolleyball";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import SportsKabaddiIcon from "@mui/icons-material/SportsKabaddi";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import { Controller, useFormContext } from "react-hook-form";

const tabs = [
    { label: "All", value: "all", Icon: AllInclusiveIcon },
    { label: "Concert", value: "concert", Icon: LocalActivityIcon },
    { label: "Musical", value: "musical", Icon: PianoIcon },
    { label: "Theatre", value: "theatre", Icon: TheaterComedyIcon },
    { label: "Comedy", value: "comedy", Icon: EmojiEmotionsIcon },
    { label: "Lifestyle", value: "lifestyle", Icon: NightlifeIcon },
    { label: "Sports", value: "sports", Icon: SportsVolleyballIcon },
    {
        label: "Family Entertainment",
        value: "family",
        Icon: FamilyRestroomIcon,
    },
    { label: "Dance", value: "dance", Icon: SportsKabaddiIcon },
    { label: "Orchestra", value: "orchestra", Icon: MusicNoteIcon },
    { label: "Workshop", value: "workshop", Icon: HomeRepairServiceIcon },
];

const CategoryBarSlider: React.FC = () => {
    const { control, setValue } = useFormContext();

    return (
        <Paper elevation={4} sx={{ borderRadius: 0 }}>
            <Controller
                name="category"
                control={control}
                defaultValue="all"
                render={({ field }) => (
                    <Tabs
                        sx={{ width: "98vw" }}
                        {...field}
                        value={field.value || false}
                        onChange={({}, newValue) =>
                            setValue(field.name, newValue)
                        }
                        variant="scrollable"
                    >
                        {tabs.map(({ label, value, Icon }, index) => (
                            <Tab
                                sx={{ width: "12rem" }}
                                icon={<Icon />}
                                key={index}
                                value={value}
                                label={
                                    <Typography fontSize="medium">
                                        {label}
                                    </Typography>
                                }
                            />
                        ))}
                    </Tabs>
                )}
            />
        </Paper>
    );
};

export default CategoryBarSlider;
