import React from "react";
import { Paper, Grid, Divider, Container, Typography } from "@mui/material";
import {
    calculateTotalPrice,
    calculateServiceFee,
    calculateNettTotal,
} from "../../../functions/calculation";
import { PurchaseRequestItemWithDetails } from "../../../types/pr";
import PurchaseDetailsRow from "./sub-components/PurchaseDetailsRow";
import Heading from "../../common/headings/Heading";

interface PurchaseDetailsCardProps {
    prItems: PurchaseRequestItemWithDetails[];
    eventName: string;
}

const PurchaseDetailsCard: React.FC<PurchaseDetailsCardProps> = ({
    prItems,
    eventName,
}) => {
    const total = calculateTotalPrice(prItems);
    const serviceFee = calculateServiceFee(total);
    const facilityCharge = 10;
    const nettTotal = calculateNettTotal(total, serviceFee, facilityCharge);

    return (
        <Container maxWidth="md">
            <Paper elevation={2} sx={{ my: "3rem" }}>
                <Grid container rowGap="2rem" direction="column" p="2rem">
                    <Heading variant="h2" color="primary">
                        Purchase Details
                    </Heading>
                    <Typography fontWeight="bold">{eventName}</Typography>
                    <Grid container rowGap={1} direction="column">
                        {prItems.map((item) => (
                            <PurchaseDetailsRow key={item.id} prItem={item} />
                        ))}
                        <Divider />
                        {[
                            { left: "Total: ", right: `$${total.toFixed(2)}` },
                            {
                                left: "Service Fee (10%): ",
                                right: `$${serviceFee.toFixed(2)}`,
                            },
                            {
                                left: "Facility Charge: ",
                                right: `$${facilityCharge.toFixed(2)}`,
                            },
                        ].map(({ left, right }, index) => (
                            <Grid item mb={index === 0 ? "1rem" : 0}>
                                <Grid container direction="row">
                                    <Grid item xs={9}>
                                        <Typography variant="body2">
                                            {left}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Typography variant="body2">
                                            {right}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        ))}
                        <Divider />
                        <Grid item>
                            <Grid container direction="row">
                                <Grid item xs={9}>
                                    <Typography fontWeight="bold">
                                        {" "}
                                        Nett Total{" "}
                                    </Typography>
                                </Grid>
                                <Grid item xs={3}>
                                    <Typography fontWeight="bold">
                                        ${nettTotal.toFixed(2)}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
};

export default PurchaseDetailsCard;
