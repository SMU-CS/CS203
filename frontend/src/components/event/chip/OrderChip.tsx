import { Chip, ChipProps, useTheme } from "@mui/material";

interface OrderChipProps extends ChipProps {
    ChipPurchaseStatus: "Pending" | "Processing" | "Recurring" | "Past";
}

const ChipStyles = {
    fontFamily: "CircularSpotify",
    fontSize: { sm: "0.5rem", md: "0.7rem", lg: "0.9rem" },
    fontWeight: "bold",
};

const OrderChip : React.FC<OrderChipProps> = ({ChipPurchaseStatus}) => {

    const theme = useTheme();

    const ChipColour =
    ChipPurchaseStatus === "Pending"
        ? theme.palette.primary.dark + ""
        : ChipPurchaseStatus === "Processing"
        ? theme.palette.secondary.dark
        : ChipPurchaseStatus === "Recurring"
        ? theme.palette.primary.main
        : "default";

    const ChipLabel =
    ChipPurchaseStatus === "Pending"
        ? "Pending Payment"
        : ChipPurchaseStatus === "Processing"
        ? "Processing Request"
        : ChipPurchaseStatus === "Recurring"
        ? "Recurring Event"
        : "Past Event";

    return (
        <Chip
            label={ChipLabel}
            color={"default"}
            style={{
                backgroundColor: ChipColour,
                color: "#fff",
            }}
            sx={ChipStyles}
        />
    );
};

export default OrderChip;
