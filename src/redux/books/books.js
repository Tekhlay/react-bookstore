// Actions
const Addbook = 'bookstore/books/ADD_BOOK';
const Removebook = 'bookstore/books/REMOVE_BOOK';

// intial State
const initialState = [];

// Reducer
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case Addbook:
      return [...state, action.payload];
    case Removebook:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

// Action Creators
const addBook = (book) => ({
  type: Addbook,
  payload: book,
});

const removeBook = (book) => ({
  type: Removebook,
  payload: book,
});

// Export
export { addBook, removeBook };
export default booksReducer;
