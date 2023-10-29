import {
    Card,
    CardContent,
    CardMedia,
    Grid,
    Typography,
    CardProps,
    Button,
    CardActionArea,
    CardActions,
    Chip,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { PurchaseRequestListing } from "../../../types/pr";

interface OrderCardProps extends CardProps {
    event: PurchaseRequestListing;
}

const cardStats = {
    pending: {
        buttonColor: "primary",
        chipColor: "primary.dark",
        buttonText: "Fulfil Purchase Request",
        chipText: "Pending Payment",
    },

    processing: {
        buttonColor: "secondary",
        chipColor: "secondary.dark",
        buttonText: "View Purchase Request",
        chipText: "Processing Request",
    },

    recurring: {
        buttonColor: "primary",
        chipColor: "primary.light",
        buttonText: "View Ticket",
        chipText: "Recurring Event",
    },

    past: {
        buttonColor: "secondary",
        chipColor: "disabled",
        buttonText: "View History",
        chipText: "Past Event",
    },
};

const OrderCard: React.FC<OrderCardProps> = ({ event, ...props }) => {
    const { eventName, bannerURL, id, status } = event;
    const navigate = useNavigate();

    return (
        <Card {...props}>
            <CardActionArea onClick={() => navigate(`/event/${id}`)}>
                <CardMedia
                    sx={{
                        width: "100%",
                        height: { xs: "6rem", sm: "8rem", md: "10rem" },
                    }}
                    image={bannerURL}
                />
                <CardContent>
                    <Grid
                        container
                        sx={{
                            height: { xs: "120px", sm: "150px", md: "180px" },
                        }}
                        direction="column"
                    >
                        <Grid item>
                            <Chip
                                sx={{
                                    color: "#fff",
                                    bgcolor: cardStats[status].chipColor,
                                }}
                                label={
                                    <Typography
                                        fontFamily="subtitle2"
                                        fontWeight="bold"
                                    >
                                        {cardStats[status].chipText}
                                    </Typography>
                                }
                            />
                        </Grid>

                        <Typography
                            variant="body1"
                            fontWeight="bold"
                            mt={"0.5rem"}
                        >
                            {eventName}
                        </Typography>
                    </Grid>
                </CardContent>
            </CardActionArea>
            <Grid sx={{ ml: "0.5rem", mb: "0.5rem" }}>
                <CardActions>
                    <Button
                        color={
                            cardStats[status].buttonColor as
                                | "primary"
                                | "secondary"
                        }
                        variant="contained"
                    >
                        {cardStats[status].buttonText}
                    </Button>
                </CardActions>
            </Grid>
        </Card>
    );
};

export default OrderCard;
