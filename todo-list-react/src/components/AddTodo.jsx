import {  useState } from "react"

import Todo from "./todo"

import "./AddTodo.css"

const AddTodo = ({ toogleModal }) => {

    const [inputValue , setInputValue] = useState("")

    // recebe um array vazio
    const [todos , setTodos] = useState([])

    const renderTodo = () => {
        if(!inputValue) return

        // NOVA LOGICA 
        // pega o valor de inputValue e adiciona no array todo
        const newTodo = { id: Date.now(), title: inputValue, done: false }
        setTodos([...todos , newTodo])

        setInputValue("")
    }

    const removeTodo = (id) => {
        // filtra o array de todos , e retorna um array sem todo que foi removido
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const doneTodo = (e , id) => {
        // todo.id === id → Verifica se o ID da tarefa é igual ao ID clicado.
        // { ...todo } → Cria uma cópia da tarefa para não modificar o original.
      setTodos(todos.map((todo) => todo.id === id ? {...todo , done:!todo.done} : todo))
      console.log(todos)
    }

    const editTodo = (id) => {
        const element = todos.find((item) => item.id === id)
        console.log(element)
    }
    

    return (
        <> 
            <div id="add-todo-container">
            <input value={inputValue} type="text" name="newTask" id="add-todo-input" placeholder="Adicionar uma nova tarefa" onChange={(e) => setInputValue(e.target.value)}/>
            <button onClick={renderTodo} className="add-todo-button"><i className="fa-solid fa-plus"></i></button>
            </div>
            <div className="todo-container">
                {todos.map((todo) => (
                    <Todo key={todo.id} title={todo.title} actionRemove={() => removeTodo(todo.id)} doneTodo={(e) => doneTodo(e , todo.id)} todo={todo} toogleModal={toogleModal} editTodo={() => editTodo(id)}   />    
                ))}
            </div>
        </>
    )
}

export default AddTodo