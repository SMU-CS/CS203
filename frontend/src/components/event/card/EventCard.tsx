import {
    Card,
    CardContent,
    CardMedia,
    Grid,
    Typography,
    useTheme,
    useMediaQuery,
    CardActionArea,
    CardProps,
} from "@mui/material";
import { formatDateStrToDateWithDayStr } from "../../../functions/formatter";
import { useNavigate } from "react-router-dom";
import { EventDetailsType } from "../../../types/event";

interface EventCardProps extends CardProps {
    event: EventDetailsType;
}

const EventCard: React.FC<EventCardProps> = ({ event, ...props }) => {
    const { title, startDate, endDate, location, imagePic, id } = event;
    const navigate = useNavigate();
    const theme = useTheme();
    const smResponsive = useMediaQuery(theme.breakpoints.down("md"));
    const xsResponsive = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Card {...props}>
            <CardActionArea onClick={() => navigate(`/events/detail/${id}`)}>
                <CardMedia
                    sx={{ width: "100%", height: "10rem" }}
                    image={imagePic}
                />
                <CardContent>
                    <Grid
                        container
                        justifyContent="space-between"
                        height={
                            xsResponsive
                                ? "120px"
                                : smResponsive
                                ? "150px"
                                : "200px"
                        }
                        direction="column"
                    >
                        <Grid item>
                            <Typography variant="body2">
                                {formatDateStrToDateWithDayStr(startDate)} ~{" "}
                                {formatDateStrToDateWithDayStr(endDate)}
                            </Typography>
                            <Typography variant="body1" fontWeight="bold">
                                {title}
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
