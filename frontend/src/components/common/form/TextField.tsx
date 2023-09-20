import React from "react";
import {
    BaseTextFieldProps,
    InputAdornment,
    TextField as MuiTextField,
} from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";
import { SvgIconComponent } from "@mui/icons-material";

interface TextFieldProps extends BaseTextFieldProps {
    Icon?: SvgIconComponent;
    iconPosition?: "start" | "end";
}

const TextField: React.FC<TextFieldProps> = ({
    name,
    label,
    type,
    variant,
    Icon,
    iconPosition,
    sx,
    ...props
}) => {
    const { control } = useFormContext();

    return (
        <Controller
            {...props}
            control={control}
            name={name ? name : "text field"}
            render={({ field, fieldState }) => (
                <MuiTextField
                    {...field}
                    sx={sx}
                    error={Boolean(fieldState.error)}
                    helperText={fieldState.error?.message}
                    label={label}
                    type={type}
                    variant={variant}
                    InputProps={
                        Icon && iconPosition === "start"
                            ? {
                                  startAdornment: (
                                      <InputAdornment position="start">
                                          <Icon />
                                      </InputAdornment>
                                  ),
                              }
                            : Icon && iconPosition === "end"
                            ? {
                                  endAdornment: (
                                      <InputAdornment position="start">
                                          <Icon />
                                      </InputAdornment>
                                  ),
                              }
                            : {}
                    }
                />
            )}
        />
    );
};

export default TextField;
