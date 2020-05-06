import React from 'react'
import TodoInput from './todoInput'
import Task from './Tasks'
import './todoListStyle.css'
import { connect } from 'react-redux'
import { removeTodo, toggleComplete, updateDisplay } from '../../actions/index'
import TimerSetter from '../pomodoro/TimerSettings.js'

class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.updateDisplayStatus = this.updateDisplayStatus.bind(this);
  }

  updateDisplayStatus(string) {
    this.props.updateDisplay(string)
  }

  render() {
    const buttons = [{ id: 'all', label: 'Todos' }, { id: 'completed', label: 'Feitos' }, { id: 'active', label: 'Ativos' }]

    let filteredList = this.props.display === "all" ? this.props.todo
      : this.props.display === "completed" ? this.props.todo.filter(element => element.complete)
        : this.props.todo.filter(element => !element.complete)

    let ListDisplay = filteredList.map((element) => (
      <Task
        key={element.id}
        text={element.text}
        check={() => { this.props.toggleComplete(element.id) }}
        remove={() => { this.props.removeTodo(element.id) }}
        complete={element.complete}
        selected={element.selected}
      />
    ))

    let navButtons = buttons.map((element) => (
      <button
        key={element.id}
        className={
          this.props.display === element.id ? 'btn-outline-success1 btn-settings selected'
            : 'btn-outline-success1 btn-settings'}
        onClick={() => { this.props.updateDisplay(element.id) }}
      >
        {element.label}
      </button>
    ))
    return (
      <div className='container todo-settings-wrapper mt-1 pb-5'>

        <div className='row'>
          
          <div className='container mt-4 col-12 col-md-8 ml-auto todo-wrapper'>
            <div className='text-center pt-3 header1'><h2>Lista de Tarefas</h2></div>
            <TodoInput
              className='mt-3'
            />
            <div className='list-nav-buttons'>
              {navButtons}
            </div>
            <div className="list container mt-3">
              {ListDisplay}
            </div>
          </div>

          <div className='container mt-4 col-12 col-md-4 ml-auto'>
            <h2 className='text-center text-head'>Configurações</h2>
            <div className='mt-4'>

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
      </div>
    )
  }
}

const mapStateToProps = state => {
  const todo = state.todoList.todos
  const display = state.todoList.display
  return { todo, display };
};


export default connect(mapStateToProps, { removeTodo, toggleComplete, updateDisplay })(TodoList);