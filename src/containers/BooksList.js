import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = props => {
  const { books, filter } = props;
  const handleRemoveBook = book => {
    props.removeBook(book);
  };

  const handleFilterChange = newFilter => {
    props.changeFilter(newFilter.target.value);
  };

  const filteredBooks = () => {
    if (filter === 'ALL') {
      return books;
    }
    return books.filter(book => book.category === filter);
  };

  return (
    <>
      <CategoryFilter changeFilter={handleFilterChange} />
      <table>
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {filteredBooks().map(book => (
            <tr key={book.id}>
              <Book book={book} handleRemoveBook={handleRemoveBook} />
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  removeBook: book => {
    dispatch(removeBook(book));
  },
  changeFilter: filter => {
    dispatch(changeFilter(filter));
  },
});

BooksList.defaultProps = {
  filter: 'ALL',
};

BooksList.propTypes = {
  books: PropTypes.objectOf(PropTypes.array).isRequired,
  filter: PropTypes.string,
  removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
