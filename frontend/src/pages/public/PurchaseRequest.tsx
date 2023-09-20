import React from "react";
import Heading from "../../components/common/headings/Heading";
import EventBanner from "../../components/event/card/EventBanner";
import { Box, Container } from "@mui/material";
import Button from "../../components/common/buttons/Button";
import MakePRTable from "../../components/public/table/make-pr-table/MakePRTable";
import ConcertImage from "../../assets/illustrations/TwiceConcertBanner.jpg"
import SeatMap from "../../assets/illustrations/SeatMap.jpg"

const eventData = {
    event_id: "1",
    name:"TWICE 5TH WORLD TOUR 'READY TO BE' IN SINGAPORE",
    category: "concert",
    artist: "TWICE",
    description: "Something",
    event_banner_url:ConcertImage,
    event_seatmap_url: SeatMap,
    status: "ongoing",
    type:"what is this for?",
    sequence: "some random string",
    activities: [
        {
            activity_id: "1",
            event_id: "1",
            start_datetime:"02 Sep 2023 (Sat.)",
            end_datetime:"02 Sep 2023 (Sat.)",
            location: "Singapore Indoor Stadium",
        },
        {
            activity_id: "2",
            event_id: "1",
            start_datetime:"03 Sep 2023 (Sun.)",
            end_datetime:"03 Sep 2023 (Sun.)",
            location: "Singapore Indoor Stadium",
        },
    ]

}

const PurchaseRequest: React.FC = () => {
    return (
        <Container maxWidth="md">
            <EventBanner />
            <Heading variant="h1" color="primary">
                Purchase Request
            </Heading>
            <Box padding="1rem" />
            <Button variant="contained">View Seat Map</Button>
            <Box padding="1rem" />
            <MakePRTable eventData={eventData}/>
        </Container>
    );
};

export default PurchaseRequest;
