import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import NumberListReducer from './store/NumberListReducer'
import NumberReducer from './store/NumberReducer'

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
const rootReducer = combineReducers({
  nbr: NumberReducer,
  nbrList: NumberListReducer
})

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);
