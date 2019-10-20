import {
  GET_COINS,
  GET_COIN_DETAILS,
  SUCCESS_GET_COINS,
  SUCCESS_GET_COIN_DETAILS,
  FAILURE_GET_COINS,
  FAILURE_GET_COIN_DETAILS,
} from '../actions/coins';

const defaultState = {
  coinsList: [],
  isLoading: false,
  coinDetails: undefined,
  error: undefined,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_COINS:
    case GET_COIN_DETAILS:
      return { ...state, isLoading: true, error: undefined };
    case SUCCESS_GET_COINS:
      return { ...state, isLoading: false, coinsList: action.payload.data };
    case SUCCESS_GET_COIN_DETAILS:
      return { ...state, isLoading: false, coinDetails: action.payload.data };
    case FAILURE_GET_COINS:
    case FAILURE_GET_COIN_DETAILS:
      return { ...state, isLoading: false, error: action.payload.error };
    default:
      return state;
  }
};
