import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, UPDATE_DISPLAY } from '../actions/actionType'

const initialState = {
  display: "all",
  todos: []
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:

      const{id, text, complete} = action
      return {
        ...state,
        todos: [
          ...state.todos,
          {id, text, complete}
        ]
      }

    case REMOVE_TODO:

      const idx = state.todos.findIndex((element) => element.id === action.id)
      return{
        ...state,
        todos: [...state.todos.slice(0, idx),
          ...state.todos.slice(idx+1, state.todos.length)
        ]        
      }

    case TOGGLE_TODO:

      const toggleIdx = state.todos.findIndex((element) => element.id === action.id)
      const newTodos = [...state.todos];
      newTodos[toggleIdx].complete = !newTodos[toggleIdx].complete
      return{
        ...state,
        todos: [
          ...newTodos
        ]        
      }

    case UPDATE_DISPLAY:

      return{
        ...state,
        display: action.text
      }

    default:
      return state
  }
}

export default todosReducer