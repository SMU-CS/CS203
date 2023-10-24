import { useKeycloak } from "@react-keycloak/web";
import React, { ReactNode, useEffect } from "react";
import PublicRoute from "./PublicRoute";
import NavBar from "../../components/common/navigations/NavBar";

interface BaseRouteProps {
  children: ReactNode;
}

const BaseRoute: React.FC<BaseRouteProps> = ({ children }) => {
  const { keycloak, initialized } = useKeycloak();

  useEffect(() => {
    console.log(keycloak)
  }, [keycloak, initialized]);

  return keycloak.authenticated ? (
    <PublicRoute>{children}</PublicRoute>
  ) : (
    <>
    <NavBar role="guest"/>
    {children}
    </>
  );
};

export default BaseRoute;
