import { createTheme } from '@mui/material/styles';

const theme = createTheme({

  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      // main: '#081627',
      main: '#17232F',
      contrastText: '#9DA0B4',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#CDCFD3',
      main: '#CDCFD3',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});

export default theme