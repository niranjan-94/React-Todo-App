import React from "react";


function ShowTodos(props) {
    return(
        <div className="show-todo">
            <div className="todo-box">
                <div className="todo-text">
                    <h6>{props.task}</h6>
                </div>
                <div className="delete-button">
                    <button onClick ={ () => {
                        props.onSelect(props.id)
                    }}
                    >X</button>
                </div>
            </div>

        </div>
    )
}

export default ShowTodos