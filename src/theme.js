// dark theme - import into index.js wrapped in themeProvider

import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    text: {
      secondary: "#777"
    }
  },
  typography: {
    h1: {
      fontSize: "81px"
    },
    h2: {
      fontSize: "48px"
    },
    h3: {
      fontSize: "33px"
    },
    h4: {
      fontSize: "28px"
    },
    h5: {
      fontSize: "24px"
    },
    h6: {
      fontSize: "20px"
    },
  }
});


