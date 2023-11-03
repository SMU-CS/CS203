import React from "react";
import { BaseTextFieldProps } from "@mui/material";
import {
    useFormContext,
    Controller,
    RegisterOptions,
    FieldValues,
} from "react-hook-form";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateField } from "@mui/x-date-pickers/DateField";

interface ExpirationDateFieldProps extends BaseTextFieldProps {
    rules?: RegisterOptions<FieldValues, string>;
}

const ExpirationDateField: React.FC<ExpirationDateFieldProps> = ({
    name,
    label,
    type,
    rules,
    ...props
}) => {
    const { control } = useFormContext();

    return (
        <Controller
            {...props}
            control={control}
            rules={rules}
            name={name ? name : "text field"}
            render={({ field, fieldState }) => (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateField
                        {...field}
                        format="MM/YYYY"
                        disablePast
                        slotProps={{
                            textField: {
                                error: !!fieldState.error,
                            },
                        }}
                        helperText={fieldState.error?.message}
                        label={label}
                    />
                </LocalizationProvider>
            )}
        />
    );
};

export default ExpirationDateField;
