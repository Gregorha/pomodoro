import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, UPDATE_DISPLAY, ADD_TIME, SUB_TIME, START_PAUSE, RESET, TIMER, NEW_SESSION, CALCULATE_BREAKS, IMPORTANT_MESSAGE, NEXT_EVENT, NEXT_QUOTE, TIMER_START, TIMER_TICK, TIMER_STOP, CALC_MESSAGE } from './actionType.js'


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

export const handleTimer = () => ({
  type: TIMER,
})

export const handleNewSession = (isLongBreak) => ({
  type: NEW_SESSION,
  isLongBreak: isLongBreak
})

export const calculateBreaks = (sessionAndBreaks) => ({
  type: CALCULATE_BREAKS,
  sessionAndBreaks: sessionAndBreaks
})

export const handleTrybeMessage = (message) => ({
  type: IMPORTANT_MESSAGE,
  message: message
})

export const handleCalcMessage = () => ({
  type: CALC_MESSAGE
})

export const handleNextEvent = (value) => ({
  type: NEXT_EVENT,
  value: value
})

export const nextQuote = () => ({
  type: NEXT_QUOTE,
})

let timer = null;

export const start = (end) => (dispatch) => {
  clearInterval(timer);
  dispatch({ type: TIMER_START });
  timer = setInterval(() => dispatch(tick(end)), 1000);
  // dispatch(tick(end))
}

const tick = (end) => ({ 
  type: TIMER_TICK,
  end: end,
})

export const stop = () => {
  clearInterval(timer);
  return { type: TIMER_STOP };
}