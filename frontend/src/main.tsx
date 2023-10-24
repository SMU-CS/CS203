import React from "react";
import ReactDOM from "react-dom/client";
import router from "./router/router";
import { RouterProvider } from "react-router-dom";
import theme from "./assets/theme/defaultTheme";
import { ThemeProvider } from "@mui/material";
import { CssBaseline } from "@mui/material";
import Footer from "./components/common/footer/Footer";
import {
  QueryClient,
  QueryCache,
  QueryClientProvider,
} from "@tanstack/react-query";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import ErrorMessage from "./components/common/snackbar/ErrorMessage";
import SuccessMessage from "./components/common/snackbar/SuccessMessage";
import InfoMessage from "./components/common/snackbar/InfoMessage";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./functions/keycloak";

/*let initOptions = {
    url: 'http://localhost:8080/',
    realm: 'react-keycloak',
    clientId: 'restClient',
    onLoad: 'login-required',
    KeycloakResponseType: 'code'
}*/

// const keycloak = new Keycloak({
//     url: 'http://keycloak-alb-427916872.ap-southeast-1.elb.amazonaws.com/',
//     realm: 'eztix',
//     clientId: 'eztix-webapp'
// });

// keycloak.init({
//     onLoad: 'check-sso',
//     silentCheckSsoRedirectUri: `${location.origin}/silent-check-sso.html`
// });

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error, query) => {
      if (typeof query?.meta?.errorMessage === "string") {
        enqueueSnackbar(query.meta.errorMessage, { variant: "error" });
      } else if (error instanceof Error) {
        enqueueSnackbar(error.message, { variant: "error" });
      }
    },
  }),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ReactKeycloakProvider authClient={keycloak}>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <QueryClientProvider client={queryClient}>
          <SnackbarProvider
            Components={{
              error: ErrorMessage,
              success: SuccessMessage,
              info: InfoMessage,
            }}
          >
            <RouterProvider router={router} />
          </SnackbarProvider>
        </QueryClientProvider>
        <Footer />
      </ThemeProvider>
    </React.StrictMode>
  </ReactKeycloakProvider>
);
