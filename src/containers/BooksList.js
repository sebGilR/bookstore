import React from 'react';
import Book from '../components/Book';
import { connect } from 'react-redux';

const mapStateToProp = (state) => ({
  books: state
});

const BooksList = ({ books }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {books.map(book => <tr key={ book.id }><Book /></tr>)}
      </tbody>
    </table>
  );
}

export default connect(null, mapStateToProp)(BooksList);