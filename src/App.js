import React from 'react';
import PomodoroClock from './components/pomodoro/PomodoroApp.js';
import TodoList from './components/toDoList/TodoListApp'
import './App.css';

function App() {
  return (
    <div>
      <div className= 'global-container'>
        <PomodoroClock />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
