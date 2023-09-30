import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import { creditcard } from "../../../types/creditcard";

interface CheckboxListProps {
    data: creditcard[];
    onToggle: (value: number) => void;
    checked: number[];
}

const CheckboxList: React.FC<CheckboxListProps> = ({
    data,
    onToggle,
    checked,
}) => {
    return (
        <List>
            {data.map((payment, index) => {
                const labelId = `checkbox-list-label-${index}`;
                return (
                    <ListItem key={index} disablePadding>
                        <ListItemButton
                            role={undefined}
                            onClick={() => onToggle(index)}
                            dense
                        >
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={checked.indexOf(index) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{ "aria-labelledby": labelId }}
                                />
                            </ListItemIcon>
                            <ListItemText
                                id={labelId}
                                primary={`XXXX XXXX XXXX ${payment.card_number.slice(
                                    -4
                                )}`}
                            />
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List>
    );
};

export default CheckboxList;
