import {  useState } from "react"

import Todo from "./Todo"

import "./AddTodo.css"

const AddTodo = ({ toogleModal ,  todos , setTodos}) => {

    const [inputValue , setInputValue] = useState("")


    const getTodosLocalStorage = () => {
        const todoList = JSON.parse(localStorage.getItem("todos") || [])
        return todoList
      }


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

        const todosLocalStorage = JSON.parse(localStorage.getItem("todos") || [])
        // Filtra o array de tarefas salvas no localStorage para remover a tarefa pelo ID.
        const todo = todosLocalStorage.filter((item) => item.id !== id)
        // atualiza o localStorage apos a exclusão da tarefa 
        localStorage.setItem("todos" , JSON.stringify(todo))
    }

    const doneTodo = (id) => {
      // todo.id === id → Verifica se o ID da tarefa é igual ao ID clicado.
      // { ...todo } → Cria uma cópia da tarefa para não modificar o original.  
      setTodos(todos.map((todo) => todo.id === id ? {...todo , done:!todo.done} : todo))

      // atualiza a tarefa no local storage se ela esta feita ou não
      const getTodosLocalStorage = JSON.parse(localStorage.getItem("todos") || [])
      const todosAtualizado =  getTodosLocalStorage.map((item) => item.id === id ? { ...item , done: !item.done } : item)
      localStorage.setItem("todos" , JSON.stringify(todosAtualizado))
    }

    const handleEditTodo = (id, newTitle) => {
        setTodos(todos.map((todo) =>
          todo.id === id ? { ...todo, title: newTitle } : todo
        ));

      // altera o title da tarefa no localStorage
      const getTodosLocalStorage = JSON.parse(localStorage.getItem("todos"))
      const todosAtualizado =  getTodosLocalStorage.map((todo) => todo.id === id ? {...todo , title: newTitle } : todo )
      localStorage.setItem("todos" , JSON.stringify(todosAtualizado))
      
      console.log(todosAtualizado)

      }

    return (
        <> 
            <div id="add-todo-container">
            <input value={inputValue} type="text" name="newTask" id="add-todo-input" placeholder="Adicionar uma nova tarefa" onChange={(e) => setInputValue(e.target.value)}/>
            <button onClick={renderTodo} className="add-todo-button"><i className="fa-solid fa-plus"></i></button>
            </div>
            <div className="todo-container">
                {todos.map((todo) => (
                    <Todo key={todo.id} title={todo.title} actionRemove={() => removeTodo(todo.id)} doneTodo={() => doneTodo(todo.id)} todo={todo} toogleModal={() => toogleModal(todo)} editTodo={() => handleEditTodo(todo.id)}   />    
                ))}
            </div>
        </>
    )
}

export default AddTodo