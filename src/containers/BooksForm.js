import React from 'react';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const BooksForm = () => (
  <form>
    <label htmlFor="title">
      Title:
      <input id="title" type="text" />
    </label>
    <label htmlFor="category">
      Category:
      <select id="category">
        {
          categories.map(
            category => <option key={category}>{category}</option>
          )
        }
      </select>
    </label>
    <button type="submit">Submit</button>
  </form>
);

export default BooksForm;
