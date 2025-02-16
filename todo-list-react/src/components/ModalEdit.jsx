import './ModalEdit.css'
const ModalEdit = ({toogleModal}) => {
    return(
        <div className="modal-container hidde">
            <div className="modal-content">
                <h2>Editar tarefa</h2>
                <div className="input-control">
                    <input type="text" />
                    <button><i className="fa-solid fa-check"></i></button>
                </div>
                <button onClick={toogleModal} className='cancelar-button'>Cancelar</button>
            </div>
        </div>
    )
} 

export default ModalEdit