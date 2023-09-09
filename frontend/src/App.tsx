import './assets/fonts/fonts.css';
import HeadingOne from "./components/common/headings/HeadingOne";
import HeadingTwo from "./components/common/headings/HeadingTwo";
import HeadingThree from "./components/common/headings/HeadingThree";
import { Grid } from "@mui/material";

const App = () => {
    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </div>
            <HeadingOne colorScheme="primary"> Heading 1 </HeadingOne>
            <h1></h1>

            <HeadingTwo colorScheme="primary"> Heading 2 </HeadingTwo>
            <h1></h1>

            <HeadingThree colorScheme="primary"> Heading 3 </HeadingThree>
            <h1></h1>
            
            <div style={{ backgroundColor: "black" }}>
                <HeadingOne colorScheme="mono"> Heading 1 </HeadingOne>
            </div>
            <h1></h1>

            <div style={{ backgroundColor: "black" }}>
                <HeadingTwo colorScheme="mono"> Heading 2 </HeadingTwo>
            </div>
            <h1></h1>

            <div style={{ backgroundColor: "black" }}>
                <HeadingThree colorScheme="mono"> Heading 3 </HeadingThree>
            </div>

            <Button colorType='secondary' variantType='contained' hasNextIcon={false}>regular</Button>

            <Button colorType='secondary' variantType='outlined' hasNextIcon={false}>outlined</Button>

            <Button colorType='primary' variantType='contained' hasNextIcon>next</Button>
        </>
    );
};

export default App;
