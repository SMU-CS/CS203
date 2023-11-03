import {
    FormControl,
    FormControlLabel,
    FormHelperText,
    Radio,
    RadioGroup,
    RadioGroupProps,
} from "@mui/material";
import React from "react";
import {
    Controller,
    FieldValues,
    RegisterOptions,
    useFormContext,
} from "react-hook-form";

interface RadioButtonValues {
    value: string | number | boolean;
    label: string;
}

interface RadioButtonProps extends RadioGroupProps {
    rules?: RegisterOptions<FieldValues, string>;
    values: RadioButtonValues[];
}

const RadioButton: React.FC<RadioButtonProps> = ({
    name,
    rules,
    sx,
    values,
    ...props
}) => {
    const { control } = useFormContext();

    return (
        <Controller
            control={control}
            rules={rules}
            name={name ? name : "radio button field"}
            render={({ field, fieldState }) => (
                <FormControl
                    {...field}
                    sx={sx}
                    error={Boolean(fieldState.error)}
                >
                    <RadioGroup {...props} sx={sx}>
                        {values.map(({ value, label }) => (
                            <FormControlLabel
                                value={value}
                                label={label}
                                control={<Radio />}
                            />
                        ))}
                    </RadioGroup>
                    <FormHelperText>{fieldState.error?.message}</FormHelperText>
                </FormControl>
            )}
        />
    );
};

export default RadioButton;
