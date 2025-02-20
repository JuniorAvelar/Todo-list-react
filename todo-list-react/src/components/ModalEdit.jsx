import './ModalEdit.css'
import { useState } from 'react'

const ModalEdit = ({ toogleModal , oldTtitle ,  }) => {
    const [newValueInput , setNewValueInput]= useState(oldTtitle)
    console.log(newValueInput)

   
    return(
        <div className="modal-container hidde">
            <div className="modal-content">
                <h2>Editar tarefa</h2>
                <div className="input-control">
                    <input type="text" onChange={(e) => setNewValueInput(e.target.value)} value={newValueInput} />
                    <button><i className="fa-solid fa-check"></i></button>
                </div>
                <button  onClick={toogleModal} className='cancelar-button'>Cancelar</button>
            </div>
        </div>
    )
} 

export default ModalEdit