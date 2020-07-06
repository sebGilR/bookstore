import React, { createElement } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore } from 'redux';
import rootReducer from './reducers';
import { Provider } from 'react-redux';

let idGen = 0

const initialState = [
  { id: ++idGen, title: 'Book 1', category: 'Action' },
  { id: ++idGen, title: 'Book 2', category: 'Learning' },
  { id: ++idGen, title: 'Book 3', category: 'History' },
]

const store = createStore(rootReducer, { books: initialState })

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
