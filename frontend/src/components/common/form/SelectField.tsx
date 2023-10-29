import {
    Box,
    Chip,
    FormControl,
    FormControlProps,
    FormHelperText,
    InputLabel,
    MenuItem,
    Select,
    Typography,
} from "@mui/material";
import React from "react";
import { Controller, FieldValues, RegisterOptions, useFormContext } from "react-hook-form";

export interface DropdownChoices {
    text: string | number;
    value: string | number;
    id?: string | number;
}

interface SelectFieldProps extends FormControlProps {
    name: string;
    label: string;
    multiple: boolean;
    choices: Array<DropdownChoices>;
    rules?:  RegisterOptions<FieldValues, string>
}

const SelectField: React.FC<SelectFieldProps> = ({
    name,
    variant,
    label,
    choices,
    multiple,
    rules,
    ...props
}) => {
    const { control } = useFormContext();

    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field, fieldState: { error } }) => (
                <FormControl
                    {...props}
                    fullWidth
                    variant={variant}
                    error={Boolean(error)}
                >
                    <InputLabel>
                        <Typography variant="subtitle1">{label}</Typography>
                    </InputLabel>
                    <Select
                        label={label}
                        multiple={multiple}
                        {...field}
                        renderValue={(selected) =>
                            multiple && selected instanceof Array ? (
                                <Box display="flex" flexWrap="wrap" gap="1">
                                    {selected.map((value) => {
                                        const selectedChoice = choices.find(
                                            (choice) => choice.value === value
                                        );
                                        return (
                                            <Chip
                                                key={value}
                                                label={selectedChoice?.text}
                                            />
                                        );
                                    })}
                                </Box>
                            ) : (
                                <Typography variant="subtitle1">
                                    {
                                        choices.find(
                                            (choice) =>
                                                choice.value === selected
                                        )?.text
                                    }
                                </Typography>
                            )
                        }
                    >
                        {choices.map(({ text, value }) => (
                            <MenuItem key={value} value={value}>
                                {value === "" ? <em>{text}</em> : text}
                            </MenuItem>
                        ))}
                    </Select>
                    {error && error.message && (
                        <FormHelperText>{error.message}</FormHelperText>
                    )}
                </FormControl>
            )}
        ></Controller>
    );
};

export default SelectField;
