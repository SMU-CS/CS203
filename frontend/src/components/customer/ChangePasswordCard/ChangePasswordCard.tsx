import React from "react";
import { Paper, Grid, Button, Divider } from "@mui/material";
import Heading from "../../common/headings/Heading";
import { useForm, FormProvider, FieldErrors } from "react-hook-form";
import mockProfileData from "./MockProfileData";
import { Profile } from "../../../types/profile";
import TextField from "../../common/form/TextField";

interface PasswordProfile extends Profile {
    current_password: string;
    new_password: string;
    confirm_password: string;
}

function getPasswordById(userId: number) {
    const user = mockProfileData.find((profile) => profile.id === userId);
    console.log(user);
    if (user) {
        return user.password;
    }
    return null;
}

const ChangePasswordCard: React.FC = () => {
    const formState = useForm<PasswordProfile>({
        defaultValues: {
            current_password: "",
            new_password: "",
            confirm_password: "",
        },
    });
    const { handleSubmit, setError, watch, reset: resetForm } = formState;

    const onSubmit = (data: PasswordProfile) => {
        const userId = 1;
        console.log("data", data);
        const password = getPasswordById(userId);
        console.log(password);

        if (password === null) {
            setError("current_password", {
                type: "validate",
                message: "User not found",
            });
        } else if (data.current_password !== password) {
            setError("current_password", {
                type: "validate",
                message: "Incorrect current password",
            });
        }
    };

    const onError = (errors: FieldErrors<PasswordProfile>) => {
        console.log(errors);
    };

    const handleClear = () => {
        resetForm();
    };

    return (
        <FormProvider {...formState}>
            <Paper elevation={2} sx={{ my: "3rem" }}>
                <Grid container direction="column" gap="2rem">
                    <Grid item sx={{ margin: "2rem 2rem 2rem" }}>
                        <Heading
                            variant="h2"
                            color="secondary"
                            style={{ marginLeft: "1rem" }}
                        >
                            Change Password
                        </Heading>
                    </Grid>
                    <Grid item sx={{ mx: "2rem" }}>
                        <TextField
                            name="current_password"
                            label="Current Password"
                            type="password"
                            variant="outlined"
                            rules={{
                                required: `Current Password is required`,
                            }}
                        />
                    </Grid>
                    <Grid item>
                        <Grid
                            container
                            direction="row"
                            gap={3}
                            sx={{
                                mx: "2rem",
                            }}
                        >
                            <Grid item>
                                <TextField
                                    name="new_password"
                                    label="New Password"
                                    type="password"
                                    variant="outlined"
                                    rules={{
                                        required: `New Password is required`,
                                    }}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    name="confirm_password"
                                    label="Confirm Password"
                                    type="password"
                                    variant="outlined"
                                    rules={{
                                        required: `Confirm Password is required`,
                                        validate: (val: string) => {
                                            if (watch("new_password") != val) {
                                                return "Passwords do not match";
                                            }
                                        },
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item sx={{ margin: "2rem 2rem 2rem" }}>
                        <Divider />
                    </Grid>
                    <Grid item sx={{ margin: "0rem 2rem 2rem 2rem" }}>
                        <Grid
                            container
                            direction="row"
                            justifyContent="flex-end"
                            spacing={3}
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
                                    Cancel
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    onClick={handleSubmit(onSubmit, onError)}
                                >
                                    Change Password
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </FormProvider>
    );
};

export default ChangePasswordCard;
