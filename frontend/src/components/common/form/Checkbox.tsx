import FormControlLabel from "@mui/material/FormControlLabel";
import MUICheckbox from "@mui/material/Checkbox";
import { Controller, useFormContext } from "react-hook-form";

interface CheckboxProps {
    name: string;
    label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ name, label }) => {
    const { control } = useFormContext();

    return (
        <Controller
            control={control}
            name={name}
            render={({ field }) => (
                <FormControlLabel
                    {...field}
                    control={<MUICheckbox defaultChecked={field.value} />}
                    label={label}
                />
            )}
        />
    );
};

export default Checkbox;
