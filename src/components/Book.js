import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, handleRemoveBook }) => {
  const {
    id,
    title,
    category,
  } = book;

  return (
    <>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
      <td><button type="button" onClick={() => handleRemoveBook(book)}>Remove Book</button></td>
    </>
  );
};

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.object).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
