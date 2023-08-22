import { createBrowserRouter } from "react-router-dom";
import App from "../App";

/**
    Creates a browser router with react-router-dom
    @returns { Router } returns a BrowserRouter
*/
const router = createBrowserRouter([{ path: "/", element: <App /> }]);

export default router;
