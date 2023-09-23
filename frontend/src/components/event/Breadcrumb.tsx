import { Box, Typography } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
// import { useNavigate } from "react-router-dom";

/*
TODO: 
- get the navigate function to work
*/

// const navigate = useNavigate();

const BreadCrumb = () => {
    return (
        <Box margin={"0.5rem"}>
            <Breadcrumbs aria-label="breadcrumb" separator=">">
                <Link color="inherit" href="/App" underline="hover">
                    <Typography variant="subtitle1" fontWeight={"bold"}>
                        Home
                    </Typography>
                </Link>
                <Link color="inherit" href="/Landing" underline="hover">
                    <Typography variant="subtitle1" fontWeight={"bold"}>
                        Events
                    </Typography>
                </Link>
                <Link
                    aria-current="page"
                    color="text.primary"
                    href="/EventDetails"
                    underline="hover"
                >
                    <Typography variant="subtitle1" fontWeight={"bold"}>
                        TWICE 5TH WORLD TOUR ‘READY TO BE’ IN SINGAPORE
                    </Typography>
                </Link>
            </Breadcrumbs>
        </Box>
    );
};

export default BreadCrumb;
