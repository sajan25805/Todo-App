import axios from "axios";
import { ADDNEW_TODO, GETALL_TODO, TOOGLE_TODO, UPDATE_TODO, DELETE_TODO } from "./type";


const url="http://localhost:3007/api/todo";

export const addNewTodo = (data)=>async(dispatch)=>{
    try{

      const response=  await axios.post("http://localhost:3007/api/todo/post",{data})

      dispatch({type:ADDNEW_TODO,payload:response?.data});   //Dispatch has two thing that is type and payload

    }

    catch(error){

        console.log(`Error while adding post`,error.message);
      }
    }


  export  const getAllTodos = ()=>async(dispatch)=>{
      try{
            
        const response =  await axios.get(`${url}/all`)
        dispatch({type:GETALL_TODO, payload:response?.data?.data})
    
      }
    
      catch(error) {
        console.log(`Error while loading todo list `,error.message);
      }
           
    }   

    
    export  const toogleTodo = (id)=>async(dispatch)=>{

      try{
            
        const response =  await axios.get(`${url}/${id}`)
        dispatch({type:TOOGLE_TODO, payload:response?.data})
      }
    
      catch(error) {
        console.log(`Error while changing todo status`,error.message);
      }
           
    }  

    export const updateTodo = (id, data) => async (dispatch) => {
      try {
          const response = await axios.put(`http://localhost:3007/api/todo/update/${id}`, { data });
  
          dispatch({ type: UPDATE_TODO , payload: response.data });
      } catch (error) {
          console.log('Error while calling updateTodo API ', error.message);
      }
  }

  export const deleteTodo= (id)=> async (dispatch) => {
    try{

      const response= await axios.delete(`${url}/delete/${id}`);

      dispatch( {type: DELETE_TODO, payload: response.data});

    }

    catch(error) {
      console.log('Error wWhile deleting Todo: ', error.message);
    }
  }
    
    
    
    