import React, { useEffect } from "react";
import Heading from "../../common/headings/Heading";
import { useForm, FormProvider } from "react-hook-form";
import { Profile, ProfileForm } from "../../../types/profile";

import { Paper, Grid, Button, Divider, Container } from "@mui/material";
import TextField from "../../common/form/TextField";
import DateOfBirthTextField from "../../common/form/DateOfBirthTextField";
import { useKeycloak } from "@react-keycloak/web";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import dayjs from "dayjs";
import { updateUserProfile } from "../../../axios/profile/user";

const textNames = [
    { name: "first_name", label: "First Name", type: "text" },
    { name: "last_name", label: "Last Name", type: "text" },
    { name: "email", label: "Email", type: "text" },
    { name: "contact", label: "Contact", type: "text" },
    {
        name: "date_of_birth",
        label: "Date of Birth",
        type: "dateText",
    },
    { name: "country", label: "Country", type: "text" },
    { name: "postal_code", label: "Postal Code", type: "text" },
];

const ProfileDetailsCard: React.FC = () => {
    const formState = useForm<ProfileForm>();
    const { handleSubmit, reset, setValue } = formState;
    const {
        keycloak: { loadUserProfile },
        initialized,
    } = useKeycloak();
    const queryClient = useQueryClient();

    const { data: profile } = useQuery({
        queryKey: ["profileAttr", loadUserProfile],
        queryFn: async () => {
            const dirtyProfile = (await loadUserProfile()) as any;
            console.log(dirtyProfile);
            return {
                id: dirtyProfile.id,
                first_name: dirtyProfile.firstName,
                last_name: dirtyProfile.lastName,
                email: dirtyProfile.email,
                contact: dirtyProfile.attributes.contact_number[0],
                country: dirtyProfile.attributes.country[0],
                date_of_birth: dirtyProfile.attributes.date_of_birth[0],
                postal_code: dirtyProfile.attributes.postal_code[0],
            } as Profile;
        },
        enabled: !!initialized,
    });

    const updateProfile = useMutation({
        mutationFn: updateUserProfile,
        onSuccess: () =>
            queryClient.invalidateQueries({ queryKey: ["profileAttr"] }),
    });

    useEffect(() => {
        if (!!profile) {
            const {
                id,
                first_name,
                last_name,
                email,
                contact,
                date_of_birth,
                country,
                postal_code,
            } = profile;

            setValue("id", id);
            setValue("first_name", first_name);
            setValue("last_name", last_name);
            setValue("email", email);
            setValue("contact", contact);
            setValue("date_of_birth", dayjs(date_of_birth));
            setValue("country", country);
            setValue("postal_code", postal_code);
        }
    }, [profile]);

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
                                {textNames.map(({ name, label, type }) => (
                                    <Grid item key={name} xs={12} sm={6} md={4}>
                                        {type == "text" ? (
                                            <TextField
                                                name={name}
                                                label={label}
                                                variant="outlined"
                                                rules={{
                                                    required: `${label} is required`,
                                                }}
                                            />
                                        ) : (
                                            <DateOfBirthTextField
                                                name={name}
                                                label={label}
                                                required={true}
                                                rules={{
                                                    required: `${label} is required`,
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
                                    gap={3}
                                    sx={{ my: "1.5rem" }}
                                >
                                    <Grid item>
                                        <Button
                                            type="button"
                                            variant="contained"
                                            color="inherit"
                                            onClick={() => reset()}
                                        >
                                            Cancel
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            onClick={handleSubmit(
                                                (data) => updateProfile.mutate(data),
                                                (errors) => {
                                                    console.log(errors);
                                                }
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
