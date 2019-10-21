import {
  GET_STATUS,
  SUCCESS_GET_STATUS,
  FAILURE_GET_STATUS,
  APP_THEME,
} from '../actions/status';

const defaultState = {
  theme: 'light',
  apiStatus: undefined,
  isLoading: false,
  error: undefined,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_STATUS:
      return { ...state, isLoading: true, error: false };
    case SUCCESS_GET_STATUS:
      return { ...state, isLoading: false, apiStatus: action.payload.data };
    case FAILURE_GET_STATUS:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
        apiStatus: 'Not currently available',
      };
    case APP_THEME:
      return { ...state, theme: action.payload.theme };
    default:
      return state;
  }
};
