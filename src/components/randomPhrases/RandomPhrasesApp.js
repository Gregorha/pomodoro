import React from 'react'
import allQuotes from './randomPhrases.js'
import './randomPhrasesStyle.css'

class RandomQuoteGenerator extends React.Component {
  constructor(props){
    super(props);
  }
  //functions
  
  render(){
    
    let quote = allQuotes[this.props.sessionIndex][this.props.index].quote
    return (
      <div className='random-phrase'>
        <p id = "text">{quote}</p>
      </div>
    )
  };
  
}

export default RandomQuoteGenerator;