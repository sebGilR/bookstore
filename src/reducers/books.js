
const booksReducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [
        ...state,
        action.book
      ]
    case 'REMOVE_BOOK':
      return [
        ...state.slice(0, action.pos),
        ...state.slice(action.pos + 1, state.length)
      ]
  }
}

export default booksReducer;