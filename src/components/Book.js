/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const { book } = props;
  const dispatch = useDispatch();
  return (
    <div className="book-container">
      {book.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.author}</p>
          <span>
            <button type="button">Comments</button>
            <button
              type="button"
              onClick={() => dispatch(removeBook(item))}
            >
              Remove

            </button>
            <button type="button">Edit</button>
          </span>
        </div>
      ))}
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    },
  )).isRequired,
};

export default Book;
