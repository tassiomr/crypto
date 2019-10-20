import {
  GET_STATUS,
  SUCCESS_GET_STATUS,
  FAILURE_GET_STATUS,
} from '../actions/status';

const defaultState = {
  apiStatus: undefined,
  isLoading: false,
  error: {},
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_STATUS:
      return { ...state, isLoading: true, error: false };
    case SUCCESS_GET_STATUS:
      return { ...state, isLoading: false, apiStatus: action.payload.data };
    case FAILURE_GET_STATUS:
      return { ...state, isLoading: false, error: action.payload.error };
    default:
      return state;
  }
};
