import NavBar from "../../components/common/navigations/NavBar";
//import BaseRoute from "./BaseRoute";
import { useNavigate } from "react-router-dom";
import { ReactElement, useEffect } from "react";
// import { queueSuccess } from "../../functions/formHandling";
// import { enqueueSnackbar } from "notistack";
// import jwtDecode from "jwt-decode";
// import Cookies from "js-cookie";

interface PublicRouteProps {
    children: ReactElement
}

const PublicRoute:React.FC<PublicRouteProps> = ({ children }) => {
    const navigate = useNavigate();

    useEffect(() => {
        // const token = Cookies.get("token");

        // if (token) {
        //     try {
        //         const {sub, exp} = jwtDecode(token)
        //         if(sub.length > 0 && new Date(exp * 1000) > new Date()){
        //             return navigate("/my-summary", {state: {info: "Session found, redirect to Summary Page"}})
        //         }
        //     } catch (e) {
        //         queueSuccess("Invalid/ Expired token found, removing token", enqueueSnackbar)
        //         Cookies.set("token", null);
        //     }
        // }
    }, [navigate]);

    return (
        //<BaseRoute>
        <div>
            <NavBar role="guest"/>
            {children}
        </div>
            
        //</BaseRoute>
    );
};

export default PublicRoute;