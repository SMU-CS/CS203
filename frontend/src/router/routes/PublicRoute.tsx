import { useKeycloak } from "@react-keycloak/web";
import NavBar from "../../components/common/navigations/NavBar";
import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface PublicRouteProps {
    children: ReactNode;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
    const { keycloak, initialized } = useKeycloak();
    const navigate = useNavigate();

    useEffect(() => {
        if (initialized && !!keycloak.authenticated) {
            navigate("/");
        }
    }, [keycloak, initialized]);

    return (
        <>
            <NavBar role="guest" />
            {children}
        </>
    );
};

export default PublicRoute;
