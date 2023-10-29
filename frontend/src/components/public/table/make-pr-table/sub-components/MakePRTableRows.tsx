import React, { useEffect, useState } from "react";
import { TableRow, TableCell, IconButton } from "@mui/material";
import SelectField, {
    DropdownChoices,
} from "../../../../common/form/SelectField";
import { UseFieldArrayRemove, useFormContext } from "react-hook-form";
import DeleteIcon from "@mui/icons-material/Delete";
import { Activity } from "../../../../../types/activity";
import TextField from "../../../../common/form/TextField";

interface MakePRTableRowsProps {
    index: number;
    remove: UseFieldArrayRemove;
    activities: Activity[];
}

const MakePRTableRows: React.FC<MakePRTableRowsProps> = ({
    index,
    remove,
    activities,
}) => {
    const { watch } = useFormContext();
    const activityId = watch(`purchase_requests.${index}.datetime_location`);
    const [ticketOptions, setTicketOptions] = useState<DropdownChoices[]>([]);

    useEffect(() => {
        const choices = activities
            .find(({ id }) => id === activityId)
            ?.ticketTypes?.map(({ id: ticketId, type, price }) => ({
                id: ticketId,
                value: ticketId,
                text: `${type} ($${price.toFixed(2)})`,
            }));
        setTicketOptions(choices ? choices : []);
    }, [activityId]);

    return (
        <TableRow>
            <TableCell sx={{ width: "45%" }}>
                <SelectField
                    rules={{ required: "Please select a ticket datetime" }}
                    key={`purchase_requests.${index}.datetime_location`}
                    name={`purchase_requests.${index}.datetime_location`}
                    multiple={false}
                    label="Select Ticket Datetime"
                    choices={[
                        { id: "-1", value: "", text: "Select Ticket Datetime" },
                        ...activities.map(({ id, startDateTime }) => ({
                            id: id,
                            value: id,
                            text: startDateTime,
                        })),
                    ]}
                />
            </TableCell>
            <TableCell sx={{ width: "35%" }}>
                <SelectField
                    rules={{ required: "Please select a ticket type" }}
                    name={`purchase_requests.${index}.ticket_type`}
                    multiple={false}
                    label="Select Ticket Category"
                    choices={[
                        { id: "-1", value: "", text: "Select Ticket Category" },
                        ...ticketOptions,
                    ]}
                />
            </TableCell>
            <TableCell sx={{ width: "15%" }}>
                <TextField
                    rules={{
                        min: {
                            value: 1,
                            message: "Min. is 1",
                        },
                        max: {
                            value: 4,
                            message: "Max. is 1",
                        },
                    }}
                    name={`purchase_requests.${index}.quantity`}
                    type="number"
                />
            </TableCell>
            <TableCell sx={{ width: "5%" }}>
                <IconButton onClick={() => remove(index)}>
                    <DeleteIcon />
                </IconButton>
            </TableCell>
        </TableRow>
    );
};

export default MakePRTableRows;
