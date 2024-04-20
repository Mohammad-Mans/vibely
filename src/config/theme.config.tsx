import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import type {} from "@mui/lab/themeAugmentation";

type ThemeProp = {
  children: JSX.Element;
};

enum themePalette {
  Teal = "#009688",
  White = "#FFF",
  Black = "#000",
  BattleshipGray = "#827F74",
  LightGray = "#f0f2f5",
  OffWhite = "#FDFDFD",
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
    white: {
      main: themePalette.White,
    },
    black: {
      main: themePalette.Black,
    },
    darkBackground: {
      main: themePalette.LightGray,
    },
    lightBackground: {
      main: themePalette.White,
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
