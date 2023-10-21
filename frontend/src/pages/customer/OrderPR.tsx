import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import { listEvents } from "../../axios/event/event";
import { Grid } from "@mui/material";
import OrderCard from "../../components/event/card/OrderCard";

const OrderPR = () => {
    const formState = useForm();
    const { watch } = formState;
    const [searchVal, categoryVal] = watch(["search", "category"]);

    const { data: events } = useQuery({
        queryKey: ["events", searchVal, categoryVal],
        queryFn: () => listEvents(false),
    });

    return (
        <>
            <Grid container spacing={2} justifyContent={"center"}>
                {events &&
                    events.map((details) => (
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
                            <OrderCard
                                event={details}
                                ChipPurchaseStatus={"Pending"}
                                ButtonPurchaseStatus="Fulfil Purchase Request"
                            />
                        </Grid>
                    ))}
            </Grid>
        </>
    );
};

export default OrderPR;