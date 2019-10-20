import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components/native';
import PropTypes from 'prop-types';

export const TextInput = (props) => {
  const { placeholder, onChangeText } = props;
  const theme = useContext(ThemeContext);
  return (
    <StyledTextInput
      placeholder={placeholder}
      onChangeText={onChangeText}
      placeholderTextColor={theme.title}
    />
  );
};
TextInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
};

const StyledTextInput = styled.TextInput`
  height: 45;
  width: 95%;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 5;
  padding-left: ${(props) => props.theme.spaces.default};
  margin-bottom: ${(props) => props.theme.spaces.small};
  align-self: center;
  color: ${(props) => props.theme.title};
`;
