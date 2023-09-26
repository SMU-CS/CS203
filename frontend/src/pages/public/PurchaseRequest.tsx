import React, { useEffect } from "react";
import Heading from "../../components/common/headings/Heading";
import EventBanner from "../../components/event/card/EventBanner";
import { Box, Container } from "@mui/material";
import MakePRTable from "../../components/public/table/make-pr-table/MakePRTable";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getEvent } from "../../axios/event/event";
import SeatMapDialog from "../../components/public/dialog/SeatMapDialog";
import { useTitle } from "../../custom-hooks/useTitle";

const PurchaseRequest: React.FC = () => {
    const [setTitle] = useTitle("Server Error");
    const { id } = useParams();

    const { data: event } = useQuery({
        queryKey: ["eventDetails", id],
        queryFn: () => getEvent(id),
    });

    useEffect(() => {
        if (event) {
            setTitle(`PR | ${event.name}`);
        }
    }, [setTitle, event]);

    return (
        event && (
            <Container maxWidth="md">
                <EventBanner event={event} />
                <Heading variant="h1" color="primary">
                    Purchase Request
                </Heading>
                <Box padding="1rem" />
                <SeatMapDialog src={event.seatMapURL} />
                <Box padding="1rem" />
                <MakePRTable activities={event.activities} />
            </Container>
        )
    );
};

export default PurchaseRequest;
