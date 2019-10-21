import axios from '../../api/axios';
import { endpoints } from '../../api/endpoints';
import { getStatus, getStatusSuccess, getStatusFailure } from '../actions/status';

export const getApiStatus = () => async (dispatch) => {
  try {
    dispatch(getStatus());
    const response = axios.get(endpoints.ping);
    return dispatch(getStatusSuccess(response));
  } catch (error) {
    return dispatch(getStatusFailure(error));
  }
};
