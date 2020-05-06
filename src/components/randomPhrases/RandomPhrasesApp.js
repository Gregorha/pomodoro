import React from 'react'
import allQuotes from './randomPhrases.js'
import './randomPhrasesStyle.css'
import {connect} from 'react-redux'

class RandomQuoteGenerator extends React.Component {
  
  render(){
    
    let quote = this.props.closeToEvent ? this.props.eventMessage : allQuotes[this.props.sessionIndexs][this.props.indexs].quote
    return (
      <div className='random-phrase'>
        <p id = "text">{quote}</p>
      </div>
    )
  };
  
}

const mapState = (state) => {

  return{
    indexs: state.pomodoro.index,
    sessionIndexs: state.pomodoro.sessionIndex,
    closeToEvent: state.pomodoro.closeToImportantEvent,
    eventMessage: state.pomodoro.importantEventMessage
  }
   
}

export default connect(
  mapState,
  null
)(RandomQuoteGenerator);
