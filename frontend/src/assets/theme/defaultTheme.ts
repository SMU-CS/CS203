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
        light: '#33FFF',
        dark: '#007BB2',
        contrastText: '#fff',
    },
  },

  typography: {

    fontSize: 20,

    fontFamily: [
      'bebas-nueue', 
      'circular-spotify-bold', 
      'circular-spotify-light', 
      'lato-bold', 
      'lato-regular',
      'lato-semi-bold-italic'
    ].join(','), 

    allVariants: {
      textTransform: 'none',
      fontFamily: 'lato-regular',
    }
  },

  // components: {
  //   MuiButton: {
  //     styleOverrides: {
  //       root: {
  //         textTransform: "none"
  //       }
  //     }
  //   }
  //   Mui
  // }

  });

export default defaultTheme;
