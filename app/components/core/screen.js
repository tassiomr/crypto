import React from 'react';
import { Alert } from 'react-native';
import styled from 'styled-components/native';
import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';
import { Toast } from './toats';
import { Indicator } from './indicator';

export const Screen = (props) => {
  const { status, coins } = useSelector((state) => state);
  const { isLoading, children, checkError } = props;

  const error = status.error || coins.error;

  return (
    <View isLoading={isLoading}>
      {!isLoading ? <>{children}</> : <Indicator isLoading={isLoading} large />}
      {error
        && checkError
        && Alert.alert(error.title, error.message, [
          {
            text: 'Try Again',
            onPress: () => error.action(),
          },
          {
            text: 'OK',
            onPress: () => {},
            style: 'cancel',
          },
        ])}
      <Toast />
    </View>
  );
};

Screen.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  checkError: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Screen.defaultProps = {
  checkError: true,
};

const View = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.backgroundColor};
  justify-content: ${(props) => (props.isLoading ? 'center' : 'flex-start')};
  align-items: ${(props) => (props.isLoading ? 'center' : 'flex-start')};
  width: 100%;
`;
