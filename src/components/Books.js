/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddnewBook from './AddnewBook';
import Book from './Book';

const Books = () => {
  const book = [
    { id: uuidv4(), title: 'The sun', author: 'Shangay' },
    { id: uuidv4(), title: 'The flood and water', author: 'Ergenclop' },
    { id: uuidv4(), title: 'The dive and conqure', author: 'Hafiz' },
  ];

  return (
    <div className="book-container">
      <Book book={book} />
      <AddnewBook />
    </div>
  );
};

export default Books;
