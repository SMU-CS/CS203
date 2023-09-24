import GallerySection from "../components/public/gallery/GallerySection";
import EventCard from "../components/event/card/EventCard";
import { Grid } from "@mui/material";
import Heading from "../components/common/headings/Heading";
import { useQuery } from "@tanstack/react-query";
import { listEvents } from "../axios/event/event";
import { EventListingType } from "../types/event";

const Home = () => {
    const { data: latestEvents  } = useQuery({
        queryKey: ["latestEvents"],
        queryFn: () => listEvents(false),
    });
    const { data: featuredEvents } = useQuery({
        queryKey: ["featuredEvents"],
        queryFn: () => listEvents(true),
    });

    return (
        <>
            <GallerySection slides={featuredEvents} />
            <Grid container direction="column">
                <Grid
                    item
                    sx={{ margin: { xs: "2rem", md: "1.5rem", lg: "3rem" } }}
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
                        {latestEvents &&
                            latestEvents
                                ?.slice(0, 6)
                                .map(
                                    (
                                        details: EventListingType,
                                        index: number
                                    ) => (
                                        <Grid
                                            xs={9}
                                            sm={5}
                                            lg={3}
                                            key={index}
                                            item
                                        >
                                            <EventCard event={details} />
                                        </Grid>
                                    )
                                )}
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};
export default Home;
