import { v4 as uuidv4 } from 'uuid';
// Actions
const Addbook = 'ADD_BOOK';
const Removebook = 'REMOVE_BOOK';

// intial State
const initialState = [
//   {
//     id: uuidv4(),
//     title: 'The sun',
//     category: 'Action',
//     author: 'Shang',
//   },
//   {
//     id: uuidv4(),
//     title: 'The flood and water',
//     category: 'Action',
//     author: 'Ergenclop',
//   },
//   {
//     id: uuidv4(),
//     title: 'The dive and conqure',
//     category: 'Action',
//     author: 'Hafiz',
//   },
];

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
