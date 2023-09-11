import Heading from "./components/common/headings/Heading";
import Button from "./components/common/buttons/Button";
import { Typography } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";

const App = () => {
    return (
        <>
            <Heading color="primary"> Heading 1 </Heading>
            <h1></h1>

            <Heading variant="h2" color="primary">
                Heading 2
            </Heading>
            <h1></h1>

            <Heading variant="h3" color="primary">
                Heading 3
            </Heading>
            <h1></h1>

            <div style={{ backgroundColor: "black" }}>
                <Heading color="mono"> Heading 1 </Heading>
            </div>
            <h1></h1>

            <div style={{ backgroundColor: "black" }}>
                <Heading variant="h2" color="mono">
                    Heading 2
                </Heading>
            </div>
            <h1></h1>

            <div style={{ backgroundColor: "black" }}>
                <Heading variant="h3" color="mono">
                    Heading 3
                </Heading>
            </div>

            <Typography fontWeight="bold">Body 1 (Bold)</Typography>
            <Typography>Body 1 (Bold)</Typography>
            <Typography variant="body2" fontWeight="bold">
                Body 2 (Bold)
            </Typography>
            <Typography variant="body2">Body 2</Typography>
            <Typography variant="subtitle1" fontWeight="bold">
                Subtitle 1 (Bold)
            </Typography>
            <Typography variant="subtitle1">Subtitle 1</Typography>
            <Typography variant="subtitle2" fontWeight="bold">
                Subtitle 2 (Bold)
            </Typography>
            <Typography variant="subtitle2">Subtitle 2 (Bold)</Typography>

            <Button color="secondary" variant="contained">
                regular
            </Button>

            <Button color="secondary" variant="outlined">
                outlined
            </Button>

            <Button
                color="primary"
                variant="contained"
                endIcon={<ArrowForward />}
            >
                next
            </Button>

            <Typography>End</Typography>
        </>
    );
};

export default App;
