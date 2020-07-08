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
      <td>
        <h5 className="book-category">{category}</h5>
        <h3 className="book-title">{title}</h3>
        <h5 className="book-id">{id}</h5>
      </td>
      <td className="book-delete"><button type="button" onClick={() => handleRemoveBook(book)}>Remove Book</button></td>
    </>
  );
};

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.object).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
