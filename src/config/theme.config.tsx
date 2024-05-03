import React, { createContext, useContext, useMemo, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import type {} from "@mui/lab/themeAugmentation";
import { PaletteMode } from "@mui/material";
import { common } from "@mui/material/colors";

type ThemeProp = {
  children: JSX.Element;
};

enum themePalette {
  Teal = "#009688",
  BattleshipGray = "#827F74",
}

const ThemeContext = createContext({
  toggleTheme: () => {},
  isDarkMode: false,
});

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    primary: {
      main: themePalette.Teal,
      contrastText: common.white,
    },
    secondary: {
      main: themePalette.BattleshipGray,
    },
    ...(mode === "light"
      ? {
          background: {
            default: "#fff",
            paper: "#f0f2f5",
          },
          elementBg: {
            main: "#f0f2f5",
          },
          elementHover: {
            main: "#f2f2f2",
          },
          iconBg: {
            main: "#e4e6eb",
          },
          iconHover: {
            main: "#d8dadf",
          },
        }
      : {
          background: {
            default: "#242526",
            paper: "#18191a",
          },
          elementBg: {
            main: "#3a3b3c",
          },
          elementHover: {
            main: "#3a3b3c",
          },
          iconBg: {
            main: "#3a3b3c",
          },
          iconHover: {
            main: "#4e4f50",
          },
        }),
  },
});

const ThemeConfig: React.FC<ThemeProp> = ({ children }) => {
  const [mode, setMode] = useState<PaletteMode>("light");

  const colorMode = useMemo(
    () => ({
      toggleTheme: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
      isDarkMode: mode === "dark",
    }),
    [mode]
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);

export default ThemeConfig;
