import React,{useState} from "react";
import { addNewTodo } from "../redux/actions";
import {useDispatch} from "react-redux"

 


const TodoForm= ()=>{
    const [text, setText]= useState("")

    const dispatch = useDispatch() //Dispatching our actions overhere 
    


    const handleSubmit =((e)=>{

        e.preventDefault()
        dispatch(addNewTodo(text))   //It calls addNewTodo

        setText("");


    });

   

    const handleChange= ((event)=>{
          setText(event.target.value)

    });

    return(

        <div>
            <form className="form" onSubmit={handleSubmit} >
                <input className="input" placeholder="Enter a new To-DO !"  onChange={handleChange} value={text}/>
                <button type="submit" >Add To-Do</button>                
            </form>
        </div>
        
    )
}

export default TodoForm;