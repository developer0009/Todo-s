import React, { useState } from 'react'

function AddTodo(props) {
    const [todoTitle, setTodoTitle] = useState("")
    const [todoDescription, setTodoDesc] = useState("")
    const handleSubmit = evt => {
        evt.preventDefault()
        if (!todoTitle || !todoDescription) {
            alert("please make sure fields are not empty!!!")
        }
        else {
            props.addTodo({ todoTitle, todoDescription });
            setTodoTitle("");
            setTodoDesc("")
        }

    }
    return (
        <div className='mx-auto' style={
            {
                width: "35vw"
            }
        }>
            <h1 className='fs-2 mb-3'>Add Todo</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="todotitle" className="form-label">Todo Title</label>
                    <input type="text" className="form-control" id="todotitle" aria-describedby="todotitle" placeholder='enter todo title' value={todoTitle}
                        onChange={(evt) => { setTodoTitle(evt.target.value) }} />
                    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div className="mb-3">
                    <label htmlFor="todo description" className="form-label">Todo Description</label>
                    <input type="text" className="form-control" id="todo description" placeholder='enter todo description' value={todoDescription}
                        onChange={(evt) => { setTodoDesc(evt.target.value) }} />
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
        </div>
    )
}

export default AddTodo