import './ModalEdit.css'
const ModalEdit = () => {
    return(
        <div className="modal-container">
            <div className="modal-content">
                <h2>Editar tarefa</h2>
                <div className="input-control">
                    <input type="text" />
                    <button><i className="fa-solid fa-check"></i></button>
                </div>
                <button className='cancelar-button'>Cancelar</button>
            </div>
        </div>
    )
} 

export default ModalEdit