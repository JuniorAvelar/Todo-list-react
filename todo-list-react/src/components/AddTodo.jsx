import {  useState } from "react"
import Todo from "./todo"

import "./AddTodo.css"

const AddTodo = ({toogleModal}) => {
    // const modal = document.querySelector(".modal-container")

    const [inputValue , setInputValue] = useState("")

    // recebe um array vazio
    const [todos , setTodos] = useState([])

    

    const renderTodo = () => {
        if(!inputValue) return

        // pega o valor de inputValue e adiciona no array todo
        setTodos([...todos , inputValue])
        setInputValue("")
    }

    const removeTodo = (i) => {
        // filtra o array de todos , e retorna um array sem todo que foi removido
        setTodos(todos.filter((_ , index) => index !== i))
    }

    const doneTodo = (e , i) => {
      const todoElment = e.target.closest(".todo")
      todoElment.classList.toggle("done")
    }

    return (
        <> 
            <div id="add-todo-container">
            <input value={inputValue} type="text" name="newTask" id="add-todo-input" placeholder="Adicionar uma nova tarefa" onChange={(e) => setInputValue(e.target.value)}/>
            <button onClick={renderTodo} className="add-todo-button"><i className="fa-solid fa-plus"></i></button>
            </div>
            <div className="todo-container">
                {todos.map((todo, index) => (
                    <Todo key={index} title={todo} actionRemove={() => removeTodo(index)} doneTodo={(e) => doneTodo(e, index)} toogleModal={toogleModal}  />    
                ))}
            </div>
        </>
    )
}

export default AddTodo