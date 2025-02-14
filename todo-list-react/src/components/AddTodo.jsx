import {  useState } from "react"
import Todo from "./todo"

import "./AddTodo.css"

const AddTodo = () => {

    const [inputValue , setInputValue] = useState("")
    const [todos , setTodos] = useState([])

    const renderTodo = () => {

        setTodos([...todos , inputValue])

        setInputValue("")
    }



    return (
        <> 
        <div id="add-todo-container">
           <input value={inputValue} type="text" name="newTask" id="add-todo-input" placeholder="Adicionar uma nova tarefa" onChange={(e) => setInputValue(e.target.value)}/>
           <button onClick={renderTodo} className="add-todo-button"><i className="fa-solid fa-plus"></i></button>
        </div>
        <div className="todo-container">
            {todos.map((todo, index) => (
                <Todo key={index} title={todo}/>    
            ))}
        </div>
        </>
    )
}

export default AddTodo