import React from 'react';
import Book from '../components/Book';
import { connect } from 'react-redux';



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
        {books.map(book => <tr key={book.id}><Book book={book} /></tr>)}
      </tbody>
    </table>
  );
}

const mapStateToProp = (state) => ({
  books: state.books
});

export default connect(mapStateToProp, null)(BooksList);