import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import IconButton from "@mui/material/IconButton";
import { createTheme } from "@mui/material/styles";
import * as React from "react";

const themeLocalStorageKey = "theme";
const darkTheme = "dark";
const lightTheme = "light";

export default function useToggleColorMode() {
  const [mode, setMode] = React.useState<typeof lightTheme | typeof darkTheme>(
    () => {
      if (localStorage === undefined) {
        return lightTheme;
      }
      const storageTheme = localStorage.getItem(themeLocalStorageKey);
      if (storageTheme === lightTheme || storageTheme === darkTheme) {
        return storageTheme;
      }
      return lightTheme;
    }
  );
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          const newMode = prevMode === lightTheme ? darkTheme : lightTheme;
          localStorage.setItem(themeLocalStorageKey, newMode);
          return newMode;
        });
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          background: {
            default: mode === lightTheme ? "#FFF" : "#000",
          },
          mode: mode,
        },
      }),
    [mode]
  );

  const toggleButton = (
    <IconButton
      sx={{ ml: 1 }}
      onClick={colorMode.toggleColorMode}
      color="inherit"
    >
      {theme.palette.mode === darkTheme ? (
        <Brightness7Icon />
      ) : (
        <Brightness4Icon />
      )}
    </IconButton>
  );

  return [theme, toggleButton];
}
