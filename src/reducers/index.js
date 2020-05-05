import { combineReducers } from 'redux'
import todoReducer from './todosReducer'
import pomodoroReducer from './pomodoroReducer'


export default combineReducers({
  todoList: todoReducer,
  pomodoro: pomodoroReducer,
})