import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

const Title = (props) => <StyledTitle>{props.text}</StyledTitle>;
const SubTitle = (props) => <StyledSubTitle>{props.text}</StyledSubTitle>;
const Descriptions = (props) => (
  <StyledDescriptions>{props.text}</StyledDescriptions>
);

const DefaultText = styled.Text`
  justify-content: center;
  align-items: center;
`;

const StyledTitle = styled(DefaultText)`
  ${(props) => props.theme.typography.title};
`;

const StyledSubTitle = styled(DefaultText)`
  ${(props) => props.theme.typography.subTitle};
`;

const StyledDescriptions = styled(DefaultText)`
  ${(props) => props.theme.typography.descriptions};
`;

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

SubTitle.propTypes = {
  text: PropTypes.string.isRequired,
};

Descriptions.propTypes = {
  text: PropTypes.string.isRequired,
};

export const Text = { Title, SubTitle, Descriptions };
