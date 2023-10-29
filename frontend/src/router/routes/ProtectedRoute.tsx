import { ReactNode } from "react";
import NavBar from "../../components/common/navigations/NavBar";
import { useKeycloak } from "@react-keycloak/web";
import Error403 from "./Error403";

interface ProtectedRouteProps {
    children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const { keycloak, initialized } = useKeycloak();

    return keycloak.authenticated && initialized ? (
        <>
            <NavBar role="customer" />
            {children}
        </>
    ) : (
        <Error403 />
    );
};

export default ProtectedRoute;
