import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import type {} from "@mui/lab/themeAugmentation";

type ThemeProp = {
  children: JSX.Element;
};

enum themePalette {
  Teal = "#009688",
  White = "#FFF",
  BattleshipGray = "#827F74",
  LightGray = "#f0f2f5",
  CoolGray = "#e4e6eb",
  CoolDarkGray = "#D8DADF",
}

const theme = createTheme({
  palette: {
    primary: {
      main: themePalette.Teal,
      contrastText: themePalette.White,
    },
    secondary: {
      main: themePalette.BattleshipGray,
    },
    darkBg: {
      main: themePalette.LightGray,
    },
    lightBg: {
      main: themePalette.White,
    },
    elementBg: {
      main: themePalette.CoolGray,
    },
    elementHover: {
      main: themePalette.CoolDarkGray,
    },
  },
});

const ThemeConfig: React.FC<ThemeProp> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeConfig;
