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
            .find(({ activity_id }) => activity_id === activityId)
            ?.ticket_types?.map(({ ticket_type_id, type, price }) => ({
                id: ticket_type_id,
                value: ticket_type_id,
                text: `${type} ($${price.toFixed(2)})`,
            }));
        setTicketOptions(choices ? choices : []);
    }, [activityId]);

    return (
        <TableRow>
            <TableCell sx={{width: "45%"}}>
                <SelectField
                    key={`purchase_requests.${index}.datetime_location`}
                    name={`purchase_requests.${index}.datetime_location`}
                    multiple={false}
                    label="Select Ticket Datetime"
                    choices={[
                        { id: "-1", value: "", text: "Select Ticket Datetime" },
                        ...activities.map(
                            ({ activity_id, start_datetime, location }) => ({
                                id: activity_id,
                                value: activity_id,
                                text: `${start_datetime} @ ${location}`,
                            })
                        ),
                    ]}
                />
            </TableCell>
            <TableCell sx={{width: "35%"}}>
                <SelectField
                    name={`purchase_requests.${index}.ticket_type`}
                    multiple={false}
                    label="Select Ticket Category"
                    choices={[
                        { id: "-1", value: "", text: "Select Ticket Category" },
                        ...ticketOptions,
                    ]}
                />
            </TableCell>
            <TableCell sx={{width: "15%"}}>
                <TextField
                    name={`purchase_requests.${index}.quantity`}
                    type="number"
                />
            </TableCell>
            <TableCell sx={{width: "5%"}}>
                <IconButton onClick={() => remove(index)}>
                    <DeleteIcon />
                </IconButton>
            </TableCell>
        </TableRow>
    );
};

export default MakePRTableRows;
