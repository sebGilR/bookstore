import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import createBookAction from '../actions/index';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
let idGen = 3;

const BooksForm = props => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Action');

  const handleChange = e => {
    if (e.target.name === 'title') {
      setTitle(e.target.value);
    } else {
      setCategory(e.target.value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const book = { id: idGen += 1, title, category };
    props.submitNewBook(book);
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="form-title">ADD NEW BOOK</h2>
      <div>
        <input id="title" type="text" onChange={handleChange} name="title" value={title} placeholder="Book title" />
        <label htmlFor="category">Select a category
        <select id="category" value={category} onChange={handleChange}>
            {
              categories.map(
                category => <option key={category}>{category}</option>,
              )
            }
          </select>
        </label>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

BooksForm.propTypes = {
  submitNewBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  submitNewBook: book => {
    dispatch(createBookAction(book));
  },
});

export default connect(null, mapDispatchToProps)(BooksForm);
