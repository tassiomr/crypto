import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/native';
import { Screen } from '../components/core/screen';
import { Text } from '../components/core/text';
import { coinDetails } from '../store/useCases/coins';
import { Image } from '../components/core/image';

export const CoinDetails = (props) => {
  const { coins } = useSelector((state) => state);
  const coin = props.navigation.getParam('coin', {});
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(coinDetails(coin.id));
  }, []);

  return (
    <Screen isLoading={coins.isLoading}>
      <Wrapper>
        <Image source={coins?.coinDetails?.image?.small} />
        <Text.Title text={coin.name} />
      </Wrapper>
      <Text.Descriptions text={JSON.stringify(coins.coinDetails)} />
    </Screen>
  );
};

const Wrapper = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;
