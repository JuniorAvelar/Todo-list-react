import './ModalEdit.css'
import { useState } from 'react'

const ModalEdit = ({ toogleModal, editingTodo , todos , setTodos }) => {

    // estou usando o toggle modal para pegar o elemento que vai ser aditado 
    const [newValueInput , setNewValueInput] = useState(editingTodo.title || "")

        const todoEdit = () => {
            setTodos(
                todos.map((todo) => todo.id === editingTodo.id ? { ...todo , title: newValueInput } : todo)        
            )
            toogleModal()
        }
   
    return(
        <div className="modal-container ">
            <div className="modal-content">
                <h2>Editar tarefa</h2>
                <div className="input-control">
                    <input type="text" onChange={(e) => setNewValueInput(e.target.value)} value={newValueInput} />
                    <button onClick={todoEdit}><i className="fa-solid fa-check"></i></button>
                </div>
                <button  onClick={toogleModal} className='cancelar-button'>Cancelar</button>
            </div>
        </div>
    )
} 

export default ModalEdit