import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { FlatList } from 'react-native-gesture-handler';
import { Screen } from '../components/core/screen';
import { getCoinsList } from '../store/useCases/coins';
import { ListItem } from '../components/presentational/listItem';
import { TextInput } from '../components/core/textInput';

export const HomeScreen = (props) => {
  const dispatch = useDispatch();
  const { coins } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getCoinsList());
  }, []);

  return (
    <Screen isLoading={coins.isLoading}>
      <TextInput placeholder="seach by name" />

      <FlatList
        style={{ width: '100%' }}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        data={coins.coinsList}
        ItemSeparatorComponent={() => <Separator />}
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
