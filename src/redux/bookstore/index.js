const initialState = [];

// Actions
const GET_BOOKS = 'GET_BOOKS';
const ADD_BOOK = 'ADD_BOOK';

// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_BOOKS:
      return state;
    case ADD_BOOK:
      return [
        ...state,
        action.payload,
      ];
    default: return state;
  }
}

// Action Creators
export const getBooks = () => ({
  type: GET_BOOKS,
});

export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});
