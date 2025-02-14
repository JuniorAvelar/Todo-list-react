import "./Todo.css"
const Todo = ({title , action} ) =>{
    return (
        <div id="todo-container">
            <div className="todo">
                <h3>{title}</h3>
                <div className="icon-control">
                    <i className="fa-solid fa-check"></i>
                    <i className="fa-duotone fa-solid fa-pen-to-square"></i>
                    <i className="fa-duotone fa-solid fa-trash-can"></i>
                </div>
            </div>
        </div>
    )
}

export default Todo