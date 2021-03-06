import React, { useState, useEffect } from 'react'
import Form from './components/Form'
import TodoList from './components/TodoList';
import './App.css';

function App() {
  // States
  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('all')
  const [filtered, setFiltered] = useState([])
  // Functions
  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFiltered(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFiltered(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFiltered(todos)
        break;
    }
  }

  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }
  
  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]))
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'))
      setTodos(todoLocal)
    }
  }

  useEffect(() => {
    getLocalTodos()
  }, [])
  useEffect(() => {
    filterHandler()
    saveLocalTodos()
  }, [todos, status])

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} setStatus={setStatus} />
      <TodoList todos={todos} setTodos={setTodos} filtered={filtered} />
    </div>
  );
}

export default App;
