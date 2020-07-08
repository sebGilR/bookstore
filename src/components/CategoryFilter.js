import React from 'react';
import PropType from 'prop-types';

const CategoryFilter = ({ handleFilterChange }) => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <>
      <label htmlFor="category-filter" id="category-filter-label">
        FILTER
        <select onChange={e => handleFilterChange(e)} id="category-filter">
          <option key="ALL">ALL</option>
          {categories.map(category => <option key={category}>{category}</option>)}
        </select>
      </label>
    </>
  );
};

CategoryFilter.propTypes = {
  handleFilterChange: PropType.func.isRequired,
};

export default CategoryFilter;
