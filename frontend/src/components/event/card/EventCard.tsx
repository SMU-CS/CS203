import {
    Card,
    CardContent,
    CardMedia,
    Grid,
    Typography,
    CardActionArea,
    CardProps,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { EventListingType } from "../../../types/event";

interface EventCardProps extends CardProps {
    event: EventListingType;
}

const EventCard: React.FC<EventCardProps> = ({ event, ...props }) => {
    const { name, start_datetime, end_datetime, location, bannerURL, id } = event;
    const navigate = useNavigate();

    return (
        <Card {...props}>
            <CardActionArea onClick={() => navigate(`/event/${id}`)}>
                <CardMedia
                    sx={{ width: "100%", height: "10rem" }}
                    image={bannerURL}
                />
                <CardContent>
                    <Grid
                        container
                        justifyContent="space-between"
                        sx={{
                            height: { xs: "120px", sm: "150px", md: "200px" },
                        }}
                        direction="column"
                    >
                        <Grid item>
                            <Typography variant="body2">
                                {`${start_datetime} ~ ${end_datetime}`}
                            </Typography>
                            <Typography variant="body1" fontWeight="bold">
                                {name}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography
                                variant="body2"
                                fontWeight="bold"
                                sx={{ opacity: "60%" }}
                            >
                                {location}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default EventCard;
