import React, { Fragment, useState } from "react";
import { Grid, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SearchButton from "../buttons/SearchButton";
import { EventListingType } from "../../../types/event";

interface SearchBarProps {
    data?: EventListingType[];
}

const SearchBar: React.FC<SearchBarProps> = ({ data }) => {
    const [value, setValue] = useState("");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const onChange = (event: {
        target: { value: React.SetStateAction<string> };
    }) => {
        setValue(event.target.value);
    };

    const onSearch = (searchTerm: any) => {
        setValue(searchTerm);
        console.log("search ", searchTerm);
        setIsDropdownOpen(false);
    };

    return (
        <Fragment>
            <Paper
                elevation={3}
                sx={{
                    width: "52.875rem",
                    height: "3.75rem",
                    borderRadius: "0.25rem",
                    border: "1px solid rgba(0, 0, 0, 0.42)",
                    position: "relative",
                }}
            >
                <Grid
                    container
                    direction="row"
                    xs={12}
                    sx={{
                        height: "100%",
                        alignContent: "center",
                        alignItems: "center",
                       justifyContent: "space-evenly"
                    }}
                >
                    <Grid item xs={0.9} sx={{ ml: "1rem", mt: "0.5rem" }}>
                        <SearchIcon sx={{ fontSize: 45, opacity: "54%" }} />
                    </Grid>
                    <Grid item xs={9}>
                        <InputBase
                            value={value}
                            fullWidth={true}
                            placeholder="Search for concert in listing"
                            onChange={onChange}
                            onFocus={() => setIsDropdownOpen(true)}
                            sx={{
                                "& .MuiInputBase-input": {
                                    padding: "8px 16px",
                                    textAlign: "start",
                                },
                            }}
                        />
                    </Grid>
                    <SearchButton onClick={() => onSearch(value)}>
                        Search
                    </SearchButton>
                    {isDropdownOpen && (
                        <div
                            className="dropdown"
                            style={{
                                position: "absolute",
                                top: "100%",
                                left: 0,
                                marginLeft: "5rem",
                                backgroundColor: "white",
                                display: "flex",
                                flexDirection: "column",
                                border: "1px solid gray",
                            }}
                        >
                            {data && data
                                .filter((item) => {
                                    const searchTerm = value.toLowerCase();
                                    const title = item.name.toLowerCase();

                                    return (
                                        searchTerm &&
                                        title.startsWith(searchTerm) &&
                                        title !== searchTerm
                                    );
                                })
                                .slice(0, 10)
                                .map((item) => (
                                    <div
                                        onClick={() => onSearch(item.name)}
                                        className="dropdown-row"
                                        key={item.id}
                                        style={{
                                            padding: "8px 16px",
                                            cursor: "pointer",
                                            textAlign: "start",
                                            borderBottom: "1px solid #ccc",
                                        }}
                                    >
                                        {item.name}
                                    </div>
                                ))}
                        </div>
                    )}
                </Grid>
            </Paper>
        </Fragment>
    );
};

export default SearchBar;