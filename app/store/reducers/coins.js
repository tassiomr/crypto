import {
  GET_COINS,
  GET_COIN_DETAILS,
  SUCCESS_GET_COINS,
  SUCCESS_GET_COIN_DETAILS,
  FAILURE_GET_COINS,
  FAILURE_GET_COIN_DETAILS,
  FILTRED_COINS,
  GET_MARKET_HISTORY,
  SUCCESS_GET_MARKET_HISTORY,
  FAILURE_GET_MARKET_HISTORY,
} from '../actions/coins';

const defaultState = {
  coinsList: [],
  isLoading: false,
  coinDetails: undefined,
  filtredCoins: [],
  error: undefined,
  coinMarketHistory: {},
  isMarketLoading: false,
  marketCap: 0,
  price: 0,
  volume: 0,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_COINS:
    case GET_COIN_DETAILS:
      return { ...state, isLoading: true, error: undefined };
    case GET_MARKET_HISTORY:
      return { ...state, error: undefined, isMarketLoading: true };
    case SUCCESS_GET_COINS:
      return { ...state, isLoading: false, coinsList: action.payload.data };
    case SUCCESS_GET_COIN_DETAILS:
      return { ...state, isLoading: false, coinDetails: action.payload.data };
    case SUCCESS_GET_MARKET_HISTORY:
      return {
        ...state,
        isMarketLoading: false,
        coinMarketHistory: action.payload.data,
        price: action.payload.data.price,
        marketCap: action.payload.data.marketCap,
        volume: action.payload.data.volume,
      };
    case FAILURE_GET_COINS:
    case FAILURE_GET_COIN_DETAILS:
      return { ...state, isLoading: false, error: action.payload.error };
    case FAILURE_GET_MARKET_HISTORY:
      return { ...state, error: action.payload.error, isMarketLoading: false };
    case FILTRED_COINS:
      return { ...state, filtredCoins: action.payload.data };
    default:
      return state;
  }
};
