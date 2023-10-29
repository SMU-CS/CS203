import { useKeycloak } from "@react-keycloak/web";
import React, { ReactNode } from "react";
import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute";

interface BaseRouteProps {
  children: ReactNode;
}

const BaseRoute: React.FC<BaseRouteProps> = ({ children }) => {
  const { keycloak} = useKeycloak();

  return keycloak.authenticated ? (
    <ProtectedRoute>{children}</ProtectedRoute>
  ) : (
    <PublicRoute>
    {children}
    </PublicRoute>
  );
};

export default BaseRoute;
