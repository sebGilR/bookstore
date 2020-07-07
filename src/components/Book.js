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
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
      <td><button type="button" onClick={handleRemoveBook}>Remove Book</button></td>
    </>
  );
};

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.object).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
