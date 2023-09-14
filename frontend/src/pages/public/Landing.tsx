import React, { Fragment } from "react";
import Footer from "../../components/common/Footer";
import GallerySection from "../../components/public/GallerySection";
import ConcertImage1 from "../../assets/illustrations/Concert1.png";
import ConcertImage2 from "../../assets/illustrations/taytay.jpeg";
import EventCard from "../../components/public/EventCard";
import { Grid } from "@mui/material";
import Heading from "../../components/common/headings/Heading";
import GalleryImage1 from "../../assets/illustrations/taytay.jpeg"
import GalleryImage2 from "../../assets/illustrations/Concert1.png"
import GalleryImage3 from "../../assets/illustrations/Hallyupopfest.png"
import GalleryImage4 from "../../assets/illustrations/coldplay.png"
import GalleryImage5 from "../../assets/illustrations/charlieputh.jpeg"

interface GallerySectionDetails{
    id: string;
    GalleryPic : any;
}

const GalleryDetailsArray: GallerySectionDetails[] = [
    {
        id: "1",
        GalleryPic: GalleryImage1,
    },
    {
        id: "2",
        GalleryPic: GalleryImage2,
    },
    {
        id: "3",
        GalleryPic: GalleryImage3,
    },
    {
        id: "4",
        GalleryPic: GalleryImage4,
    },
    {
        id: "5",
        GalleryPic: GalleryImage5,
    },
    {
        id: "6",
        GalleryPic: GalleryImage2,
    },
]

interface EventDetails {
    id: string;
    title: string;
    startDate: string;
    endDate: string;
    location: string;
    imagePic: any;
}

const eventDetailsArray: EventDetails[] = [
    {
        id: "1",
        title: "TWICE 5TH WORLD TOUR ‘READY TO BE’ IN SINGAPORE",
        startDate: "2/9/2023",
        endDate: "3/9/2023",
        location: "Singapore Indoor Stadium",
        imagePic: ConcertImage1,
    },
    {
        id: "2",
        title: "Taylor Swift The Eras Tour",
        startDate: "2/3/2024",
        endDate: "3/3/2024",
        location: "National Stadium",
        imagePic: ConcertImage2,
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
        imagePic: ConcertImage2,
    },
    {
        id: "7",
        title: "Event 7",
        startDate: "2/9/2023",
        endDate: "3/9/2023",
        location: "Singapore Indoor Stadium",
        imagePic: ConcertImage2,
    },
];

const Landing = () => {
    return (
        <div>
            <GallerySection galleryDetails={GalleryDetailsArray}/>
            <Grid container direction="column" style={{ minHeight: "100vh" }} rowGap={5}>
                <Grid item marginTop={"3rem"} marginLeft={"3rem"}>
                    <Heading color="primary"> What's New </Heading>
                </Grid>
                <Grid item>
                    <Grid
                        container
                        justifyContent={"center"}
                        direction="row"
                        columnGap={9}
                        rowGap={6}
                        
                    >
                        {eventDetailsArray
                            //Qn: is the data sorted from newest event to oldest event? need to display the latest 6 events
                            .slice(0, 6)
                            .map((details, index) => (
                                <Grid key={index} item>
                                    <EventCard {...details} />
                                </Grid>
                            ))}
                    </Grid>
                </Grid>
                <Grid item>
                    <Footer />
                </Grid>
            </Grid>
        </div>
    );
};
export default Landing;
