import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book }) => {
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
      <td><button>Remove Book</button></td>
    </>
  );
};

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Book;
