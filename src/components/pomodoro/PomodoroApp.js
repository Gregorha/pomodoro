import React from 'react';
import Duration from 'luxon/src/duration.js';
import TimerSetter from './TimerSettings.js'
import RandomQuoteGenerator from '../randomPhrases/RandomPhrasesApp.js'
import importantEvents from "./importantEvents.js"
import boopboop from '../media/inflicted.mp3'
import './pomodoroStyle.css'
import { connect } from 'react-redux'
import { toggleTimer, resetTimer, handleTimer, handleNewSession, calculateBreaks, handleTrybeMessage, handleNextEvent, nextQuote, start, stop } from '../../actions/index'
import Button from 'react-bootstrap/Button'

const { DateTime } = require("luxon");

class PomodoroClock extends React.Component {
  constructor(props) {
    super(props)

    this.reset = this.reset.bind(this)
    this.handleStart = this.handleStart.bind(this)
    this.calculateBreaks = this.calculateBreaks.bind(this)
    this.handleTrybeMessages = this.handleTrybeMessages.bind(this)
    this.nextEventHandler = this.nextEventHandler.bind(this)
    this.setAudioRef = element => {
      this.audioRef = element;
    };
  }

  componentDidMount() {
    if (this.checkDateTime()) {
      this.nextEventHandler()
    }
  }

  componentDidUpdate(){
    const end = this.props.end
    const now = DateTime.local().set({ milliseconds: 0 })
    const endCorrected = end.plus({ seconds: 1 })
    if (this.checkDateTime()) {
      this.nextEventHandler()
    }

    document.title = this.props.timeLeft.toFormat("mm ss").replace(/\s/, ":")

    if (+endCorrected <= +now && this.props.sessions !== 4) {
      this.props.handleNewSession(false)
      this.handleTrybeMessages()
      this.audioRef.play()
      this.props.start()
      this.props.nextQuote()
    }
    else if (+endCorrected <= +now && this.props.sessions === 4) {
      this.props.handleNewSession(true)
      this.audioRef.play()
      this.props.start()
      this.props.nextQuote()
    }

  }

  handleTrybeMessages() {
    const hour = DateTime.local().hour
    const minutes = DateTime.local().minute
    this.props.handleTrybeMessage(hour === 19 && minutes < 20 ?
      "Já está quase no horário de preenchimento do forms, aproveite esse tempo para preencher com calma" :
      hour === 19 && minutes >= 20 && minutes < 40 ?
        "Está no horário de preencher o forms, hora de dar uma descansada, enviar seus feedbacks e se preparar para o fechamento" :
        hour === 19 && minutes >= 40 ?
          "Você deveria estar no fechamento do dia, corre pro zoom!!!" :
          "Você está próximo de um momento síncrono, hora de finalizar suas tarefas e se preparar, corre pro zoom!!!")
  }


  handleStart() {
    this.props.toggleTimer()

    this.props.start()

    if (this.props.running) {
      this.props.stop()
    }
    else {
      this.props.nextQuote()
    }
  }

  reset() {
    this.props.resetTimer();
    this.audioRef.pause();
    this.audioRef.currentTime = 0;
    this.props.stop()

    this.props.nextQuote()
  }

  checkDateTime() {
    const weekDay = DateTime.local().weekday
    const hour = DateTime.local().hour
    if (weekDay >= 1 && weekDay <= 5) {
      if (hour >= 10 && hour < 20) {
        return true
      }
      else {
        return false
      }
    }
    else {
      return false
    }
  }

  calculateBreaks() {
    const timeToNextEvent = this.props.nextImportantEvent.diffNow(['minutes']).toObject().minutes
    let sessionAndBreak = timeToNextEvent / 4

    if (this.checkDateTime()) {
      if (sessionAndBreak < 20) {
        for (let i = 3; sessionAndBreak < 20; i--) {
          sessionAndBreak = timeToNextEvent / i
        }
      }
      if (this.props.nextImportantEvent.diffNow(['minutes']).toObject().minutes < 15) {
        this.handleTrybeMessages()
      }
      else {
        this.props.calculateBreaks(sessionAndBreak)
      }
    }
  }

