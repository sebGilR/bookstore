import booksReducer from './books';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    books: booksReducer
});

export default rootReducer;
