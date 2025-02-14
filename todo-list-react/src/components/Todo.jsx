import "./Todo.css"
const Todo = ({title , action} ) =>{
    return (
        <div id="todo-container">
            <div className="todo">
                <h3>{title}</h3>
                <div className="icon-control">
                    <button><i className="fa-solid fa-check"></i></button>
                    <button><i className="fa-duotone fa-solid fa-pen-to-square"></i></button>
                    <button><i className="fa-duotone fa-solid fa-trash-can"></i></button>
                </div>
            </div>
        </div>
    )
}

export default Todo