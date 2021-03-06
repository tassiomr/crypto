import { palette } from './palette';
import { spacing, width, height } from './spacing';
import { typography } from './typography';

const spaces = {
  ...spacing,
  width,
  height,
};

const baseTheme = {
  spaces,
  typography,
  palette,
};

const light = {
  ...baseTheme,
  backgroundColor: palette.white,
  warning: palette.yellow,
  danger: palette.red,
  success: palette.green,
  primary: palette.tomato,
  default: palette.blue,
  title: palette.grey,
  subTitle: palette.lightGrey,
};

const dark = {
  ...baseTheme,
  backgroundColor: palette.grey,
  warning: palette.darkYellow,
  danger: palette.darkRed,
  success: palette.darkGreen,
  primary: palette.tomato,
  default: palette.darkBlue,
  title: palette.white,
  subTitle: palette.white,
};

export const theme = {
  dark,
  light,
};
