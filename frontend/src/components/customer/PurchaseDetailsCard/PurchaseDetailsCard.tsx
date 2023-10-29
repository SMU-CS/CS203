import React from "react";
import { Paper, Grid, Divider, Container } from "@mui/material";
import Heading from "../../common/headings/Heading";
import mockPurchaseRequestItemData from "./MockPurchaseRequestItemData";
import { formatDatetoDateTimeWithDay } from "../../../functions/formatter";
import {
    calculateTotalPrice,
    calculateServiceFee,
    calculateNettTotal,
} from "../../../functions/calculation";

const PurchaseDetailsCard: React.FC = () => {
    const purchaseRequestItems =
        mockPurchaseRequestItemData[0].purchase_request_item;

    const total = calculateTotalPrice(purchaseRequestItems);
    const serviceFee = calculateServiceFee(total);
    const facilityCharge = mockPurchaseRequestItemData[0].facility_charge;
    const nettTotal = calculateNettTotal(total, serviceFee, facilityCharge);

    return (
        <Container maxWidth="md">
            <Paper elevation={2} sx={{ my: "3rem" }}>
                <Grid container direction="column">
                    <Grid item sx={{ margin: " 2rem 2rem" }}>
                        <Heading
                            variant="h2"
                            color="primary"
                            style={{ marginLeft: "1rem" }}
                        >
                            Purchase Details
                        </Heading>
                    </Grid>
                    <Grid item sx={{ mx: " 2rem" }}>
                        <h3>{mockPurchaseRequestItemData[0].event_name}</h3>
                    </Grid>
                    <Grid item sx={{ mx: " 2rem" }}>
                        {mockPurchaseRequestItemData[0].purchase_request_item.map(
                            (item, index) => (
                                <Grid
                                    container
                                    direction="column"
                                    key={index}
                                    sx={{
                                        marginBottom: "1rem",
                                    }}
                                >
                                    <Grid container direction="row">
                                        <Grid item xs={12}>
                                            <Grid
                                                container
                                                direction="row"
                                                alignItems="center"
                                            >
                                                <Grid item xs={1}>
                                                    <p>x{item.quantity}</p>
                                                </Grid>
                                                <Grid item xs={8}>
                                                    <Grid
                                                        container
                                                        direction="column"
                                                        columnGap={1}
                                                    >
                                                        <Grid item>
                                                            <p>
                                                                {formatDatetoDateTimeWithDay(
                                                                    new Date(
                                                                        item.datetime
                                                                    )
                                                                )}{" "}
                                                                @{" "}
                                                                {item.location}
                                                            </p>
                                                        </Grid>
                                                        <Grid
                                                            item
                                                            sx={{
                                                                mt: "-1.5rem",
                                                            }}
                                                        >
                                                            <p>
                                                                &lt;{item.type}
                                                                &gt;
                                                            </p>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item xs={3}>
                                                    <p>
                                                        ${item.price.toFixed(2)}
                                                    </p>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            )
                        )}
                        <Divider />
                        <Grid item>
                            <Grid container direction="row">
                                <Grid item xs={9}>
                                    <p> Total: </p>
                                </Grid>
                                <Grid item xs={3}>
                                    <p>${total.toFixed(2)}</p>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid container direction="row">
                                <Grid item xs={9}>
                                    <p> Service Fee (10%): </p>
                                </Grid>
                                <Grid item xs={3}>
                                    <p>${serviceFee.toFixed(2)}</p>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid item sx={{ mt: "-1.5rem" }}>
                                <Grid container direction="row">
                                    <Grid item xs={9}>
                                        <p> Facility Charge: </p>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <p>${facilityCharge.toFixed(2)}</p>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Divider />
                        <Grid item>
                            <Grid container direction="row">
                                <Grid item xs={9}>
                                    <h3> Nett Total </h3>
                                </Grid>
                                <Grid item xs={3}>
                                    <p>${nettTotal.toFixed(2)}</p>
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
