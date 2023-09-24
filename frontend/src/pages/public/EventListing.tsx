import React from "react";
import { Grid } from "@mui/material";
import BGPic from "../../assets/illustrations/PurpleNeonBG.jpeg";
import Heading from "../../components/common/headings/Heading";
import SearchBar from "../../components/common/form/SearchBar";
import CategoryBarSlider from "../../components/public/CategoryBarSlider/CategoryBarSlider";
import EventCard from "../../components/event/card/EventCard";
import { useQuery } from "@tanstack/react-query";
import { listEvents } from "../../axios/event/event";

const EventListing: React.FC = () => {
    const { data: events } = useQuery({
        queryKey: ["events"],
        queryFn: () => listEvents(false),
    });

    return (
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
                        <SearchBar data={events} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <CategoryBarSlider />
            </Grid>
            <Grid item sx={{ mt: "3rem" }}>
                <Grid
                    container
                    justifyContent="center"
                    direction="row"
                    columnGap={5}
                    rowGap={5}
                    mb="3rem"
                >
                    {events &&
                        events.map((details, index) => (
                            <Grid xs={9} sm={5} lg={3} key={index} item>
                                <EventCard event={details} />
                            </Grid>
                        ))}
                </Grid>
            </Grid>
        </Grid>
    );
};
export default EventListing;
