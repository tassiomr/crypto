import React from 'react';
import styled from 'styled-components/native';

export const HomeScreen = props => (
  <View>
    <Text>Home</Text>
    <Button onPress={() => props.navigation.navigate('Coin')}>
      <Text>Go to screen 2</Text>
    </Button>
  </View>
);

const View = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Text = styled.Text`
  color: ${props => props.theme.title};
`;

const Button = styled.TouchableOpacity`
  padding: ${props => props.theme.spaces.default}px;
  background-color: ${props => props.theme.success};
`;
