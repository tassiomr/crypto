import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { ThemeContext } from 'styled-components/native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon5 from 'react-native-vector-icons/Feather';
import { Screen } from '../components/core/screen';
import { Text } from '../components/core/text';
import { changeTheme } from '../store/useCases/status';

export const Info = (props) => {
  const {
    status: { theme },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  const themeContext = useContext(ThemeContext);

  const themeName = theme === 'dark' ? 'light' : 'dark';

  return (
    <Screen isLoading={false}>
      <StyledIcon
        name="arrow-left"
        size={32}
        color={themeContext.subTitle}
        onPress={() => {
          props.navigation.goBack();
        }}
      />
      <Button onPress={() => dispatch(changeTheme(themeName))}>
        <Text.Title text="Dark Mode" />
        {theme === 'dark' && (
          <Icon name={'checksquare'} size={24} color={themeContext.title} />
        )}
        {theme === 'light' && (
          <Icon5 name={'square'} size={24} color={themeContext.title} />
        )}
      </Button>
      <Container>
        <Text.SubTitle text="App Version: 1.0.0" />
        <Text.SubTitle text="Api by Coin Gecko: https://www.coingecko.com/api/" />
      </Container>
    </Screen>
  );
};

const Container = styled.View`
  margin-top: ${(props) => props.theme.spaces.default};
  padding-left: ${(props) => props.theme.spaces.default};
  padding-right: ${(props) => props.theme.spaces.default};
`;

const Button = styled.TouchableOpacity`
  width: 100%;
  justify-content: space-between;
  padding-left: ${(props) => props.theme.spaces.default};
  padding-right: ${(props) => props.theme.spaces.default};
  align-items: center;
  flex-direction: row;
`;

const StyledIcon = styled(Icon5)`
  padding: ${(props) => props.theme.spaces.default}px;
`;
