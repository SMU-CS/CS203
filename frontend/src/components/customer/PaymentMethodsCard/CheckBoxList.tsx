import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { CreditCard } from "../../../types/creditcard";
import Checkbox from "../../common/form/Checkbox";

interface CheckboxListProps {
    data: CreditCard[];
}

const CheckboxList: React.FC<CheckboxListProps> = ({ data }) => {
    return (
        <List>
            {data.map(({ id, card_number }) => (
                <ListItem key={id} disablePadding>
                    <Checkbox
                        name={id.toString()}
                        label={`XXXX XXXX XXXX ${card_number.slice(-4)}`}
                    />
                </ListItem>
            ))}
        </List>
    );
};

export default CheckboxList;
