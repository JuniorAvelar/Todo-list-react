
import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Header from "./components/Header"
import ModalEdit from './components/ModalEdit'
import Todo from './components/todo'


function App() {
  const [modal , setModal] = useState(false)
  const [oldTtitle , setOldTtitle] = useState('')


  const toogleModal = (e) => {
    if(e.target.closest(".todo")) {
      const getTodo = e.target.closest(".todo")
      const title = getTodo.querySelector("h3").textContent
       setOldTtitle(title)

      setModal(!modal)
    }
    else{
      setModal(!modal)
    }
  

  }
    
  return (
    <div>
      <Header/>
      <AddTodo toogleModal={toogleModal}/>
      {/*  Quando modal é true , O modal é renderizado! */}
        {modal && <ModalEdit toogleModal={toogleModal} oldTtitle={oldTtitle}/>}
    </div>
  )
}

export default App
