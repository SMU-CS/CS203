import { createTheme } from '@mui/material/styles';

const defaultTheme = createTheme({
  palette: {
    primary: {
        main: "#651FFF",
        light: '#834BFF',
        dark: '#4615B2',
        contrastText: '#fff',

    },

    secondary: {
        main: "#00B0FF",
        light: '#33BFFF',
        dark: '#007BB2',
        contrastText: '#fff',
    },
  },

  typography: {

    fontSize: 20,

    fontFamily: [
      'BebasNueue', 
      'CircularSpotify',
      'Lato',
    ].join(','),

    allVariants: {
      textTransform: 'none',
    },

    h1: {
      fontFamily: 'BebasNueue',
      textAlign: "left",
      fontSize: "3rem",
      fontWeight: "400",
      textTransform: "uppercase",
    },

    h2: {
      fontFamily: 'BebasNueue',
      textAlign: "left",
      fontSize: "2.25rem",
      fontWeight: "400",
      textTransform: "uppercase",
    },

    h3: {
      fontFamily: 'BebasNueue',
      textAlign: "left",
      fontSize: "2rem",
      fontWeight: "400",
      textTransform: "uppercase",
    },

    button: {
      fontFamily: 'CircularSpotify',
      fontWeight: 'bold',
    },

    
  },

  });

export default defaultTheme;
