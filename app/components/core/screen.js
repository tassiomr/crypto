import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { Text } from './text';
import { Toast } from './toats';

export const Screen = (props) => (
  <View>
    <Text.Title text="Screen" />
    {props.children}
    <Toast />
  </View>
);

Screen.propTypes = {
  children: PropTypes.element.isRequired,
};

const View = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.backgroundColor};
`;
