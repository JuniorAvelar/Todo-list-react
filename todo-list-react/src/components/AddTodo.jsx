import {  useState } from "react"
import Todo from "./todo"

import "./AddTodo.css"

const AddTodo = () => {

    const [inputValue , setInputValue] = useState("")

    // recebe um array vazio
    const [todos , setTodos] = useState([])

    const renderTodo = () => {
        // adiciona um novo todo no array
        setTodos([...todos , inputValue])

        setInputValue("")
    }

    const removeTodo = (i) => {
        console.log(i)

        setTodos(todos.filter((_ , index) => index !== i))
    }

    const doneTodo = (i) => {

    }

    return (
        <> 
        <div id="add-todo-container">
           <input value={inputValue} type="text" name="newTask" id="add-todo-input" placeholder="Adicionar uma nova tarefa" onChange={(e) => setInputValue(e.target.value)}/>
           <button onClick={renderTodo} className="add-todo-button"><i className="fa-solid fa-plus"></i></button>
        </div>
        <div className="todo-container">
            {todos.map((todo, index) => (
                <Todo key={index} title={todo} actionRemove={() => removeTodo(index)}/>    
            ))}
        </div>
        </>
    )
}

export default AddTodo