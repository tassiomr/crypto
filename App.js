import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { theme } from './app/theme';
import Routes from './app/routes';
import { getTheme } from './app/store/useCases/status';

const App = () => {
  const { status } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTheme());
  }, []);

  return (
    <ThemeProvider theme={theme[status.theme]}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
