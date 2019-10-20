import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeContext } from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { Text } from '../core/text';

export const ListItem = (props) => {
  const theme = useContext(ThemeContext);
  return (
    <StyledButton onPress={props.onPress}>
      <StyledIcon name={'bitcoin'} size={32} color={theme.title} />
      <Container>
        <Text.Title text={`${props.item.name}`} />
        <Text.SubTitle text={`Symbol: ${props.item.symbol}`} />
      </Container>
    </StyledButton>
  );
};

ListItem.propTypes = {
  onPress: PropTypes.func.isRequired,
  item: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
    symbol: PropTypes.string,
  }).isRequired,
};

const StyledButton = styled.TouchableOpacity`
  width: 100%;
  height: 55;
  padding-left: ${(props) => props.theme.spaces.default};
  flex-direction: row;
  align-items: center;
`;

const Container = styled.View``;

const StyledIcon = styled(Icon)`
  padding-right: ${(props) => props.theme.spaces.default};
`;
