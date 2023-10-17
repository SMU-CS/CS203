import OrderHistory from "./OrderHistory";
import React from "react";
import { Grid, Tab } from "@mui/material";
import TabPanel from "@mui/lab/TabPanel";
import { TabContext, TabList } from "@mui/lab";
import OrderPR from "./OrderPR";

const OrderDetails = () => {
    const [value, setValue] = React.useState("1");

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Grid sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
                <Grid sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <TabList
                        onChange={handleChange}
                        aria-label="lab API tabs example"
                    >
                        <Tab label="Purchase Request" value="1" />
                        <Tab label="Order History" value="2" />
                    </TabList>
                </Grid>
                <TabPanel value="1"><OrderPR/></TabPanel>
                <TabPanel value="2"><OrderHistory/></TabPanel>
            </TabContext>
        </Grid>
    );
};

export default OrderDetails;
