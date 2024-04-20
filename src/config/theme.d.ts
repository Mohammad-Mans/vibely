import { Palette, PaletteOptions } from "@mui/material/styles";
import { TextFieldPropsColorOverrides } from "@mui/material/TextField";
import { ButtonPropsColorOverrides } from "@mui/material";
import { AppBarPropsColorOverrides } from "@mui/material/AppBar";

declare module "@mui/material/styles" {
  interface Palette {
    white: Palette["primary"];
    black: Palette["primary"];
    darkBackground: Palette["primary"];
    lightBackground: Palette["primary"];
  }

  interface PaletteOptions {
    white?: PaletteOptions["primary"];
    black?: PaletteOptions["primary"];
    darkBackground?: PaletteOptions["primary"];
    lightBackground?: PaletteOptions["primary"];
  }
}

declare module "@mui/material" {
  interface ButtonPropsColorOverrides {
    black: true;
  }
  
  interface AppBarPropsColorOverrides {
    lightBackground: true;
  }

  interface TextFieldPropsColorOverrides {
    white: true;
  }
}
