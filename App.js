import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import { theme } from './app/theme';
import store from './app/store';
import Routes from './app/routes';

const App = () => (
  <ThemeProvider theme={theme.dark}>
    <Provider store={store}>
      <Routes />
    </Provider>
  </ThemeProvider>
);

export default App;
