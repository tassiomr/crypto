import numeral from 'numeral';
import axios from '../../api/axios';
import { endpoints } from '../../api/endpoints';

import {
  getCoins,
  successGetCoins,
  failureGetCoins,
  getCoinDetails,
  successGetCoinDetails,
  failureGetCoinDetails,
  filtredCoinsSuccess,
  getMarketHistory,
  getMarketHistorySuccess,
  getMarketHistoryFailure,
} from '../actions/coins';

import strings from '../../utils/strings';

export const getCoinsList = () => async (dispatch) => {
  try {
    dispatch(getCoins());
    const response = await axios.get(endpoints.coinsLits);
    return dispatch(successGetCoins(response));
  } catch (error) {
    return dispatch(
      failureGetCoins({
        title: strings.coinList.title,
        message: strings.coinList.message,
        action: () => dispatch(getCoinsList()),
      }),
    );
  }
};

export const coinDetails = (id) => async (dispatch) => {
  try {
    dispatch(getCoinDetails());
    const response = await axios.get(`${endpoints.coinDetails}${id}`);
    return dispatch(successGetCoinDetails(response));
  } catch (error) {
    return dispatch(
      failureGetCoinDetails({
        title: strings.coinDetails.title,
        message: strings.coinDetails.message,
        action: () => dispatch(coinDetails(id)),
      }),
    );
  }
};

export const filtredCoins = (text) => (dispatch, getStore) => {
  const { coinsList } = getStore().coins;

  const coins = Object.assign([], coinsList);

  const filter = coins.filter((item) => item.name.toLowerCase().includes(text.toLowerCase()));

  dispatch(filtredCoinsSuccess(filter()));
};

export const getHistoryMarket = (id) => async (dispatch) => {
  try {
    dispatch(getMarketHistory());
    const response = await axios.get(
      `${endpoints.coinDetails}${id}/market_chart?vs_currency=usd&days=1`,
    );

    let price = 0;
    let marketCap = 0;
    let volume = 0;

    response.prices.forEach((item, index) => {
      price += item[1];

      if (index === response.prices.length - 1) {
        price /= index;
      }
    });

    response.market_caps.forEach((item, index) => {
      marketCap += item[1];

      if (index === response.market_caps.length - 1) {
        marketCap /= index;
      }
    });

    response.total_volumes.forEach((item, index) => {
      volume += item[1];

      if (index === response.prices.length - 1) {
        volume /= index;
      }
    });
    return dispatch(
      getMarketHistorySuccess({
        price: numeral(price).format('0,0.00000000'),
        marketCap: numeral(marketCap).format('0,0.000000000'),
        volume: numeral(volume).format('0,0.000000'),
      }),
    );
  } catch (error) {
    return dispatch(
      getMarketHistoryFailure({
        title: strings.market.title,
        message: strings.market.message,
        action: () => dispatch(getHistoryMarket(id)),
      }),
    );
  }
};