  nextEventHandler() {
    const date = DateTime.local()
    const hour = DateTime.local().hour
    const minutes = DateTime.local().minute
    const eventHour = this.props.nextImportantEvent.hour
    const eventMinutes = this.props.nextImportantEvent.minute

    if (hour > eventHour || (hour === eventHour && minutes >= eventMinutes)) {
      for (let i = 0; i < importantEvents.length - 1; i++) {
        if (importantEvents[i].date < date) {
          this.props.handleNextEvent(i+1)
        }
      }
    }
  }

  render() {
    let calculateButton;
    if (this.checkDateTime()) {
      calculateButton =
        <div className='auto-calculate-wrapper'>
          <button className="classInfo" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            <i className="fa fa-info-circle" aria-hidden="true"></i>
          </button>
          <div className="collapse" id="collapseExample">
            <div className="card card-body">
              <h3>{this.props.calcMessage}</h3>
              <button className="btn-calculate" onClick={this.calculateBreaks}>Calcular</button>
            </div>
          </div>
        </div>
    }
    let btnArray = ['start_pause', 'reset']
    let startStopButton = btnArray.map((element) => (
      <Button variant="outline-light" key={element} className={element === 'reset' && this.props.reset ? "btn-start start-stop hide"
        : element === 'reset' ? 'btn-start reset start-stop'
          : element === 'start_pause' && this.props.reset ? 'btn-start start-stop'
            : "btn-start start-stop start-pause"}

        onClick={element === 'start_pause' ? () => { this.handleStart() } : () => { this.reset() }}
      >
        {element === 'reset' ? "Zerar"
          : element === "start_pause" && this.props.running ? "Pausar"
            : "Começar"}
      </Button>
    ))
    return (
      <div className='pomodoro-global-container container'>



        <div>
          <div id='time-left' className='clock-wrapper pt-5'>
            <div className='rounded-circle timer flex-clock'>
              <h1 className="clock ">{this.props.timeLeft.toFormat("mm ss").replace(/\s/, ":")}</h1>
              <div className='time-label' id='timer-label'>{this.props.timerLabel}</div>
            </div>
          </div>

          <div className='container phrase-wrap'>
            <div className='text-center'>
              <RandomQuoteGenerator />
            </div>
          </div>

          <div className="container start-stop-wrapper mt-3">
            {startStopButton}
          </div>
        </div>

        <div className='row'>
          <div className='container mt-4 col-12 col-md-4 ml-auto'>
            <h2 className='text-center text-head'>Configurações</h2>
            <div className='mt-4'>
              {calculateButton}

              <TimerSetter
                label="Pausa Curta"
                labelId="break-label"
                increment="break-increment"
                decrement="break-decrement"
                lengthId="break-length"
                />

              <TimerSetter
                label="Pausa Longa"
                labelId="long-break-label"
                increment="long-break-increment"
                decrement="long-break-decrement"
                lengthId="long-break-length"
                />

              <TimerSetter
                label="Sessão de Estudo"
                labelId="session-label"
                increment="session-increment"
                decrement="session-decrement"
                lengthId="session-length"
                />

            </div>
          </div>
        </div>
        <audio id="beep" preload="auto" ref={this.setAudioRef} src={boopboop} />
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    running: state.pomodoro.running,
    reset: state.pomodoro.reseted,
    sessionLength: state.pomodoro.sessionLength,
    breakLength: state.pomodoro.breakLength,
    longBreakLength: state.pomodoro.longBreakLength,
    timeLeft: state.pomodoro.timeLeft,
    sessions: state.pomodoro.sessions,
    timerLabel: state.pomodoro.timerLabel,
    startPauseLabel: state.pomodoro.startPauseLabel,
    nextImportantEvent: state.pomodoro.nextImportantEvent,
    end: state.pomodoro.end,
    calcMessage: state.pomodoro.calcMessage
  }
}

export default connect(
  mapState,
  { toggleTimer, resetTimer, handleTimer, handleNewSession, calculateBreaks, handleTrybeMessage, handleNextEvent, nextQuote, start, stop }
)(PomodoroClock);