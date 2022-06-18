import React from 'react'
import Todo from './Todo'
import './TodoItem.css'
function TodoItem(props) {
    // const [todo, setTodo] = useState(props.todos);
    // //if we delete it directly it will not render we need to use hooks in order to re render it when we delete it

    const removeItem = sno => {
        props.removeTodo(sno)

    }
    const todoList = props.todos.map(todo => <Todo {...todo} key={todo.sno} removeTodo={removeItem} />)
    //an object could be send like this
    return (
        <div className='todoitem'>
            {props.todos.length === 0 ? <h1 className='text-center mb-3  mt-3 text-danger'>No todos to display</h1> :
                <>
                    <h1 className='text-center mb-3 text-dark mt-3 '>Todo's List..</h1>
                    {todoList}
                </>
            }
        </div>
    )
}

export default TodoItem