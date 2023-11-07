import { useQuery } from "@tanstack/react-query";
import { Grid } from "@mui/material";
import OrderCard from "../../components/event/card/OrderCard";
import { getAllOrders } from "../../axios/order/order";
import { useKeycloak } from "@react-keycloak/web";
import { useEffect } from "react";
import { useTitle } from "../../custom-hooks/useTitle";

const OrderHistory = () => {
    const { keycloak } = useKeycloak();
    const [setTitle] = useTitle("Server Error");
    const { data: orders } = useQuery({
        queryKey: ["orders"],
        queryFn: () => getAllOrders(keycloak.token),
    });

    useEffect(() => {
        if (!!orders) {
            setTitle("Order History");
        }
    }, [setTitle, orders]);

    return (
        <Grid container spacing={2} justifyContent={"center"}>
            {orders &&
                orders.map((details) => (
                    <Grid
                        sx={{
                            margin: {
                                xs: "1rem",
                                md: "1.5rem",
                                lg: "2rem",
                            },
                        }}
                        xs={8}
                        sm={5}
                        lg={3}
                        direction={"row"}
                    >
                        <OrderCard event={details} />
                    </Grid>
                ))}
        </Grid>
    );
};

export default OrderHistory;
