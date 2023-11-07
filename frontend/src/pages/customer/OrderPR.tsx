import { useQuery } from "@tanstack/react-query";
import { Grid } from "@mui/material";
import OrderCard from "../../components/event/card/OrderCard";
import { useKeycloak } from "@react-keycloak/web";
import { getAllPRs } from "../../axios/event/purchase_request";
import { useTitle } from "../../custom-hooks/useTitle";
import { useEffect } from "react";

const OrderPR = () => {
    const { keycloak } = useKeycloak();
    const [setTitle] = useTitle("Server Error");
    const { data: prs } = useQuery({
        queryKey: ["prListing", keycloak.token],
        queryFn: () => getAllPRs(keycloak.token),
    });

    useEffect(() => {
        if (!!prs) {
            setTitle("Purchase Requests");
        }
    }, [setTitle, prs]);

    return (
        <>
            <Grid container spacing={2} justifyContent={"center"}>
                {prs &&
                    prs.map((details) => (
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
        </>
    );
};

export default OrderPR;
