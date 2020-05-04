
const randomPhrasesReducer = (state = [], action) => {
  switch (action.type) {
    case 'Something':
      return action.filter
    default:
      return state
  }
}

export default randomPhrasesReducer