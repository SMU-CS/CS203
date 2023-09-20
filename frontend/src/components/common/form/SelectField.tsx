import {
    Box,
    Chip,
    FormControl,
    FormHelperText,
    InputLabel,
    MenuItem,
    Select,
    Typography,
} from "@mui/material";
import { SelectInputProps } from "@mui/material/Select/SelectInput";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

interface DropdownChoices {
    text: string | number;
    value: string | number;
    id?: string | number;
}

interface SelectFieldProps extends SelectInputProps {
    name: string;
    label: string;
    multiple: boolean;
    choices: Array<DropdownChoices>;
}

const SelectField: React.FC<SelectFieldProps> = ({
    name,
    variant,
    label,
    choices,
    multiple,
}) => {
    const { control } = useFormContext();

    return (
        <Controller
            control={control}
            name={name}
            render={({ field, fieldState: { error } }) => (
                <FormControl variant={variant} error={Boolean(error)}>
                    <InputLabel>{label}</InputLabel>
                    <Select
                        multiple={multiple}
                        {...field}
                        value={field.value || multiple ? [] : ""}
                        renderValue={(selected) =>
                            multiple ? (
                                <Box display="flex" flexWrap="wrap" gap="0.5">
                                    {selected.map((value) => (
                                        <Chip key={value} label={value} />
                                    ))}
                                </Box>
                            ) : (
                                <Typography>{selected}</Typography>
                            )
                        }
                    >
                        {choices.map(({ text, value }) => (
                            <MenuItem>
                                {value === "" ? <em>{text}</em> : text}{" "}
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
