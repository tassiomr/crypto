import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { FlatList } from 'react-native-gesture-handler';
import { Screen } from '../components/core/screen';
import { getCoinsList, filtredCoins } from '../store/useCases/coins';
import { ListItem } from '../components/presentational/listItem';
import { TextInput } from '../components/core/textInput';
import { Text } from '../components/core/text';

export const HomeScreen = (props) => {
  const dispatch = useDispatch();
  const { coins } = useSelector((state) => state);
  const [data, setData] = useState([]);

  useEffect(() => {
    dispatch(getCoinsList());
  }, []);

  useEffect(() => {
    setData(coins.coinsList);
  }, [coins.coinsList]);

  useEffect(() => {
    setData(coins.filtredCoins);
  }, [coins.filtredCoins]);

  const onChangeText = (text) => {
    if (!text) {
      setData(coins.coinsList);
    }

    dispatch(filtredCoins(text));
  };

  return (
    <Screen isLoading={coins.isLoading}>
      <TextInput placeholder="seach by name" onChangeText={onChangeText} />

      <FlatList
        style={{ width: '100%' }}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        data={data}
        ItemSeparatorComponent={() => <Separator />}
        ListEmptyComponent={() => (
          <ListEmptyComponent>
            <Text.Title text="search empty" />
          </ListEmptyComponent>
        )}
        renderItem={({ item }) => (
          <ListItem
            item={item}
            onPress={() => props.navigation.navigate('Coin', { item })}
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
