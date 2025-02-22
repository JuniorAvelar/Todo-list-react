
import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Header from "./components/Header"
import ModalEdit from './components/ModalEdit'


function App() {

  // recebe um array vazio
  const [todos , setTodos] = useState([])

  const [modal , setModal] = useState(false) // gerencia o modal

  const [editingTodo, setEditingTodo] = useState(null); // Armazena o todo que está sendo editado


  const toogleModal = (todo) => {
    // estou usando o toggle modal para pegar o elemento que vai ser aditado 
      setEditingTodo(todo)
      
      // muda o estado do modal, dependendo se ele for false ou true
      setModal(!modal)
  }
    
  return (
    <div>
      <Header/>
      <AddTodo toogleModal={toogleModal} todos={todos} setTodos={setTodos} />
      {/*  Quando modal é true , O modal é renderizado! */}
        {modal && <ModalEdit toogleModal={toogleModal} editingTodo={editingTodo} todos={todos} setTodos={setTodos} />}
    </div>
  )
}

export default App
