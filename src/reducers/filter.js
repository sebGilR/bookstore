const filterReducer = (state = 'ALL', action) => {
  console.log(action.type);
  switch (action.type) {
    case 'CHANGE_FILTER':
      return action.filter;
    default:
      return state;
  }
};

export default filterReducer;
