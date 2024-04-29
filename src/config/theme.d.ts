import { Palette, PaletteOptions } from "@mui/material/styles";
import { TextFieldPropsColorOverrides } from "@mui/material/TextField";
import { ButtonPropsColorOverrides } from "@mui/material";
import { AppBarPropsColorOverrides } from "@mui/material/AppBar";

declare module "@mui/material/styles" {
  interface Palette {
    darkBg: Palette["primary"];
    lightBg: Palette["primary"];
    elementBg: Palette["primary"];
    elementHover: Palette["primary"];
  }

  interface PaletteOptions {
    darkBg?: PaletteOptions["primary"];
    lightBg?: PaletteOptions["primary"];
    elementBg?: PaletteOptions["primary"];
    elementHover?: PaletteOptions["primary"];
  }

  interface Text {
    
  }
}

declare module "@mui/material" {
  interface AppBarPropsColorOverrides {
    lightBg: true;
  }
}
