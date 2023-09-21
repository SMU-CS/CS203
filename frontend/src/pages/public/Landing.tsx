import GallerySection from "../../components/public/gallery/GallerySection";
import EventCard from "../../components/event/card/EventCard";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import Heading from "../../components/common/headings/Heading";
import GalleryImage1 from "../../assets/illustrations/taytay.jpeg";
import GalleryImage2 from "../../assets/illustrations/TwiceConcertBanner.jpg";
import GalleryImage3 from "../../assets/illustrations/Hallyupopfest.png";
import GalleryImage4 from "../../assets/illustrations/coldplay.png";
import GalleryImage5 from "../../assets/illustrations/charlieputh.jpeg";
import { EventDetailsType } from "../../types/event";

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
        title: "Event 3",
        startDate: "2/9/2023",
        endDate: "3/9/2023",
        location: "Singapore Indoor Stadium",
        imagePic: GalleryImage3,
    },
    {
        id: "4",
        title: "Event 4",
        startDate: "2/9/2023",
        endDate: "3/9/2023",
        location: "National Stadium",
        imagePic: GalleryImage4,
    },
    {
        id: "5",
        title: "Event 5",
        startDate: "2/9/2023",
        endDate: "3/9/2023",
        location: "National Stadium",
        imagePic: GalleryImage5,
    },
    {
        id: "6",
        title: "Event 6",
        startDate: "2/9/2023",
        endDate: "3/9/2023",
        location: "Singapore Indoor Stadium",
        imagePic: GalleryImage2,
    },
    {
        id: "7",
        title: "Event 7",
        startDate: "2/9/2023",
        endDate: "3/9/2023",
        location: "Singapore Indoor Stadium",
        imagePic: GalleryImage3,
    },
];

const Landing = () => {
    const theme = useTheme();
    const smResponsive = useMediaQuery(theme.breakpoints.down("md"));
    const xsResponsive = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <div>
            <GallerySection slides={eventDetailsArray} />
            <Grid container direction="column">
                <Grid
                    item
                    margin={
                        xsResponsive ? "2rem" : smResponsive ? "1.5rem" : "3rem"
                    }
                >
                    <Heading color="primary"> What's New </Heading>
                </Grid>
                <Grid item>
                    <Grid
                        container
                        justifyContent="center"
                        direction="row"
                        columnGap={5}
                        rowGap={5}
                        mb="3rem"
                    >
                        {eventDetailsArray.slice(0, 6).map((details, index) => (
                            <Grid xs={9} sm={5} lg={3} key={index} item>
                                <EventCard event={details} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};
export default Landing;
