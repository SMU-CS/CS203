import React from "react";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";

const names = ["Eric", "Hui Feng", "Wesly", "Damien", "En Xi", "Maverick"];

const FooterNames: React.FC = () => {
    return (
        <Grid
            container
            direction="row"
            alignItems="flex-start"
            justifyContent="flex-start"
            columnGap="4rem"
        >
            {names.map((name, index) => (
                <Grid item key={index}>
                    <Typography
                        color="rgba(255,255,255,0.7)"
                        variant="subtitle2"
                    >
                        {name}
                    </Typography>
                </Grid>
            ))}
        </Grid>
    );
};

export default FooterNames;
