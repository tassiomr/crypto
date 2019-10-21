import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components/native';
import PropTypes from 'prop-types';
import { useNetInfo } from '@react-native-community/netinfo';
import Icon from 'react-native-vector-icons/AntDesign';

import { Text } from './text';

export const Toast = (props) => {
  const netInfo = useNetInfo();
  const themeContext = useContext(ThemeContext);

  return !netInfo.isConnected ? (
    <Container>
      <StyledIcon
        name="disconnect"
        size={themeContext.spaces.iconSize.default}
        color={themeContext.title}
      />
      <Text.Descriptions text={props.text} />
    </Container>
  ) : null;
};

Toast.propTypes = {
  isOffline: PropTypes.bool,
  text: PropTypes.string,
};

Toast.defaultProps = {
  isOffline: false,
  text: 'Offline',
};

const Container = styled.View`
  width: 100%;
  height: 30;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: ${(props) => props.theme.danger};
  position: absolute;
  bottom: 0;
`;

const StyledIcon = styled(Icon)`
  margin-right: ${(props) => props.theme.spaces.small};
`;
