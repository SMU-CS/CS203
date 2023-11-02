import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import Heading from "../../components/common/headings/Heading";
import { Button, Grid } from "@mui/material";
import FulfilPurchaseRequestTable from "../../components/event/table/FulfilPurchaseRequestTable";
import EventBreadCrumb from "../../components/event/navigations/EventBreadcrumb";
import EventBanner from "../../components/event/banner/EventBanner";
import { useKeycloak } from "@react-keycloak/web";
import { getPRconfirmation } from "../../axios/event/purchase_request";
import { formatDateToDateWithDay } from "../../functions/formatter";
import { EventDetailsType } from "../../types/event";

const FulfilPurchaseRequestPage = () => {
    const { id } = useParams();
    const { keycloak } = useKeycloak();

    const { data: pr } = useQuery({
        queryKey: ["prConfirmation", id],
        queryFn: () => getPRconfirmation(id, keycloak.token),
    });

    const navigate = useNavigate();

    return (
        <>
            {pr && (
                <>
                    <EventBreadCrumb page="pr-request" event={
                        {
                            id: pr.id,
                            name: pr.name,
                            start_datetime: formatDateToDateWithDay(
                                new Date(pr.startDateTime)
                            ),
                            end_datetime: formatDateToDateWithDay(
                                new Date(pr.endDateTime)
                            ),
                            description: pr.description,
                            bannerURL: pr.bannerURL,
                            location: pr.location,
                        } as EventDetailsType
                    } />
                    <Grid
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignContent: "center",
                            py: "1vh",
                            paddingInline: {
                                xs: "120px",
                                sm: "150px",
                                md: "220px",
                            },
                        }}
                    >
                        <EventBanner event={
                        {
                            id: pr.id,
                            name: pr.name,
                            start_datetime: formatDateToDateWithDay(
                                new Date(pr.startDateTime)
                            ),
                            end_datetime: formatDateToDateWithDay(
                                new Date(pr.endDateTime)
                            ),
                            description: pr.description,
                            bannerURL: pr.bannerURL,
                            location: pr.location,
                        } as EventDetailsType
                    } />
                        <Heading color="primary" variant="h2">
                            Fulfil Purchase Request
                        </Heading>
                        <Grid sx={{ py: "2rem" }}>
                            <FulfilPurchaseRequestTable
                                prItems={pr.purchaseRequest.purchaseRequestItems}
                            ></FulfilPurchaseRequestTable>
                        </Grid>
                        <Grid sx={{ display: "flex", justifyContent: "right" }}>
                            <Button
                                color="primary"
                                variant="contained"
                                onClick={() => navigate(`/checkout/${id}`)} //update the url path to checkout page
                            >
                                Make Payment
                            </Button>
                        </Grid>
                    </Grid>
                </>
            )}
        </>
    );
};

export default FulfilPurchaseRequestPage;
