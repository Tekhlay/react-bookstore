import { v4 as uuidv4 } from 'uuid';

// Actions
const Addbook = 'bookstore/books/ADD_BOOK';
const Removebook = 'bookstore/books/REMOVE_BOOK';

// intial State
const initialState = [
  {
    id: uuidv4(),
    title: 'The sun and flute',
    author: 'Shangay',
  },
  {
    id: uuidv4(),
    title: 'The flood and water',
    author: 'Ergenclop',
  },
  {
    id: uuidv4(),
    title: 'The dive and conqure',
    author: 'Hafiz',
  },
];

// Reducer
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case Addbook:
      return [...state, action.payload];
    case Removebook:
      return state.filter((book) => book.id !== action.payload.id);
    default:
      return state;
  }
};

// Action Creators
const addBook = (book) => ({
  type: Addbook,
  payload: {
    id: uuidv4(),
    title: book.title,
    author: book.author,
  },
});

const removeBook = (book) => ({
  type: Removebook,
  payload: {
    id: book.id,
  },
});

// Export
export { addBook, removeBook };
export default booksReducer;
