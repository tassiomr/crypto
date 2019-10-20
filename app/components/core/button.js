import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { Text } from './text';

export const Button = (props) => {
  const { type, onPress, text } = props;

  return (
    <StyledButton type={type} onPress={onPress}>
      <Text.Descriptions text={text} />
    </StyledButton>
  );
};

const StyledButton = styled.TouchableOpacity`
  background-color: ${(props) => props.theme[props.type]};
  width: 100%;
  border-radius: 40;
  padding-top: ${(props) => props.theme.spaces.default};
  padding-bottom: ${(props) => props.theme.spaces.default};
  justify-content: center;
  align-items: center;
`;

Button.propTypes = {
  type: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

Button.defaultProps = {
  type: 'default',
};
