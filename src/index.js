import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleWare from 'redux-saga'

import { giphyApp } from '../src/components/redux/reducers'
import mySaga from '../src/components/redux/saga'

const sagaMiddleware = createSagaMiddleWare()

const store = createStore(
  giphyApp,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(mySaga)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
