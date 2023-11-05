import { Grid, TableProps, Typography } from "@mui/material";
import SectionDivider from "../layout/divider/SectionDivider";
import PurchaseRequestItemConfirmation from "../../pr/text/PurchaseRequestItemConfirmation";
import {
    calcServiceFee,
    calcTicketPrice,
    calcTotalPrice,
} from "../../../functions/calculation";
import { OrderItems } from "../../../types/order";

interface OrderConfirmationTableProps extends TableProps {
    orderItems: OrderItems[];
}

const OrderConfirmationTable: React.FC<OrderConfirmationTableProps> = ({
    orderItems,
}) => {
    return (
        <>
            <Grid sx={{ my: "2rem" }}>
                <Typography variant="body2">
                    <Grid my="1rem">
                        {orderItems.map((orderItem) => (
                            <PurchaseRequestItemConfirmation item={orderItem} />
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
                            <Grid item>
                                {"$" + calcTicketPrice(orderItems).toFixed(2)}
                            </Grid>
                        </Grid>

                        <Grid container justifyContent="space-between">
                            <Grid item>Service Charge:</Grid>
                            <Grid item>
                                {"$" + calcServiceFee(orderItems).toFixed(2)}
                            </Grid>
                        </Grid>

                        <Grid container justifyContent="space-between">
                            <Grid item>Facility Charge:</Grid>
                            <Grid item>{"$10.00"}</Grid>
                        </Grid>
                    </Grid>

                    <SectionDivider />
                </Typography>
                <Typography variant="body1" fontWeight="bold">
                    <Grid container justifyContent="space-between" my="1rem">
                        <Grid item>Total Paid:</Grid>
                        <Grid item>
                            {"$" + calcTotalPrice(orderItems, 10).toFixed(2)}
                        </Grid>
                    </Grid>
                </Typography>
            </Grid>
        </>
    );
};

export default OrderConfirmationTable;
