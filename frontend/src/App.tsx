<<<<<<< Updated upstream
const App = () => {
    return <></>;
};
=======
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import HeadingOne from "./components/common/headings/HeadingOne";
import HeadingTwo from "./components/common/headings/HeadingTwo";
import HeadingThree from "./components/common/headings/HeadingThree";
import { Grid } from "@mui/material";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

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
            <h1></h1>
            <div style={{ backgroundColor: "black" }}>
                <HeadingThree colorScheme="mono"> Heading 3 </HeadingThree>
            </div>


            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    );
}
>>>>>>> Stashed changes

export default App;
