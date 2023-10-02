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
    useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { EventListingType } from "../../../types/event";

interface OrderCardProps extends CardProps {
    event: EventListingType;
    ChipPurchaseStatus: string;
    ButtonPurchaseStatus: string;
}

const CardStyles = {
    width: { xs: "14rem", sm: "16rem", md: "18rem" },
    height: { xs: "18rem", sm: "20rem", md: "22rem" },
};

const CardMediaStyles = {
    width: "100%",
    height: { xs: "4rem", sm: "6rem", md: "8rem" },
};

const CardContentStyles = {
    justifyContent: "space-between",
    direction: "column",
    height: { xs: "14rem", sm: "16rem", md: "18rem" }
};

const ChipStyles = {
    fontFamily: "CircularSpotify",
    fontSize: {sm:"0.5rem", md: "0.7rem", lg: "0.9rem"},
    fontWeight: "bold"
};

const OrderCard: React.FC<OrderCardProps> = ({ event, ChipPurchaseStatus, ButtonPurchaseStatus, ...props }) => {
    const { name, bannerURL, id } = event;
    const navigate = useNavigate();
    const theme = useTheme();

    const ChipColor = ChipPurchaseStatus === "Pending Payment" ? theme.palette.primary.dark : theme.palette.secondary.dark
    const ButtonColor = ButtonPurchaseStatus === "Fulfil Purchase Request" ? "primary" : "secondary"

    return (
        <Card {...props} sx={CardStyles}>
            <Grid height={{ xs: "14rem", sm: "16rem", md: "18rem" }}>
                <CardActionArea onClick={() => navigate(`/event/${id}`)}>
                    <CardMedia sx={CardMediaStyles} image={bannerURL} />
                    <CardContent sx={CardContentStyles}>
                        <Chip label={ChipPurchaseStatus} color={"default"} style={{backgroundColor: ChipColor, color: "#fff"}} sx={ChipStyles} />
                        <Grid sx={{ mt: "0.5rem" }}>
                            <Typography variant="body1" fontWeight="bold">
                                {name}
                            </Typography>
                        </Grid>
                    </CardContent>
                </CardActionArea>
            </Grid>
            <CardActions sx={{ ml: "0.5rem" }}>
                <Button color={ButtonColor} variant="contained">
                    {ButtonPurchaseStatus}
                </Button>
            </CardActions>
        </Card>
    );
};

export default OrderCard;
