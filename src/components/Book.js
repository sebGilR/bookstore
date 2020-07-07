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
      <td className="book-category">{category}</td>
      <td className="book-title">{title}</td>
      <td className="book-id">{id}</td>
      <td className="book-delete"><button type="button" onClick={() => handleRemoveBook(book)}>Remove Book</button></td>
    </>
  );
};

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.object).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
