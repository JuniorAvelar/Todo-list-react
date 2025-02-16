
import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Header from "./components/Header"
import ModalEdit from './components/ModalEdit'
import Todo from './components/todo'


function App() {
  const [modal , setModal] = useState(false)

  const toogleModal = () => {
    setModal(!modal)
  }
    
  return (
    <div>
      <Header/>
      <AddTodo toogleModal={toogleModal}/>
      {modal && <ModalEdit toogleModal={toogleModal}/>}
      {modal && <ModalEdit toogleModal={toogleModal}/>}
  
    </div>
  )
}

export default App
