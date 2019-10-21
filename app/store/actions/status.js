export const GET_STATUS = 'GET_STATUS';
export const SUCCESS_GET_STATUS = 'SUCCEES_GET_STATUS';
export const FAILURE_GET_STATUS = 'FAILURE_GET_STATUS';

export const APP_THEME = 'APP_THEME';

export const getStatus = () => ({
  type: GET_STATUS,
});

export const getStatusSuccess = (data) => ({
  type: SUCCESS_GET_STATUS,
  payload: {
    data,
  },
});

export const getStatusFailure = (error) => ({
  type: FAILURE_GET_STATUS,
  payload: { error },
});

export const appTheme = (theme) => ({
  type: APP_THEME,
  payload: {
    theme,
  },
});
