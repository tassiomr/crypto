import React from 'react';
import styled from 'styled-components/native';

import PropTypes from 'prop-types';
import { Toast } from './toats';
import { Indicator } from './indicator';

export const Screen = (props) => {
  const { isLoading, children } = props;

  return (
    <View isLoading={isLoading}>
      {!isLoading ? <>{children}</> : <Indicator isLoading={isLoading} large />}
      <Toast />
    </View>
  );
};

Screen.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
};

const View = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.backgroundColor};
  justify-content: ${(props) => (props.isLoading ? 'center' : 'flex-start')};
  align-items: ${(props) => (props.isLoading ? 'center' : 'flex-start')};
  width: 100%;
`;
