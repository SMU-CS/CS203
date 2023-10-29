import React from "react";
import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableProps,
    useTheme,
    Paper,
    Typography,
    Container,
    Grid,
} from "@mui/material";
import MakePRTableHeaderCell from "./sub-components/MakePRTableHeaderCell";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import MakePRTableRows from "./sub-components/MakePRTableRows";
import { Activity } from "../../../../types/activity";
import Button from "../../../common/buttons/Button";
import AddIcon from "@mui/icons-material/Add";
// import { useKeycloak } from "@react-keycloak/web";

interface MakePRTableProps extends TableProps {
    activities: Activity[];
}

const MakePRTable: React.FC<MakePRTableProps> = ({ activities, ...props }) => {
    const theme = useTheme();
    const form = useForm({
        defaultValues: {
            purchase_requests: [
                { datetime_location: "", ticket_type: "", quantity: 0 },
            ],
        },
    });
    const { control } = form;
    // For the dynamic purchase_requests field
    const {
        fields: purchase_requests,
        append,
        remove,
    } = useFieldArray({
        control: control,
        name: "purchase_requests",
    });

    // const {keycloak, initialized} = useKeycloak()

    return (
        <FormProvider {...form}>
            <TableContainer elevation={2} component={Paper}>
                <Table sx={{ minWidth: "700px" }} {...props}>
                    <TableHead sx={{ bgcolor: theme.palette.primary.light }}>
                        <TableRow>
                            <MakePRTableHeaderCell />
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {purchase_requests.map(({ id }, index) => (
                            <MakePRTableRows
                                activities={activities}
                                index={index}
                                remove={remove}
                                key={id}
                            />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Container sx={{ my: "1.5rem" }}>
                <Typography variant="subtitle1">
                    *You can only make a purchase request of maximum 4 tickets
                    in total for each event, you are left with 4 tickets for
                    this purchase request
                </Typography>
            </Container>
            <Grid
                container
                mb="2rem"
                flexDirection="row"
                justifyContent="space-between"
            >
                <Grid item>
                    <Button
                        variant="contained"
                        color="secondary"
                        endIcon={<AddIcon />}
                        onClick={() =>
                            append({
                                datetime_location: "",
                                ticket_type: "",
                                quantity: 0,
                            })
                        }
                    >
                        Add New Row
                    </Button>
                </Grid>
                <Grid item>
                    <Button onClick={() => {
                        // initialized && keycloak.authenticated ? 
                        // // submit form here
                        // : keycloak.login()
                    }} variant="contained" color="primary">
                        Confirm Purchase Request
                    </Button>
                </Grid>
            </Grid>
        </FormProvider>
    );
};

export default MakePRTable;
