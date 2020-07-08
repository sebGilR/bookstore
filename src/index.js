import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './style/index.css';
import App from './components/App';
import rootReducer from './reducers';

let idGen = 0;

const initialState = [
  { id: idGen += 1, title: 'Book 1', category: 'Action' },
  { id: idGen += 1, title: 'Book 2', category: 'Learning' },
  { id: idGen += 1, title: 'Book 3', category: 'History' },
];

const store = createStore(rootReducer, { books: initialState });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
