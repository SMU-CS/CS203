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

interface TextFieldProps extends BaseTextFieldProps {
    rules?: RegisterOptions<FieldValues, string>;
}

const DateOfBirthTextField: React.FC<TextFieldProps> = ({
    name,
    label,
    type,
    rules,
    required,
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
                <LocalizationProvider dateAdapter={AdapterDayjs} {...field}>
                    <DateField
                        required={required}
                        onError={(error, value) => {
                            if (error) {
                                console.log(`Error: ${error}`);
                                console.log(`Associated value: ${value}`);
                            }
                        }}
                        helperText={fieldState.error?.message}
                        label="Date Of Birth"
                    ></DateField>
                </LocalizationProvider>
            )}
        />
    );
};

export default DateOfBirthTextField;
