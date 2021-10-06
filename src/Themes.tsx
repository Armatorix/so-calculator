import { createTheme } from "@mui/material";
import { green } from "@mui/material/colors";

export const DarkThemeStyle = createTheme({
  palette: {
    mode: "dark",
    primary: green,
    secondary: green,
  },
  components: {
    // FIXME: not working 
    MuiInputBase: {
      styleOverrides: {
        root: {
          color: "white"
        }
      }
    }
  }
});

export const LightThemeStyle = createTheme({
  palette: {
    mode: "light",
    primary: green,
    secondary: green,
  },
});
