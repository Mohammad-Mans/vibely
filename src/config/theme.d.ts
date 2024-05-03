import { Palette, PaletteOptions } from "@mui/material/styles";
import { TextFieldPropsColorOverrides } from "@mui/material/TextField";
import { ButtonPropsColorOverrides } from "@mui/material";
import { AppBarPropsColorOverrides } from "@mui/material/AppBar";

declare module "@mui/material/styles" {
  interface Palette {
    elementBg: Palette["primary"];
    elementHover: Palette["primary"];
    iconBg: Palette["primary"];
    iconHover: Palette["primary"];
  }

  interface PaletteOptions {
    elementBg?: PaletteOptions["primary"];
    elementHover?: PaletteOptions["primary"];
    iconBg?: PaletteOptions["primary"];
    iconHover?: PaletteOptions["primary"];
  }
}
