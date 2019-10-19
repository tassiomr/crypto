import { palette } from './palette';
import { spacing, width, height } from './spacing';

const spaces = {
  ...spacing,
  width,
  height,
};

const light = {
  backgroundColor: palette.white,
  warning: palette.yellow,
  danger: palette.red,
  success: palette.green,
  primary: palette.tomato,
  title: palette.grey,
  subTitle: palette.lightGrey,
  spaces,
};

const dark = {
  backgroundColor: palette.grey,
  warning: palette.darkYellow,
  danger: palette.darkRed,
  success: palette.darkGreen,
  primary: palette.tomato,
  title: palette.white,
  subTitle: palette.lightGrey,
  spaces,
};

export const theme = {
  dark,
  light,
};
