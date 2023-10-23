import React from "react";
import Heading from "../../common/headings/Heading";
import { useForm, FormProvider, FieldErrors } from "react-hook-form";
import { Profile } from "../../../types/profile";

import { Paper, Grid, Button, Divider, Container } from "@mui/material";
import TextField from "../../common/form/TextField";
import DateOfBirthTextField from "../../common/form/DateOfBirthTextField";

const textNames = [
    { name: "first_name", label: "First Name", type: "text", key: "1" },
    { name: "last_name", label: "Last Name", type: "text", key: "2" },
    { name: "email", label: "Email", type: "text", key: "3" },
    { name: "contact", label: "Contact", type: "text", key: "4" },
    {
        name: "date_of_birth",
        label: "Date of Birth",
        type: "dateText",
        key: "5",
    },
    { name: "country", label: "Country", type: "text", key: "6" },
    { name: "postal_code", label: "Postal Code", type: "text", key: "7" },
];

const ProfileDetailsCard: React.FC = () => {
    const formState = useForm<Profile>({
        defaultValues: {
            first_name: "",
            last_name: "",
            email: "",
            contact: "",
            date_of_birth: "",
            country: "",
            postal_code: "",
        },
    });
    const { handleSubmit, reset: resetForm } = formState;

    const onSubmit = (data: Profile) => {
        console.log("data", data);
    };

    const onError = (errors: FieldErrors<Profile>) => {
        console.log(errors);
    };

    const handleClear = () => {
        resetForm();
    };

    return (
        <FormProvider {...formState}>
            <Container maxWidth="md">
                <Paper elevation={2} sx={{ my: "3rem" }}>
                    <Grid container direction="column">
                        <Grid item sx={{ margin: "2rem 2rem 2rem" }}>
                            <Heading
                                variant="h2"
                                color="secondary"
                                style={{ marginLeft: "1rem" }}
                            >
                                Profile Details
                            </Heading>
                        </Grid>
                        <Grid item sx={{ mx: "3rem" }}>
                            <Grid
                                container
                                direction="row"
                                alignItems="flex-start"
                                gap={3}
                            >
                                {textNames.map((textName) => (
                                    <Grid
                                        item
                                        key={textName.key}
                                        xs={12}
                                        sm={6}
                                        md={4}
                                    >
                                        {textName.type == "text" ? (
                                            <TextField
                                                name={textName.name}
                                                label={textName.label}
                                                variant="outlined"
                                                rules={{
                                                    required: `${textName.label} is required`,
                                                }}
                                            />
                                        ) : (
                                            <DateOfBirthTextField
                                                name={textName.name}
                                                label={textName.label}
                                                required={true}
                                                rules={{
                                                    required: `${textName.label} is required`,
                                                }}
                                            />
                                        )}
                                    </Grid>
                                ))}
                            </Grid>

                            <Grid item sx={{ mt: "1.5em" }}>
                                <Divider />
                            </Grid>
                            <Grid item>
                                <Grid
                                    container
                                    direction="row"
                                    justifyContent="flex-end"
                                    spacing={3}
                                    sx={{ my: "1.5rem" }}
                                >
                                    <Grid item>
                                        <Button
                                            type="button"
                                            variant="contained"
                                            sx={{
                                                backgroundColor: "#000000",
                                                opacity: "38%",
                                            }}
                                            onClick={handleClear}
                                        >
                                            cancel
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            onClick={handleSubmit(
                                                onSubmit,
                                                onError
                                            )}
                                        >
                                            Edit Profile
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </FormProvider>
    );
};

export default ProfileDetailsCard;
