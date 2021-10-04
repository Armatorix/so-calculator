import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { createTheme } from "@mui/material";
import IconButton from "@mui/material/IconButton";
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
      createTheme(mode === lightTheme ? {
        palette: {
          mode: "light",
          background: {
            default: "#FFF",
          },
        },
      }: {
        palette: {
          mode: "dark",
          background: {
            default: "#000",
          },
        }
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
