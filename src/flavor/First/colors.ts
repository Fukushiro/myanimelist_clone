import { Default } from "../Default";
import { ColorsData } from "../Default/colors";

const primary = "red";
const secondary = "green";
const tertiary = "blue";
export const colors: ColorsData = {
  ...Default.colors,
  primary: primary,
  secondary: secondary,
  tertiary: tertiary,
};
