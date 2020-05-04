import Duration from 'luxon/src/duration.js';
import { ADD_TIME, SUB_TIME, START_PAUSE, RESET, TIMER, NEW_SESSION } from '../actions/actionType'

const { DateTime } = require("luxon");

const initialState = {
  sessionLength: 25,
  breakLength: 5,
  longBreakLength: 20,
  timerLabel: "Sessão de Estudo",
  timeLeft: Duration.fromObject({ minutes: 25 }),
  running: false,
  reseted: true,
  sessions: 0,
  startPauseLabel: "Começar"
}

const pomodoroReduce = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TIME:
      return {
        ...state,
        sessionLength: action.label === 'session-label' && state.sessionLength < 60 ? state.sessionLength + 1 : state.sessionLength,
        breakLength: action.label === 'break-label' && state.breakLength < 60 ? state.breakLength + 1 : state.breakLength,
        longBreakLength: action.label === 'long-break-label' && state.longBreakLength < 60 ? state.longBreakLength + 1 : state.longBreakLength,
        timeLeft: action.label === "break-label" ?
        Duration.fromObject({ minutes: state.breakLength + 1 }) :
        action.label === "long-break-label" ?
        Duration.fromObject({ minutes: state.longBreakLength + 1 }) :
        Duration.fromObject({ minutes: state.sessionLength + 1 }),
        timerLabel: action.label === "session-label" ? "Sessão de Estudo" : action.label === "break-label" ? "Pausa Curta" : "Pausa Longa"
      }
    case SUB_TIME:
      return {
        ...state,
        sessionLength: action.label === 'session-label' && state.sessionLength > 1 ? state.sessionLength - 1 : state.sessionLength,
        breakLength: action.label === 'break-label' && state.breakLength > 1 ? state.breakLength - 1 : state.breakLength,
        longBreakLength: action.label === 'long-break-label' && state.longBreakLength > 1 ? state.longBreakLength - 1 : state.longBreakLength,
        timeLeft: action.label === "break-label" && state.breakLength > 1 ?
        Duration.fromObject({ minutes: state.breakLength - 1 }) :
        action.label === "long-break-label" && state.breakLength > 1 ?
        Duration.fromObject({ minutes: state.longBreakLength - 1 }) : action.label === 'session-label' && state.sessionLength > 1 ?
        Duration.fromObject({ minutes: state.sessionLength - 1 }) : state.timeLeft,
        timerLabel: action.label === "session-label" ? "Sessão de Estudo" : action.label === "break-label" ? "Pausa Curta" : "Pausa Longa"
      }

    case START_PAUSE:
      return {
        ...state,
        running: !state.running,
        reseted: state.reseted && false,
        startPauseLabel: state.startPauseLabel === "Começar" ? "Pausar" : "Começar"
      }

    case RESET:
      return {
        ...state,
        running: false,
        reseted: true,
        sessionLength: 25,
        breakLength: 5,
        longBreakLength: 20,
        timerLabel: "Sessão de Estudo",
        timeLeft: Duration.fromObject({ minutes: 25 }),
        startPauseLabel: "Começar"

      }
    
    case TIMER:
      const now = DateTime.local().set({ milliseconds: 0 })
      return {
        ...state,
        timeLeft: Duration.fromObject(action.end.diff(now, ['minutes', 'seconds']).toObject()),
      }

    case NEW_SESSION:
      if(action.isLongBreak){
        return{
          ...state,
          timerLabel: "Pausa Longa",
          timeLeft: Duration.fromObject({ minutes: state.longBreakLength }),
          sessions: 0
        }
      }
      else{
        return {
        ...state,
        timerLabel: state.timerLabel === "Sessão de Estudo" ? "Pausa Curta" : "Sessão de Estudo",
        timeLeft: state.timerLabel === "Sessão de Estudo" ? Duration.fromObject({ minutes: state.breakLength }) :
          Duration.fromObject({ minutes: state.sessionLength }),
        sessions: state.sessions + 1,
        }
      }

    default:
      return state
  }
}

export default pomodoroReduce