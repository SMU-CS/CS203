import React, { useState, ChangeEvent } from "react";
import Heading from "../../common/headings/Heading";
import ProfilePic from "../../../assets/illustrations/DefaultAvatar.png";
import { useForm, Controller } from "react-hook-form";
import { profile } from "../../../types/profile";
import countriesData from "./CountryData";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateField } from "@mui/x-date-pickers/DateField";
import { DateValidationError } from "@mui/x-date-pickers/models";
import {
    Paper,
    Grid,
    Avatar,
    Button,
    TextField,
    Divider,
    Autocomplete,
} from "@mui/material";

const ProfileDetailsCard: React.FC = () => {
    const [value, setValue] = React.useState<Dayjs | null>(null);
    const [error, setError] = React.useState<DateValidationError | null>(null);

    const errorMessage = React.useMemo(() => {
        switch (error) {
            case "invalidDate": {
                return "Your date is not valid";
            }
            default: {
                return "";
            }
        }
    }, [error]);

    const form = useForm<profile>({
        defaultValues: {
            email: "",
            first_name: "",
            last_name: "",
            contact: "",
            postal_code: "",
            date_of_birth: "",
            country: "",
        },
    });
    const { control, register, handleSubmit, formState } = form;
    const { errors } = formState;

    const onSubmit = (data: profile) => {
        const formattedDateOfBirth = dayjs(data.date_of_birth).format(
            "MM/DD/YYYY"
        );
        const formData = {
            ...data,
            date_of_birth: formattedDateOfBirth,
        };
        console.log("Form Data:", formData);
    };

    const [profilePicture, setProfilePicture] = useState<string>(ProfilePic);

    const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setProfilePicture(e.target?.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const defaultProfilePicture = ProfilePic;

    const handleDeletePicture = () => {
        setProfilePicture(defaultProfilePicture);
    };

    const handleCancel = () => {
        form.reset();
        setValue(null);
        setError(null);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Paper
                elevation={2}
                sx={{
                    mt: "3rem",
                    mb: "3rem",
                }}
            >
                <Grid container direction="column">
                    <Grid item sx={{ margin: "2rem" }}>
                        <Heading
                            variant="h2"
                            color="secondary"
                            style={{ marginLeft: "1rem" }}
                        >
                            Profile Details
                        </Heading>
                    </Grid>
                    <Grid
                        item
                        sx={{
                            ml: "2rem",
                            mr: "2rem",
                        }}
                    >
                        <Grid
                            container
                            direction="row"
                            alignContent="flex-start"
                            justifyContent="center"
                            alignItems="center"
                            spacing={3}
                        >
                            <Grid item xs={4}>
                                <Grid container direction="column" gap={2}>
                                    <Grid item>
                                        <Avatar
                                            src={profilePicture}
                                            sx={{
                                                width: "11rem",
                                                height: "11rem",
                                            }}
                                        />
                                    </Grid>
                                    <Grid container direction="row" spacing={2}>
                                        <Grid item>
                                            <input
                                                type="file"
                                                accept="image/*"
                                                id="profile-picture-upload"
                                                style={{ display: "none" }}
                                                onChange={handleFileUpload}
                                            />
                                            <label htmlFor="profile-picture-upload">
                                                <Button
                                                    variant="contained"
                                                    component="span"
                                                >
                                                    Upload
                                                </Button>
                                            </label>
                                        </Grid>
                                        <Grid item>
                                            {profilePicture && (
                                                <Button
                                                    color="error"
                                                    variant="contained"
                                                    onClick={
                                                        handleDeletePicture
                                                    }
                                                >
                                                    Delete
                                                </Button>
                                            )}
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={8}>
                                <Grid
                                    container
                                    direction="row"
                                    alignItems="flex-start"
                                    gap={3}
                                >
                                    <Grid item xs={5.5}>
                                        <Grid
                                            container
                                            direction="column"
                                            gap={3}
                                            justifyContent="flex-start"
                                            alignItems="flex-start"
                                            alignContent="flex-start"
                                        >
                                            <Grid item>
                                                <TextField
                                                    id="outlined-basic"
                                                    label="First Name"
                                                    type="First Name"
                                                    variant="outlined"
                                                    size="medium"
                                                    InputLabelProps={{
                                                        sx: {
                                                            fontFamily: "Lato",
                                                            fontSize: "1rem",
                                                            fontWeight: "400",
                                                        },
                                                    }}
                                                    {...register("first_name", {
                                                        required:
                                                            "First Name is required",
                                                    })}
                                                    error={!!errors.first_name}
                                                    helperText={
                                                        errors.first_name
                                                            ?.message
                                                    }
                                                    FormHelperTextProps={{
                                                        sx: {
                                                            fontSize: "1rem",
                                                        },
                                                    }}
                                                />
                                            </Grid>
                                            <Grid item>
                                                <TextField
                                                    id="outlined-basic"
                                                    label="Email"
                                                    variant="outlined"
                                                    InputLabelProps={{
                                                        sx: {
                                                            fontFamily: "Lato",
                                                            fontSize: "1rem",
                                                            fontWeight: "400",
                                                        },
                                                    }}
                                                    {...register("email", {
                                                        required:
                                                            "Email is required",
                                                    })}
                                                    error={!!errors.email}
                                                    helperText={
                                                        errors.email?.message
                                                    }
                                                    FormHelperTextProps={{
                                                        sx: {
                                                            fontSize: "1rem",
                                                        },
                                                    }}
                                                />
                                            </Grid>
                                            <Grid item>
                                                <Controller
                                                    control={control}
                                                    name="date_of_birth"
                                                    render={({ field }) => (
                                                        <LocalizationProvider
                                                            dateAdapter={
                                                                AdapterDayjs
                                                            }
                                                        >
                                                            <DateField
                                                                label="Date Of Birth"
                                                                InputLabelProps={{
                                                                    sx: {
                                                                        fontFamily:
                                                                            "Lato",
                                                                        fontSize:
                                                                            "1rem",
                                                                        fontWeight:
                                                                            "400",
                                                                    },
                                                                }}
                                                                value={value}
                                                                onChange={(
                                                                    date
                                                                ) => {
                                                                    setValue(
                                                                        date
                                                                    );
                                                                    field.onChange(
                                                                        date
                                                                    );
                                                                }}
                                                                onError={(
                                                                    newError
                                                                ) =>
                                                                    setError(
                                                                        newError
                                                                    )
                                                                }
                                                                slotProps={{
                                                                    textField: {
                                                                        helperText:
                                                                            errorMessage,
                                                                    },
                                                                }}
                                                                FormHelperTextProps={{
                                                                    sx: {
                                                                        fontSize:
                                                                            "1rem",
                                                                    },
                                                                }}
                                                            />
                                                        </LocalizationProvider>
                                                    )}
                                                />
                                            </Grid>
                                            <Grid item>
                                                <TextField
                                                    id="outlined-basic"
                                                    label="Postal Code"
                                                    variant="outlined"
                                                    InputLabelProps={{
                                                        sx: {
                                                            fontFamily: "Lato",
                                                            fontSize: "1rem",
                                                            fontWeight: "400",
                                                        },
                                                    }}
                                                    {...register(
                                                        "postal_code",
                                                        {
                                                            required:
                                                                "Postal Code is required",
                                                        }
                                                    )}
                                                    error={!!errors.postal_code}
                                                    helperText={
                                                        errors.postal_code
                                                            ?.message
                                                    }
                                                    FormHelperTextProps={{
                                                        sx: {
                                                            fontSize: "1rem",
                                                        },
                                                    }}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={5.8}>
                                        <Grid
                                            container
                                            direction="column"
                                            gap={3}
                                            justifyContent="flex-start"
                                            alignItems="flex-start"
                                            alignContent="flex-start"
                                        >
                                            <Grid item>
                                                <TextField
                                                    id="outlined-basic"
                                                    label="Last Name"
                                                    variant="outlined"
                                                    InputLabelProps={{
                                                        sx: {
                                                            fontFamily: "Lato",
                                                            fontSize: "1rem",
                                                            fontWeight: "400",
                                                        },
                                                    }}
                                                    {...register("last_name", {
                                                        required:
                                                            "Last Name is required",
                                                    })}
                                                    error={!!errors.last_name}
                                                    helperText={
                                                        errors.last_name
                                                            ?.message
                                                    }
                                                    FormHelperTextProps={{
                                                        sx: {
                                                            fontSize: "1rem",
                                                        },
                                                    }}
                                                />
                                            </Grid>
                                            <Grid item>
                                                <TextField
                                                    id="outlined-basic"
                                                    label="Contact No."
                                                    variant="outlined"
                                                    InputLabelProps={{
                                                        sx: {
                                                            fontFamily: "Lato",
                                                            fontSize: "1rem",
                                                            fontWeight: "400",
                                                        },
                                                    }}
                                                    {...register("contact", {
                                                        required:
                                                            "Contact No. is required",
                                                    })}
                                                    error={!!errors.contact}
                                                    helperText={
                                                        errors.contact?.message
                                                    }
                                                    FormHelperTextProps={{
                                                        sx: {
                                                            fontSize: "1rem",
                                                        },
                                                    }}
                                                />
                                            </Grid>
                                            <Grid item>
                                                <Autocomplete
                                                    disablePortal
                                                    id="combo-box-demo"
                                                    options={countriesData}
                                                    sx={{ width: "13.5rem" }}
                                                    renderInput={(params) => (
                                                        <TextField
                                                            {...params}
                                                            InputLabelProps={{
                                                                sx: {
                                                                    fontFamily:
                                                                        "Lato",
                                                                    fontSize:
                                                                        "1rem",
                                                                    fontWeight:
                                                                        "400",
                                                                },
                                                            }}
                                                            label="Country"
                                                            {...register(
                                                                "country",
                                                                {
                                                                    required:
                                                                        "Country is required",
                                                                }
                                                            )}
                                                            error={
                                                                !!errors.country
                                                            }
                                                            helperText={
                                                                errors.country
                                                                    ?.message
                                                            }
                                                            FormHelperTextProps={{
                                                                sx: {
                                                                    fontSize:
                                                                        "1rem",
                                                                },
                                                            }}
                                                        />
                                                    )}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
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
                                sx={{ mt: "1.5rem", mb: "1.5rem" }}
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
                                        cancel
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button type="submit" variant="contained">
                                        Edit Profile
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </form>
    );
};

export default ProfileDetailsCard;
