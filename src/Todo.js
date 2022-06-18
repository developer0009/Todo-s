import React from 'react'

function Todo(props) {
    const cssStyle =
    {
        width: "30vw",
        textAlign: "center",
    }
    const handleClick = evt => {
        props.removeTodo(props.sno)
    }
    return (
        <div className='border-bottom my-2 mx-auto' style={
            cssStyle
        }>
            <h3>{props.todoTitle}</h3>
            <p>{props.todoDescription}</p>
            <button className='btn btn-danger btn-sm mb-3' style={
                {
                    display: "block",
                    margin: "0 auto",
                }
            } onClick={handleClick}>delete</button>
        </div>
    )
}

export default Todo