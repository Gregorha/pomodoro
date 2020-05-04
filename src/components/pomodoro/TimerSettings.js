import React from 'react';
import { addTime, subTime } from '../../actions/index'
import { connect } from 'react-redux'

class TimerSetter extends React.Component{
  render(){
    const label = this.props.labelId
    let displayValue = label === 'session-label' ? this.props.sessionLength : label === 'break-label' ? this.props.breakLength : this.props.longBreakLength

    return(
      <div className = 'container mt-3'>
        <div className = 'row'>
           <div className = 'col'>
            <div className = 'break-input-label' id = {label} >
              {this.props.label}
            </div>
          </div>
          <div className = 'col settings-inputs'>
            <div className = 'row'>
              <div>
                <button className = 'btn btn-outline-light btn-settings' id = {this.props.increment} onClick = {() => this.props.addTime(label)}><i className='fas fa-angle-up'/></button>
              </div>
              
              <div className = 'break-input' id = {this.props.lengthId}>
                {displayValue}
              </div>

              <div>
                <button className = 'btn btn-outline-light btn-settings' id = {this.props.decrement} onClick = {() => this.props.subTime(label)}><i className='fas fa-angle-down'/></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapState (state){
  return {
    sessionLength: state.pomodoro.sessionLength,
    breakLength: state.pomodoro.breakLength,
    longBreakLength: state.pomodoro.longBreakLength
  }
}

export default connect(
  mapState,
  { addTime, subTime }
)(TimerSetter);