import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../../actions/index'


class TodoInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      textInput: "",
      textList: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      textInput: e.target.value,
    })
  }

  handleSubmit(e) {
    let newId = function () {
      return Math.random().toString(36).substr(2, 9);
    }

    this.props.addTodo(this.state.textInput, newId())

    e.preventDefault()
    
    this.setState({
      textInput: "",
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group row">
            <div className='col-8 col-sm-9 col-md-10'>
              <input value={this.state.textInput} className='form-control' type="text" placeholder="tarefa" onChange={this.handleChange} />
            </div>
            <div className='col-2'>
              <button className='btn-outline-success1 btn-settings ml-auto' type="input" >Adicionar</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default connect(
  null,
  { addTodo }
)(TodoInput)
