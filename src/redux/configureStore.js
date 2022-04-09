import { createStore } from 'redux';
import books from './bookstore/index';

const store = createStore(books);

export default store;
