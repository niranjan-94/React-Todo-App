import React, { useState } from "react";
import ShowTodos from "./ShowTodos";

function Todo() {
    const [task,setTask] = useState("add some task")
    const [data,setData] = useState([])

    const taskHandler = (e) => {
        setTask(e.target.value)
    }

    const submitHandler= (e) => {
        e.preventDefault();
        const newData = task;
        setData([...data,newData])

        setTask("")
    }

    const deleteTask = (a) => {
        const finalTasks = data.filter((element,index) =>{
            return index != a;
        })
        setData(finalTasks)
    }


    return(
        <div className="main">
            <div className="todo">

                <div className="top-container">
                <div className="header">
                    <h3>Todo App</h3>
                </div>
                <div className="input-div">
                    <form onSubmit={submitHandler} className="form">
                        <input id="todo-input" type="text" className="todo-input" value={task} onChange={taskHandler}/>
                        <button type="submit" className="input-button">Add todo</button>
                    </form>
                </div>
                </div>

                <div className="bottom-container">
                {
                    data.map((value,index) => {
                    return <ShowTodos
                        key={index}
                        id = {index}
                        task = {value}
                        onSelect = {deleteTask}
                        />
                    })
                }
                </div>
                
            </div>
        </div>
    )
}

export default Todo