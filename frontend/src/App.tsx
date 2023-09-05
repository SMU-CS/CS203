import HeadingOne from "./components/common/headings/HeadingOne";
import HeadingTwo from "./components/common/headings/HeadingTwo";
import HeadingThree from "./components/common/headings/HeadingThree";
import "./assets/index.css";
import theme from './assets/theme/defaultTheme';
import { ThemeProvider } from "@mui/material/styles";
import Button from "./components/common/buttons/Button";
import './assets/fonts/fonts.css';
import OutlinedButton from "./components/common/buttons/OutlinedButton";
import NextButton from "./components/common/buttons/NextButton";

const App = () => {
    return (
        <>
            <ThemeProvider theme={theme}>

                <HeadingOne colorScheme="primary"> Featured </HeadingOne>
                <h1></h1>

                <HeadingTwo colorScheme="secondary"> Heading 2 </HeadingTwo>
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
                <h1>hihi</h1>

                <div style={{ backgroundColor: "black" }}>
                    <HeadingThree colorScheme="mono"> Heading 3 </HeadingThree>
                </div>
                
                <Button>regular</Button>

                <OutlinedButton>outlined</OutlinedButton>

                <NextButton>next</NextButton>
            </ThemeProvider>
        </>
    );
};

export default App;
