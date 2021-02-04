import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import App from './App';
import theme from './styles/theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter basename={process.env.BASE_PATH}>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root'),
);
