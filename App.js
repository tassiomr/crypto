import React from 'react';
import {theme} from './app/theme';
import {ThemeProvider} from 'styled-components';
import Routes from './app/routes';

const App = () => (
  <ThemeProvider theme={theme.light}>
    <Routes />
  </ThemeProvider>
);

export default App;
