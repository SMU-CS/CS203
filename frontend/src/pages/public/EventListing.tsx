import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import BGPic from "../../assets/illustrations/PurpleNeonBG.jpeg";
import Heading from "../../components/common/headings/Heading";
import SearchBar from "../../components/common/form/SearchBar";
import CategoryBarSlider from "../../components/public/CategoryBarSlider/CategoryBarSlider";
import EventCard from "../../components/event/card/EventCard";
import { useQuery } from "@tanstack/react-query";
import { listEvents } from "../../axios/event/event";
import { useTitle } from "../../custom-hooks/useTitle";
import { FormProvider, useForm } from "react-hook-form";

const EventListing: React.FC = () => {
    const [setTitle] = useTitle("Server Error");
    const formState = useForm();
    const { watch } = formState;
    const [searchVal, categoryVal] = watch(["search", "category"]);

    const { data: events } = useQuery({
        queryKey: ["events", searchVal, categoryVal],
        queryFn: () => listEvents(false),
    });

    useEffect(() => {
        if (events) {
            setTitle("Event Listing");
        }
    }, [setTitle, events]);

    return (
        <FormProvider {...formState}>
            <Grid container direction="column">
                <Grid
                    item
                    sx={{
                        width: "100%",
                        height: "20rem",
                    }}
                >
                    <Grid
                        container
                        direction="row"
                        style={{
                            width: "100%",
                            height: "100%",
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${BGPic})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Grid item>
                            <Grid
                                container
                                direction="column"
                                alignItems="center"
                            >
                                <Grid item>
                                    <Heading variant="h1" color="mono">
                                        Events
                                    </Heading>
                                </Grid>
                                <Grid item>
                                    <SearchBar />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <CategoryBarSlider />
                </Grid>
                <Grid item justifyContent="center" my="3rem">
                    <Grid container>
                        <Grid item xs={1.9} sm={1.5} lg={1.4} />
                        <Grid item xs={10}>
                            <Grid container gap={5}>
                                {events &&
                                    events.map((details, index) => (
                                        <Grid
                                            xs={10}
                                            sm={5}
                                            lg={3.5}
                                            key={index}
                                            item
                                        >
                                            <EventCard event={details} />
                                        </Grid>
                                    ))}
                            </Grid>
                        </Grid>

                        <Grid item xs={2} />
                    </Grid>
                </Grid>
            </Grid>
        </FormProvider>
    );
};
export default EventListing;
