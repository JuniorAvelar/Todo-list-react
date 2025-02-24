import {  useState } from "react"

import Todo from "./Todo"

import "./AddTodo.css"

const AddTodo = ({ toogleModal ,  todos , setTodos}) => {

    const [inputValue , setInputValue] = useState("")

    const saveLocalStorage = (todo) => {
        // Recuperamos o array de tarefas salvas no localStorage.
        // Se não houver tarefas salvas, criamos um array vazio.
        // Recupera os todos já salvos no localStorage (ou inicia um array vazio)
        const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
        
        // Adiciona a nova tarefa ao array
        savedTodos.push(todo);
    
        // Salva o array atualizado no localStorage
        localStorage.setItem("todos", JSON.stringify(savedTodos));
    }

    const renderTodo = () => {
        if(!inputValue) return

        // pega o valor de inputValue e adiciona no array todo
        const newTodo = { id: Date.now(), title: inputValue, done: false }
        setTodos([...todos , newTodo])

        saveLocalStorage(newTodo)


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

    const handleEditTodo = (id, newTitle) => {
        setTodos(todos.map((todo) =>
          todo.id === id ? { ...todo, title: newTitle } : todo
        ));
      };

    return (
        <> 
            <div id="add-todo-container">
            <input value={inputValue} type="text" name="newTask" id="add-todo-input" placeholder="Adicionar uma nova tarefa" onChange={(e) => setInputValue(e.target.value)}/>
            <button onClick={renderTodo} className="add-todo-button"><i className="fa-solid fa-plus"></i></button>
            </div>
            <div className="todo-container">
                {todos.map((todo) => (
                    <Todo key={todo.id} title={todo.title} actionRemove={() => removeTodo(todo.id)} doneTodo={(e) => doneTodo(e , todo.id)} todo={todo} toogleModal={() => toogleModal(todo)} editTodo={() => handleEditTodo(todo.id)}   />    
                ))}
            </div>
        </>
    )
}

export default AddTodo