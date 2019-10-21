import React, { useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled, { ThemeContext } from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
import { Screen } from '../components/core/screen';
import { Text } from '../components/core/text';
import {
  coinDetails as getCoinDetails,
  getHistoryMarket,
} from '../store/useCases/coins';
import { Image } from '../components/core/image';
import { Indicator } from '../components/core/indicator';

export const CoinDetails = (props) => {
  const { coins } = useSelector((state) => state);
  const { coinDetails } = coins;
  const coin = props.navigation.getParam('coin', {});
  const dispatch = useDispatch();

  const theme = useContext(ThemeContext);

  useEffect(() => {
    dispatch(getCoinDetails(coin.id));
    dispatch(getHistoryMarket(coin.id));
  }, []);

  return (
    <Screen isLoading={coins.isLoading}>
      <ScrollView>
        <StyledIcon
          name="arrow-left"
          size={32}
          color={theme.title}
          onPress={() => {
            props.navigation.goBack();
          }}
        />
        <Wrapper>
          {coinDetails?.image.small ? (
            <Image source={coinDetails.image.small} />
          ) : null}
          <Text.Title text={coin.name} />
          {coinDetails?.categories.length ? (
            <Text.SubTitle
              text={`Categorie: ${coinDetails.categories.toString()}`}
            />
          ) : null}
        </Wrapper>
        <ValueWrapper>
          <Text.SubTitle text="SPARK LINE" />
          <Text.Descriptions
            text={`Market Cap Rank: ${coinDetails?.market_cap_rank}º`}
          />
          <Text.Descriptions
            text={`Gecko Rank: ${coinDetails?.coingecko_rank}º`}
          />
          <Text.Descriptions
            text={`Gecko Dev Score: ${coinDetails?.coingecko_score}`}
          />
          <Text.Descriptions
            text={`Dev Score: ${coinDetails?.developer_score}`}
          />
          <Text.Descriptions
            text={`Community Score: ${coinDetails?.community_score}`}
          />
          <Text.Descriptions
            text={`Liquidity Score: ${coinDetails?.liquidity_score}`}
          />
          <Text.Descriptions
            text={`Public Interest Score: ${coinDetails?.public_interest_stats.alexa_rank}`}
          />
          <Text.Descriptions
            text={`  *Alexa: ${coinDetails?.public_interest_stats.alexa_rank}`}
          />
          <Text.Descriptions
            text={`  *Bing: ${coinDetails?.public_interest_stats.alexa_rank}`}
          />
        </ValueWrapper>
        <MarketStory>
          <Text.Title text="Market Chart on Last 24hrs in EUR" />
          <Indicator isLoading={coins.isMarketLoading} />
          {!coins.isMarketLoading ? (
            <MarketValuesWrapper>
              <Text.SubTitle text="Price" />
              <Text.Descriptions text={`$ ${coins.price}`} />
              <Text.SubTitle text="MarketCap" />
              <Text.Descriptions text={`$ ${coins.marketCap}`} />
              <Text.SubTitle text="Volume" />
              <Text.Descriptions text={`$ ${coins.volume}`} />
            </MarketValuesWrapper>
          ) : null}
        </MarketStory>
      </ScrollView>
    </Screen>
  );
};

const Wrapper = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const ValueWrapper = styled.View`
  width: 100%;
  margin-top: ${(props) => props.theme.spaces.default};
  padding-right: ${(props) => props.theme.spaces.default};
  padding-left: ${(props) => props.theme.spaces.default};
`;

const ScrollView = styled.ScrollView`
  width: 100%;
`;

const MarketStory = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: ${(props) => props.theme.spaces.large};
`;

const MarketValuesWrapper = styled.View`
  width: 100%;
  margin-top: ${(props) => props.theme.spaces.large}
  padding-left: ${(props) => props.theme.spaces.default};
`;

const StyledIcon = styled(Icon)`
  padding: ${(props) => props.theme.spaces.default}px;
`;
