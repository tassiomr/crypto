import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

export const TextInput = (props) => {
  const { placeholder, onChangeText } = props;
  return (
    <StyledTextInput placeholder={placeholder} onChangeText={onChangeText} />
  );
};
TextInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
};

const StyledTextInput = styled.TextInput`
  height: 45;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 5;
  padding-left: ${(props) => props.theme.spaces.default};
`;
