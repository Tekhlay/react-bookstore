import React from 'react';
import { useSelector } from 'react-redux';
import AddnewBook from './AddnewBook';
import Book from './Book';

const Books = () => {
  const book = useSelector((state) => state.books);

  return (
    <div className="book-container">
      <Book book={book} />
      <AddnewBook />
    </div>
  );
};

export default Books;
