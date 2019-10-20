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
} from '../actions/coins';

export const getCoinsList = () => async (dispatch) => {
  try {
    dispatch(getCoins());
    const response = await axios.get(endpoints.coinsLits);
    return dispatch(successGetCoins(response));
  } catch (error) {
    return dispatch(failureGetCoins());
  }
};

export const coinDetails = (id) => async (dispatch) => {
  try {
    dispatch(getCoinDetails());
    const response = await axios.get(`${endpoints.coinDetails}/${id}`);
    return dispatch(successGetCoinDetails(response));
  } catch (error) {
    return dispatch(failureGetCoinDetails());
  }
};

export const filtredCoins = (text) => (dispatch, getStore) => {
  const { coinsList } = getStore().coins;

  const coins = Object.assign([], coinsList);

  dispatch(filtredCoinsSuccess(coins.filter((item) => item.name.includes(text))));
};
