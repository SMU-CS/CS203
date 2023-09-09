import React from 'react'
import ReactDOM from 'react-dom/client'
import router from "./router/config"
import { RouterProvider } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Optional: Apply global CSS reset */}
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

