import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, removeBook }) => {
  const {
    id,
    title,
    category,
  } = book;

  const handleRemoveBook = book => {
    removeBook(book);
  };

  return (
    <>
      <td className="book-category">{category}</td>
      <td className="book-title">{title}</td>
      <td className="book-id">{id}</td>
      <td className="book-delete"><button type="button" onClick={handleRemoveBook}>Remove Book</button></td>
    </>
  );
};

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.object).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
