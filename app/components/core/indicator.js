import React, { useContext } from 'react';
import { ActivityIndicator } from 'react-native';
import { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';

export const Indicator = (props) => {
  const { large, isLoading } = props;
  const themeContext = useContext(ThemeContext);

  return isLoading ? (
    <ActivityIndicator
      size={large ? 'large' : 'small'}
      color={themeContext.primary}
    />
  ) : null;
};

Indicator.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  large: PropTypes.bool,
};

Indicator.defaultProps = {
  large: false,
};
