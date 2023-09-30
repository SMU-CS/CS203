import React, { useState } from "react";
import { Paper, Grid, Button, TextField, Divider } from "@mui/material";
import Heading from "../../common/headings/Heading";
import { useForm, Controller } from "react-hook-form";
import mockProfileData from "./MockProfileData";
import { useNavigate } from "react-router-dom";

interface FormValues {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
}


const ChangePasswordCard: React.FC = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
        getValues,
        reset,
    } = useForm<FormValues>();

    const [currentPasswordError, setCurrentPasswordError] = useState<
        string | null
    >(null);

    const navigate = useNavigate();


    const onSubmit = (data: FormValues) => {
        //unsure how to find the user id (make it dynamic, using 1 as just an example)
        const userProfile = mockProfileData.find((profile) => {
            return profile.id === 1;
        });

        if (!userProfile) {
            return;
        }

        const currentPasswordFromData = userProfile.password;

        if (data.currentPassword !== currentPasswordFromData) {
            setCurrentPasswordError("Current Password is incorrect");
            return;
        } else if (data.newPassword.length < 8) {
            return;
        }
        console.log(data);
        if (!errors.currentPassword && !errors.newPassword && !errors.confirmPassword) {
            // Clear form fields
            reset({
                currentPassword: "",
                newPassword: "",
                confirmPassword: "",
            });
    
            // Refresh the page
            navigate(window.location.pathname, { replace: true });
        }
    };

    const handleCancel = () => {
        reset({
            currentPassword: "",
            newPassword: "",
            confirmPassword: "",
        });
        setCurrentPasswordError(null);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Paper elevation={2} sx={{ mt: "3rem", mb: "3rem" }}>
                <Grid container direction="column" gap="2rem">
                    <Grid item sx={{ ml: "2rem", mr: "2rem", mt: "2rem" }}>
                        <Heading
                            variant="h2"
                            color="secondary"
                            style={{ marginLeft: "1rem" }}
                        >
                            Change Password
                        </Heading>
                    </Grid>
                    <Grid item sx={{ ml: "2rem", mr: "2rem" }}>
                        <Controller
                            name="currentPassword"
                            control={control}
                            defaultValue=""
                            rules={{
                                required: "Current Password is required",
                            }}
                            render={({ field }) => (
                                <TextField
                                    label="Current Password"
                                    type="password"
                                    variant="outlined"
                                    size="medium"
                                    InputLabelProps={{
                                        sx: {
                                            fontFamily: "Lato",
                                            fontSize: "1rem",
                                            fontWeight: "400",
                                        },
                                    }}
                                    {...field}
                                    onChange={(e) => {
                                        setCurrentPasswordError(null);
                                        field.onChange(e.target.value);
                                    }}
                                />
                            )}
                        />
                        {errors.currentPassword && (
                            <div
                                className="error"
                                style={{
                                    color: "red",

                                    fontSize: "1rem",
                                }}
                            >
                                {errors.currentPassword.message}
                            </div>
                        )}
                        {currentPasswordError && (
                            <div
                                className="error"
                                style={{
                                    color: "red",

                                    fontSize: "1rem",
                                }}
                            >
                                {currentPasswordError}
                            </div>
                        )}
                    </Grid>
                    <Grid item>
                        <Grid
                            container
                            direction="row"
                            gap={3}
                            sx={{
                                ml: "2rem",
                                mr: "2rem",
                            }}
                        >
                            <Grid item>
                                <Controller
                                    name="newPassword"
                                    control={control}
                                    defaultValue=""
                                    rules={{
                                        required: "New Password is required",
                                        minLength: {
                                            value: 8,
                                            message:
                                                "Password must have at least 8 characters",
                                        },
                                    }}
                                    render={({ field }) => (
                                        <TextField
                                            label="New Password"
                                            type="password"
                                            size="medium"
                                            InputLabelProps={{
                                                sx: {
                                                    fontFamily: "Lato",
                                                    fontSize: "1rem",
                                                    fontWeight: "400",
                                                },
                                            }}
                                            {...field}
                                        />
                                    )}
                                />
                                {errors.newPassword && (
                                    <div
                                        className="error"
                                        style={{
                                            color: "red",

                                            fontSize: "1rem",
                                        }}
                                    >
                                        {errors.newPassword.message}
                                    </div>
                                )}
                            </Grid>
                            <Grid item>
                                <Controller
                                    name="confirmPassword"
                                    control={control}
                                    defaultValue=""
                                    rules={{
                                        required:
                                            "Confirm Password is required",
                                        validate: (value) =>
                                            value ===
                                                getValues("newPassword") ||
                                            "Confirm password does not match new password",
                                    }}
                                    render={({ field }) => (
                                        <TextField
                                            label="Confirm Password"
                                            type="password"
                                            variant="outlined"
                                            size="medium"
                                            InputLabelProps={{
                                                sx: {
                                                    fontFamily: "Lato",
                                                    fontSize: "1rem",
                                                    fontWeight: "400",
                                                },
                                            }}
                                            {...field}
                                        />
                                    )}
                                />
                                {errors.confirmPassword && (
                                    <div
                                        className="error"
                                        style={{
                                            color: "red",
                                            fontSize: "1rem",
                                        }}
                                    >
                                        {errors.confirmPassword.message}
                                    </div>
                                )}
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item sx={{ mt: "1rem", ml: "2rem", mr: "2rem" }}>
                        <Divider />
                    </Grid>
                    <Grid item sx={{ ml: "2rem", mr: "2rem", mb: "2rem" }}>
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
                                    onClick={handleCancel}
                                    sx={{
                                        backgroundColor: "#000000",
                                        opacity: "38%",
                                    }}
                                >
                                    Cancel
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button type="submit" variant="contained">
                                    Change Password
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </form>
    );
};

export default ChangePasswordCard;
