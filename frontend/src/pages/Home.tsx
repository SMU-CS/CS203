import { useEffect } from "react";
import GallerySection from "../components/public/gallery/GallerySection";
import EventCard from "../components/event/card/EventCard";
import { Grid } from "@mui/material";
import Heading from "../components/common/headings/Heading";
import { useQuery } from "@tanstack/react-query";
import { listEvents } from "../axios/event/event";
import { EventListingType } from "../types/event";
import { useTitle } from "../custom-hooks/useTitle";
import EventCardSkeleton from "../components/event/card/EventCardSkeleton";
import GallerySectionSkeleton from "../components/public/gallery/GallerySectionSkeleton";

const Home = () => {
    // Backend Queries
    const { data: latestEvents } = useQuery({
        queryKey: ["latestEvents"],
        queryFn: () => listEvents(false),
    });
    const { data: featuredEvents } = useQuery({
        queryKey: ["featuredEvents"],
        queryFn: () => listEvents(true),
    });

    // Page title metadate manipulation
    const [setTitle] = useTitle("Server Error");

    useEffect(() => {
        if (latestEvents && featuredEvents) {
            setTitle("EzTix");
        }
    }, [setTitle, latestEvents, featuredEvents]);

    return (
        <>
            {!featuredEvents ? (
                <GallerySectionSkeleton />
            ) : (
                <GallerySection slides={featuredEvents} />
            )}

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
                        {!latestEvents
                            ? [1, 2, 3, 4, 5, 6].map((num) => (
                                  <EventCardSkeleton purpose="home" key={num} />
                              ))
                            : latestEvents
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
