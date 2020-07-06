import React from 'react';

const Book = ({ book }) => {
  const {
    id,
    title,
    category
  } = book;

  return (
    <>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
    </>
  )
}

export default Book;