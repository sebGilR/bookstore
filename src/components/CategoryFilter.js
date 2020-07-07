import React from 'react';
import PropType from 'prop-types';

const CategoryFilter = ({ handleFilterChange }) => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <select onChange={e => handleFilterChange(e)}>
      <option key="ALL">ALL</option>
      {categories.map(category => <option key={category}>{category}</option>)}
    </select>
  );
};

CategoryFilter.propTypes = {
  handleFilterChange: PropType.objectOf(PropType.object).isRequired,
};

export default CategoryFilter;
