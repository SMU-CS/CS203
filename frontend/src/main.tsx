// main.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@mui/material/styles'; // or '@mui/styles' for MUI v4
import CssBaseline from '@mui/material/CssBaseline'; // Optional: Apply global CSS reset
import App from './App'; // Your main application component
import theme from './assets/theme/defaultTheme'; // Import your custom theme

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Optional: Apply global CSS reset */}
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

