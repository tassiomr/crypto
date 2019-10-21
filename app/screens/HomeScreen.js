import React, { useEffect, useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { ThemeContext } from 'styled-components/native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import { Screen } from '../components/core/screen';
import { getCoinsList, filtredCoins } from '../store/useCases/coins';
import { ListItem } from '../components/presentational/listItem';
import { TextInput } from '../components/core/textInput';
import { Text } from '../components/core/text';
import { returnTitle, desc, cres } from '../utils/tools';

export const HomeScreen = (props) => {
  const dispatch = useDispatch();
  const { coins } = useSelector((state) => state);
  const [data, setData] = useState([]);
  const [orderByZto0, setOrderByName] = useState(false);
  const [isLoadingOrder, setLoadingOrder] = useState(false);

  const theme = useContext(ThemeContext);

  const timming = () => {
    setTimeout(() => {
      setLoadingOrder(false);
    }, 500);
  };

  useEffect(() => {
    if (orderByZto0 && isLoadingOrder) {
      const ordered = desc(coins.coinsList);
      setData(ordered);
      timming();
    } else if (!orderByZto0 && isLoadingOrder) {
      const ordered = cres(coins.coinsList);
      setData(ordered);
      timming();
    }
  }, [orderByZto0]);

  useEffect(() => {
    dispatch(getCoinsList());
  }, []);

  useEffect(() => {
    setData(cres(coins.coinsList));
  }, [coins.coinsList]);

  useEffect(() => {
    if (orderByZto0) {
      setOrderByName(false);
    }
    setData(cres(coins.filtredCoins));
  }, [coins.filtredCoins]);

  const onChangeText = (text) => {
    if (!text) {
      setData(coins.coinsList);
    }

    dispatch(filtredCoins(text));
  };

  return (
    <Screen isLoading={coins.isLoading || isLoadingOrder}>
      <ToolBar>
        <ToolBarLeftItem
          onPress={() => {
            setOrderByName(!orderByZto0);
            setLoadingOrder(true);
          }}>
          <StyledText>{returnTitle(orderByZto0)}</StyledText>
        </ToolBarLeftItem>
        <Icon
          name={'info'}
          color={theme.primary}
          size={theme.spaces.iconSize.extraLarge}
          onPress={() => props.navigation.navigate('Info')}
        />
      </ToolBar>
      <TextInput placeholder="seach by name" onChangeText={onChangeText} />

      <FlatList
        style={{ width: '100%' }}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        data={data}
        ItemSeparatorComponent={() => <Separator />}
        ListEmptyComponent={() => (
          <ListEmptyComponent>
            <Text.Title text="the search return an empty list" />
          </ListEmptyComponent>
        )}
        renderItem={({ item }) => (
          <ListItem
            item={item}
            onPress={() => props.navigation.navigate('Coin', { coin: item })}
          />
        )}
      />
    </Screen>
  );
};

const Separator = styled.View`
  width: 100%;
  height: 1;
  background-color: ${(props) => props.theme.title};
`;

const ListEmptyComponent = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ToolBar = styled.View`
  height: 45;
  width: 100%;
  margin-bottom: ${(props) => props.theme.spaces.small};
  padding-left: ${(props) => props.theme.spaces.default};
  padding-right: ${(props) => props.theme.spaces.default};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ToolBarLeftItem = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: ${(props) => props.theme.primary};
  width: 120;
  border-radius: 50;
`;

const StyledText = styled.Text`
  font-size: 12;
  color: ${(props) => props.theme.palette.white};
`;
