import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { ThemeProvider } from 'styled-components';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import rootReducer from './modules';
// import logger from 'redux-logger';

import App from './App';
import theme from './styles/theme';

const store = createStore(
  rootReducer,
  // composeWithDevTools(applyMiddleware(logger, ReduxThunk)),
  composeWithDevTools(applyMiddleware(ReduxThunk)),
); // 여러개의 미들웨어를 적용 할 수 있습니다.

ReactDOM.render(
  <DndProvider backend={HTML5Backend}>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter basename={process.env.BASE_PATH}>
          <App />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </DndProvider>,
  document.getElementById('root'),
);
