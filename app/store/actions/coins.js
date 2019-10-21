export const GET_COINS = 'GET_COINS';
export const SUCCESS_GET_COINS = 'SUCCESS_GET_COINS';
export const FAILURE_GET_COINS = 'FAILURE_GET_COINS';

export const GET_COIN_DETAILS = 'GET_COIN_DETAILS';
export const SUCCESS_GET_COIN_DETAILS = 'SUCCESS_GET_COIN_DETAILS';
export const FAILURE_GET_COIN_DETAILS = 'FAILURE_GET_COIN_DETAILS';

export const FILTRED_COINS = 'FILTRED_COINS';

export const GET_MARKET_HISTORY = 'GET_MARKET_HISTORY';
export const SUCCESS_GET_MARKET_HISTORY = 'SUCCESS_GET_MARKET_HISTORY';
export const FAILURE_GET_MARKET_HISTORY = 'FAILURE_GET_MARKET_HISTORY';

export const getCoins = () => ({
  type: GET_COINS,
});

export const successGetCoins = (data) => ({
  type: SUCCESS_GET_COINS,
  payload: { data },
});

export const failureGetCoins = (error) => ({
  type: FAILURE_GET_COINS,
  payload: { error },
});

export const getCoinDetails = () => ({
  type: GET_COIN_DETAILS,
});

export const successGetCoinDetails = (data) => ({
  type: SUCCESS_GET_COIN_DETAILS,
  payload: { data },
});

export const failureGetCoinDetails = (error) => ({
  type: FAILURE_GET_COIN_DETAILS,
  payload: { error },
});

export const filtredCoinsSuccess = (data) => ({
  type: FILTRED_COINS,
  payload: {
    data,
  },
});

export const getMarketHistory = () => ({
  type: GET_MARKET_HISTORY,
});

export const getMarketHistorySuccess = (data) => ({
  type: SUCCESS_GET_MARKET_HISTORY,
  payload: {
    data,
  },
});

export const getMarketHistoryFailure = (error) => ({
  type: FAILURE_GET_MARKET_HISTORY,
  payload: {
    error,
  },
});
