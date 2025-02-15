
import './App.css'
import AddTodo from './components/AddTodo'
import Header from "./components/Header"
import ModalEdit from './components/ModalEdit'
import Todo from './components/todo'


function App() {

  return (
    <div>
      <Header/>
      <AddTodo/>
      <ModalEdit/>
  
    </div>
  )
}

export default App
