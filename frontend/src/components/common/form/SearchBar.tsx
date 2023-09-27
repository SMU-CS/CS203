import React from "react";
import { Grid, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Controller, useFormContext } from "react-hook-form";

const SearchBar: React.FC = ({}) => {
    const { control } = useFormContext();

    return (
        <Paper
            elevation={3}
            sx={{
                borderRadius: "100px",
                border: "1px solid rgba(0, 0, 0, 0.42)",
                px: "1rem",
                py: "0.5rem",
                width:{xs:"90vw", sm:"75vw", md:"60vw"}
            }}
        >
            <Grid
                spacing={1}
                wrap="nowrap"
                container
                direction="row"
                alignItems="center"
            >
                <Grid item display="flex" flexWrap="wrap" alignItems="center">
                    <SearchIcon
                        sx={{
                            fontSize: {
                                xs: "1.3rem",
                                sm: "1.7rem",
                                md: "2rem",
                            },
                            opacity: "54%",
                        }}
                    />
                </Grid>
                <Grid item>
                    <Controller
                        name="search"
                        control={control}
                        render={({ field }) => (
                            <InputBase
                                fullWidth
                                {...field}
                                placeholder="Search for concert in listing"
                            />
                        )}
                    />
                </Grid>
            </Grid>
        </Paper>
    );
};

export default SearchBar;
