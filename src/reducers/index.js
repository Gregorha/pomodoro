import { combineReducers } from 'redux'
import todoReducer from './todosReducer'
import pomodoroReduce from './pomodoroReduce'
import phrasesReducer from './randomPhrasesReducer'

export default combineReducers({
  todoList: todoReducer,
  pomodoro: pomodoroReduce,
  phrases: phrasesReducer
})