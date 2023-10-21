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
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { EventListingType } from "../../../types/event";
import OrderChip from "../chip/OrderChip";

interface OrderCardProps extends CardProps {
    event: EventListingType;
    ChipPurchaseStatus: "Pending" | "Processing" | "Recurring" | "Past";
    ButtonPurchaseStatus: string;
}

const CardMediaStyles = {
    width: "100%",
    height: { xs: "6rem", sm: "8rem", md: "10rem" },
};

const OrderCard: React.FC<OrderCardProps> = ({
    event,
    ChipPurchaseStatus,
    ButtonPurchaseStatus,
    ...props
}) => {
    const { name, bannerURL, id } = event;
    const navigate = useNavigate();

    const ButtonColor =
        ChipPurchaseStatus === "Pending" || "Recurring"
            ? "primary"
            : "secondary";

    return (
        <Card {...props}>
            <CardActionArea onClick={() => navigate(`/event/${id}`)}>
                <CardMedia sx={CardMediaStyles} image={bannerURL} />
                <CardContent>
                    <Grid
                        container
                        sx={{
                            height: { xs: "120px", sm: "150px", md: "180px" },
                        }}
                        direction="column"
                    >
                        <Grid item>
                            <OrderChip
                                ChipPurchaseStatus={ChipPurchaseStatus}
                            />
                        </Grid>

                        <Typography
                            variant="body1"
                            fontWeight="bold"
                            my={"0.5rem"}
                        >
                            {name}
                        </Typography>
                    </Grid>
                </CardContent>
            </CardActionArea>
            <Grid sx={{ ml: "0.5rem", mb: "0.5rem" }}>
                <CardActions>
                    <Button color={ButtonColor} variant="contained">
                        {ButtonPurchaseStatus}
                    </Button>
                </CardActions>
            </Grid>
        </Card>
    );
};

export default OrderCard;
