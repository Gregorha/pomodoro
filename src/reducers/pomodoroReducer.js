import Duration from 'luxon/src/duration.js';
import { ADD_TIME, SUB_TIME, START_PAUSE, RESET, TIMER, NEW_SESSION, CALCULATE_BREAKS, TRYBE_MESSAGE, NEXT_EVENT, NEXT_QUOTE, TIMER_TICK, TIMER_START, TIMER_STOP } from '../actions/actionType'
import importantEvents from '../components/pomodoro/importantEvents'

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
  startPauseLabel: "Começar",
  calcMessage: "Vimos que você está em horário de aula, gostaria de calcular automaticamente os próximos intervalos?",
  nextImportantEvent: importantEvents[0].date,
  index: Math.floor(Math.random() * 4),
  sessionIndex: 0,
  classDay: DateTime.local().setLocale('pt-br').weekdayLong,
  teste: Duration.fromObject({ minutes: 25 }),
  end: DateTime.local().set({ milliseconds: 0 }).plus(Duration.fromObject({ minutes: 25 }))
}

const pomodoroReducer = (state = initialState, action) => {
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
        reseted: false,
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
        startPauseLabel: "Começar",
        teste: Duration.fromObject({ minutes: 25 })

      }

    case TIMER:
      let now = DateTime.local().set({ milliseconds: 0 });
      const Tend = DateTime.local().set({ milliseconds: 0 }).plus(state.timeLeft)
      return {
        ...state,
        timeLeft: Duration.fromObject(Tend.diff(now, ['minutes', 'seconds']).toObject()),
        end:Tend
      }

    case NEW_SESSION:
      if (action.isLongBreak) {
        return {
          ...state,
          timerLabel: "Pausa Longa",
          timeLeft: Duration.fromObject({ minutes: state.longBreakLength }),
          sessions: 0
        }
      }
      else {
        return {
          ...state,
          timerLabel: state.timerLabel === "Sessão de Estudo" ? "Pausa Curta" : "Sessão de Estudo",
          timeLeft: state.timerLabel === "Sessão de Estudo" ? Duration.fromObject({ minutes: state.breakLength }) :
            Duration.fromObject({ minutes: state.sessionLength }),
          sessions: state.sessions + 1,
        }
      }

    case CALCULATE_BREAKS:
      return {
        ...state,
        sessionLength: Math.floor(action.sessionAndBreaks / 6 * 5),
        breakLength: Math.floor(action.sessionAndBreaks / 6),
        timeLeft: Duration.fromObject({ minutes: Math.floor(action.sessionAndBreaks / 6 * 5) }),
        calcMessage: "Pronto para começar a sessão de estudos!"
      }

    case TRYBE_MESSAGE:
      return {
        ...state,
        calcMessage: action.message
      }

    case NEXT_EVENT:
      return {
        ...state,
        nextImportantEvent: importantEvents[action.value].date
      }

    case NEXT_QUOTE:
      return {
        ...state,
        index: Math.floor(Math.random() * 4),
        sessionIndex: state.reseted ? 0 : state.timerLabel === "Sessão de Estudo" ? 1 : state.timerLabel === "Pausa Curta" ? 2 : 3

      }
    
    case TIMER_START:

    return {
      ...state,
      running: true,
      reseted: false,
      startPauseLabel: "Pausar",
      end: DateTime.local().set({ milliseconds: 0 }).plus(state.timeLeft)
    }

    case TIMER_TICK:

      const Tnow = DateTime.local().set({ milliseconds: 0 })
      return{
        ...state,
        timeLeft: Duration.fromObject(state.end.diff(Tnow, ['minutes', 'seconds']).toObject())
      }

    case TIMER_STOP:
      return{
        ...state,
        running: false,
        startPauseLabel: "Começar" 
      }

    default:
      return state
  }
}

export default pomodoroReducer