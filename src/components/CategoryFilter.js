import React from 'react';
import PropType from 'prop-types';

const CategoryFilter = ({ handleFilterChange }) => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <>
      <label htmlFor="category-filter" id="category-filter-label">FILTER</label>
      <select onChange={e => handleFilterChange(e)} id="category-filter">
        <option key="ALL">ALL</option>
        {categories.map(category => <option key={category}>{category}</option>)}
      </select>
    </>
  );
};

CategoryFilter.propTypes = {
  handleFilterChange: PropType.objectOf(PropType.object).isRequired,
};

export default CategoryFilter;
