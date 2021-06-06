import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from 'GlobalStyle';
import { ThemeProvider } from 'styled-components';
import defaultTheme from 'defaultTheme';
import { Provider } from 'react-redux';
import store from 'redux/store';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
