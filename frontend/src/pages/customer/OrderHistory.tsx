import { useQuery } from "@tanstack/react-query";
import { Grid } from "@mui/material";
import OrderCard from "../../components/event/card/OrderCard";
import { getAllOrders } from "../../axios/order/order";
import { useKeycloak } from "@react-keycloak/web";

const OrderHistory = () => {
    const { keycloak } = useKeycloak();

    const { data: orders } = useQuery({
        queryKey: ["orders"],
        queryFn: () => getAllOrders(keycloak.token),
    });

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
