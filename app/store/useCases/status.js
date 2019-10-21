import axios from '../../api/axios';
import { endpoints } from '../../api/endpoints';
import {
  getStatus,
  getStatusSuccess,
  getStatusFailure,
  appTheme,
} from '../actions/status';

import STORAGE from '../../utils/storage';

export const getApiStatus = () => async (dispatch) => {
  try {
    dispatch(getStatus());
    const response = await axios.get(endpoints.ping);

    return dispatch(getStatusSuccess(response.gecko_says));
  } catch (error) {
    return dispatch(getStatusFailure(error));
  }
};

export const changeTheme = (theme) => (dispatch) => {
  STORAGE.setItem('THEME', theme);

  dispatch(appTheme(theme));
};

export const getTheme = () => async (dispatch) => {
  const storageItem = await STORAGE.getItem('THEME');

  return dispatch(appTheme(storageItem || 'light'));
};
