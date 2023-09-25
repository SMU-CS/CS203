import React from "react";
import Heading from "../../components/common/headings/Heading";
import EventBanner from "../../components/event/card/EventBanner";
import { Box, Container } from "@mui/material";
import Button from "../../components/common/buttons/Button";
import MakePRTable from "../../components/public/table/make-pr-table/MakePRTable";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getEvent } from "../../axios/event/event";

const PurchaseRequest: React.FC = () => {
    const { id } = useParams();

    const { data: event } = useQuery({
        queryKey: ["eventDetails", id],
        queryFn: () => getEvent(id),
    });

    return (
        event && (
            <Container maxWidth="md">
                <EventBanner event={event} />
                <Heading variant="h1" color="primary">
                    Purchase Request
                </Heading>
                <Box padding="1rem" />
                <Button variant="contained">View Seat Map</Button>
                <Box padding="1rem" />
                <MakePRTable activities={event.activities} />
            </Container>
        )
    );
};

export default PurchaseRequest;
