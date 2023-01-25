/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddnewBook from './AddnewBook';
import Book from './Book';
import { getBooks } from '../redux/books/books';

const Books = () => {
  const book = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <div className="book-container">
      <Book book={book} />
      <AddnewBook />
    </div>
  );
};

export default Books;
