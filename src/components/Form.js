import React from 'react'

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {

    const inputTextHandler = (e) => {
        // console.log(e.target.value);
        setInputText(e.target.value)
    }
    const submitTodoHandler = (e) => {
        // Evita el refresh
        e.preventDefault()
        setTodos([
            ...todos, 
            {
                text: inputText,
                completed: false,
                id: Math.random() * 1000
            }
        ])
        // Borra el texto del input
        setInputText('')
    }

    const statusHandler = (e) => {
        // console.log(e.target.value)
        setStatus(e.target.value)
    }

    return (
        <form>
            <input type="text" className="todo-input" onChange={inputTextHandler} value={inputText} placeholder="Inserte una tarea"/>
            <button className="todo-button" type="submit" onClick={submitTodoHandler}>
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select" onChange={statusHandler}>
                <select name="todos" className="filter-todo">
                    <option value="all">Todos</option>
                    <option value="completed">Terminados</option>
                    <option value="uncompleted">Sin Terminar</option>
                </select>
            </div>
        </form>
    )
}

export default Form
