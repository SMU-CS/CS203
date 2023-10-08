import { Grid, TableProps, Typography } from "@mui/material";
import PurchaseRequestItem from "../../pr/text/PurchaseRequestItem";
import SectionDivider from "../layout/divider/SectionDivider";

interface PurchaseRequestItem {
    ticket_type_id: string;
    activity_id: string;
    type: string;
    price: number;
    quantity: number;
    datetime: string;
    location: string;
}

interface OrderConfirmationTableProps extends TableProps {
    Transactions: PurchaseRequestItem[];
    ServiceFee: number;
    FacilityCharge: number;
}

const OrderConfirmationTable: React.FC<OrderConfirmationTableProps> = ({
    Transactions,
    ServiceFee,
    FacilityCharge,
}) => {
    const totalPrice = Transactions.reduce(
        (accumulator, purchase) => accumulator + purchase.price,
        0
    );

    const sc = (totalPrice / 100) * ServiceFee;

    return (
        <>
            <Grid sx={{ my: "2rem" }}>
                <Typography variant="body2">
                    <Grid my="1rem">
                        {Transactions.map((purchase) => (
                            <PurchaseRequestItem
                                item={purchase}
                            ></PurchaseRequestItem>
                        ))}
                    </Grid>

                    <SectionDivider />

                    <Grid my="1rem">
                        <Grid
                            container
                            justifyContent="space-between"
                            sx={{ my: "1.5rem" }}
                        >
                            <Grid item>Total:</Grid>
                            <Grid item>{"$" + totalPrice.toFixed(2)}</Grid>
                        </Grid>

                        <Grid container justifyContent="space-between">
                            <Grid item>Service Charge:</Grid>
                            <Grid item>{"$" + sc.toFixed(2)}</Grid>
                        </Grid>

                        <Grid container justifyContent="space-between">
                            <Grid item>Facility Charge:</Grid>
                            <Grid item>{"$" + FacilityCharge.toFixed(2)}</Grid>
                        </Grid>
                    </Grid>

                    <SectionDivider />
                </Typography>
                <Typography variant="body1" fontWeight="bold">
                    <Grid container justifyContent="space-between" my="1rem">
                        <Grid item>Total Paid:</Grid>
                        <Grid item>
                            {"$" +
                                (totalPrice + sc + FacilityCharge).toFixed(2)}
                        </Grid>
                    </Grid>
                </Typography>
            </Grid>
        </>
    );
};

export default OrderConfirmationTable;
