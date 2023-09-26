import React, { useState } from "react";
import Button from "../../common/buttons/Button";
import { Dialog, DialogContent } from "@mui/material";

interface SeatMapDialogProps {
    src: string;
}

const SeatMapDialog: React.FC<SeatMapDialogProps> = ({ src }) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setOpen(true)} variant="contained">
                View Seat Map
            </Button>
            <Dialog
                maxWidth="lg"
                fullWidth
                open={open}
                onClose={() => setOpen(false)}
            >
                <DialogContent>
                    <img src={src} />
                </DialogContent>
            </Dialog>
        </>
    );
};

export default SeatMapDialog;
