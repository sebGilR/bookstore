import React from 'react';

const categories = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"];

const BooksForm = () => (
  <form>
    <label>
      Title:
      <input type="text" />
    </label>
    <label>
      Category:
      <select>
        {
          categories.map(
            category =>
              <option key={category}>{category}</option>
          )
        }
      </select>
    </label>
    <button type="submit">Submit</button>
  </form>
)

export default BooksForm;