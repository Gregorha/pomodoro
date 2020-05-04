import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, UPDATE_DISPLAY, ADD_TIME, SUB_TIME, START_PAUSE, RESET, TIMER, NEW_SESSION } from './actionType.js'

export const addTodo = (task, newId) =>({
  type: ADD_TODO,
  id: newId,
  text: task,
  complete: false,
})

export const removeTodo = (removeId) => ({
  type: REMOVE_TODO,
  id: removeId
})

export const toggleComplete = (toggleId) => ({
  type: TOGGLE_TODO,
  id: toggleId
})

export const updateDisplay = (status) => ({
  type: UPDATE_DISPLAY,
  text: status
})

export const addTime = (label) => ({
  type: ADD_TIME,
  label:label
})

export const subTime = (label) => ({
  type: SUB_TIME,
  label:label
})

export const toggleTimer = () => ({
  type: START_PAUSE,
})

export const resetTimer = (label) => ({
  type: RESET,
})

export const handleTimer = (end) => ({
  type: TIMER,
  end: end
})

export const handleNewSession = (isLongBreak) => ({
  type: NEW_SESSION,
  isLongBreak: isLongBreak
})