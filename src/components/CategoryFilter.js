import React from 'react';

const CategoryFilter = ({ changeFilter }) => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <select onChange={e => changeFilter(e)}>
      <option key="ALL">ALL</option>
        {categories.map(category => <option key={category}>{category}</option>)}
    </select>
  )
}

export default CategoryFilter;
