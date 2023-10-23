import { Grid, TableProps, Typography } from "@mui/material";
import SectionDivider from "../layout/divider/SectionDivider";
import PurchaseRequestItemConfirmation from "../../pr/text/PurchaseRequestItemConfirmation";
import { calcServiceFee, calcTicketPrice, calcTotalPrice } from "../../../functions/calculation";

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

    return (
        <>
            <Grid sx={{ my: "2rem" }}>
                <Typography variant="body2">
                    <Grid my="1rem">
                        {Transactions.map((purchase) => (
                            <PurchaseRequestItemConfirmation item={purchase} />
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
                            <Grid item>{"$" + calcTicketPrice(Transactions).toFixed(2)}</Grid>
                        </Grid>

                        <Grid container justifyContent="space-between">
                            <Grid item>Service Charge:</Grid>
                            <Grid item>{"$" + calcServiceFee(Transactions, ServiceFee).toFixed(2)}</Grid>
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
                                (calcTotalPrice(Transactions, ServiceFee, FacilityCharge)).toFixed(2)}
                        </Grid>
                    </Grid>
                </Typography>
            </Grid>
        </>
    );
};

export default OrderConfirmationTable;
