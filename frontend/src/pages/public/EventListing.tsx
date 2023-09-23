import React from "react";
import { Fragment } from "react";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import BGPic from "../../assets/illustrations/PurpleNeonBG.jpeg";
import Heading from "../../components/common/headings/Heading";
import SearchBar from "../../components/common/form/SearchBar";
import { EventDetailsType } from "../../types/event";
import GalleryImage1 from "../../assets/illustrations/taytay.jpeg";
import GalleryImage2 from "../../assets/illustrations/TwiceConcertBanner.jpg";
import GalleryImage3 from "../../assets/illustrations/Hallyupopfest.png";
import GalleryImage4 from "../../assets/illustrations/coldplay.png";
import GalleryImage5 from "../../assets/illustrations/charlieputh.jpeg";
import CategoryBarSlider from "../../components/public/CategoryBarSlider/CategoryBarSlider";
import EventCard from "../../components/event/card/EventCard";

const eventDetailsArray: EventDetailsType[] = [
    {
        id: "1",
        title: "TWICE 5TH WORLD TOUR ‘READY TO BE’ IN SINGAPORE",
        startDate: "2/9/2023",
        endDate: "3/9/2023",
        location: "Singapore Indoor Stadium",
        imagePic: GalleryImage1,
    },
    {
        id: "2",
        title: "Taylor Swift The Eras Tour",
        startDate: "2/3/2024",
        endDate: "3/3/2024",
        location: "National Stadium",
        imagePic: GalleryImage2,
    },
    {
        id: "3",
        title: "Hallyupopfest",
        startDate: "2/9/2023",
        endDate: "3/9/2023",
        location: "Singapore Indoor Stadium",
        imagePic: GalleryImage3,
    },
    {
        id: "4",
        title: "Coldplay",
        startDate: "2/9/2023",
        endDate: "3/9/2023",
        location: "National Stadium",
        imagePic: GalleryImage4,
    },
    {
        id: "5",
        title: "charlieputh",
        startDate: "2/9/2023",
        endDate: "3/9/2023",
        location: "National Stadium",
        imagePic: GalleryImage5,
    },
    {
        id: "6",
        title: "Taylor Swift The Eras Tour",
        startDate: "2/9/2023",
        endDate: "3/9/2023",
        location: "Singapore Indoor Stadium",
        imagePic: GalleryImage2,
    },
    {
        id: "7",
        title: "Hallyupopfest",
        startDate: "2/9/2023",
        endDate: "3/9/2023",
        location: "Singapore Indoor Stadium",
        imagePic: GalleryImage3,
    },
];

const EventListing: React.FC = () => {
    // const theme = useTheme();
    // const smResponsive = useMediaQuery(theme.breakpoints.down("md"));
    // const xsResponsive = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Fragment>
            <Grid container direction="column">
                <Grid
                    item
                    sx={{
                        width: "100%",
                        height: "18.75rem",
                        position: "relative",
                    }}
                >
                    <Grid
                        container
                        direction="row"
                        style={{
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${BGPic})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Grid item sx={{ mt: "4.5rem" }}>
                            <Heading variant="h1" color="mono">
                                Events
                            </Heading>
                        </Grid>
                        <Grid item>
                            <SearchBar data={eventDetailsArray} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <CategoryBarSlider />
                </Grid>
                <Grid item sx={{mt: "3rem"}}>
                    <Grid
                        container
                        justifyContent="center"
                        direction="row"
                        columnGap={5}
                        rowGap={5}
                        mb="3rem"
                    >
                        {eventDetailsArray.map((details, index) => (
                            <Grid xs={9} sm={5} lg={3} key={index} item>
                                <EventCard event={details} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Fragment>
    );
};
export default EventListing;
