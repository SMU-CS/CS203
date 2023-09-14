import { Fragment } from "react";
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
    Button,
} from "@mui/material";
import EventCardFormat from "../../functions/EventCardFormat";
const {formatDate} = EventCardFormat;
import { useNavigate } from "react-router-dom";

const EventCard = ( details: { id: string; title: string; startDate: string; endDate: string; location: string; imagePic: any; } ) => {
    const { title, startDate, endDate, location, imagePic } = details;
    const navigate = useNavigate();
    return (
        <Fragment>
            <Card sx={{ width: "24vw", height: "36vh", position: "relative" }}>
                <CardMedia
                    sx={{ width: "100%", height: "15vh" }}
                    image={imagePic}
                />
                <CardContent>
                    <Typography
                        fontSize={"0.75rem"}
                        sx={{ marginBottom: "0.5rem" }}
                    >
                        {formatDate(startDate)} ~ {formatDate(endDate)} 
                    </Typography>
                    <Typography
                        fontFamily={"CircularSpotify"}
                        fontWeight={"bold"}
                        fontSize={"0.95rem"}
                    >
                        {title}
                    </Typography>
                    <CardContent
                        sx={{ position: "absolute", bottom: 0, left: 0 }}
                    >
                        <Typography
                            fontFamily={"Lato"}
                            fontSize={"0.75rem"}
                            fontWeight={"700"}
                            sx={{ opacity: "60%" }}
                        >
                            {location}
                        </Typography>
                    </CardContent>
                </CardContent>
            </Card>
        </Fragment>
    );
};

export default EventCard;
