import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const spacing = {
  zero: 0,
  extraSmall: 4,
  small: 8,
  default: 16,
  large: 24,
  extraLarge: 32,
  iconSize: {
    small: 12,
    default: 16,
    large: 20,
  },
};

export { width, height };
