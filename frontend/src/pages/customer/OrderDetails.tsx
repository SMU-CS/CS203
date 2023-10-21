import { Grid, Tab, Tabs } from "@mui/material";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const paths = [
    {
        label: "Purchase Request",
        path: "/orders/purchase-request",
    },
    {
        label: "Order History",
        path: "/orders/history",
    },
];

const OrderDetails = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <Grid sx={{ width: "100%", typography: "body1" }}>
            <Grid sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs value={location.pathname}>
                    {paths.map(({ path, label }) => (
                        <Tab
                            key={path}
                            label={label}
                            value={path}
                            onClick={() => navigate(path)}
                        />
                    ))}
                </Tabs>
            </Grid>
            <Outlet />
        </Grid>
    );
};

export default OrderDetails;
