import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';

const BooksList = ({ books }) => (
  <table>
    <thead>
      <tr>
        <th>Book ID</th>
        <th>Title</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      {books.map(book => <tr key={book.id}><Book book={book} /></tr>)}
    </tbody>
  </table>
);

const mapStateToProp = state => ({
  books: state.books,
});

BooksList.propTypes = {
  books: PropTypes.objectOf(PropTypes.array),
};

export default connect(mapStateToProp, null)(BooksList);
