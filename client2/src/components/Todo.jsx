import React from 'react';
import { useDispatch } from 'react-redux';
import { toogleTodo,updateTodo, deleteTodo} from '../redux/actions/index.js';
import { useState } from 'react';



const Todo = ({todo}) => {

 const [editing, setEditing] = useState(false)
 const [text, setText] = useState(todo?.data);

 const dispatch = useDispatch();

 const onFormSubmit = (e) => {
     e.preventDefault();

     setEditing(prevState => !prevState);

     dispatch(updateTodo(todo._id,text));
 }


  return (

    <li 
    className="task"
            onClick={() => dispatch(toogleTodo(todo._id))}
            style={{
                textDecoration: todo?.done ? 'line-through' : '',
                color: todo?.done ? '#bdc3c7' : '#34495e'
            }}
            data-testid="todo-test"
  >
        <span style={{display: editing ? 'none': ''}}>{todo.data}</span>

        <form style={{ display: editing ? 'inline' : 'none' }}
                onSubmit={onFormSubmit}
            >
                <input
                    type="text"
                    value={text}
                    className="edit-todo"
                    onChange={(e) => setText(e.target.value)}
                />
            </form>

        <span className='icons' onClick={()=>{dispatch(deleteTodo(todo._id))}}>
          <i className='fas fa-trash ' />
        </span>

        <span className='icons' onClick={()=>{setEditing(!editing)}}>
          <i className='fas fa-pen' />
        </span>

    </li>

  )
}

export default Todo;

