import React, { useContext, useState } from 'react'

import { ToDoContext } from '../context/ToDoContext';

export const ToDoForm = () => {
  const {state, dispatch} = useContext(ToDoContext);
  const [toDoText, setToDoText] = useState("")

  const onChange = e => {
    setToDoText(e.target.value)
    console.log(toDoText)
  }

  return(
    <div>
        <input 
        type="text"
        placeholder="Enter a to do!"
        name="todo"
        value={toDoText}
        onChange={onChange}/>
        <button onClick={()=> dispatch({type:"ADD_TODO", payload: toDoText})}>Submit To Do</button>
        <button onClick={()=> dispatch({type:"REMOVE_CHECKED"})}>Remove complete Todo's</button>
    </div>
  )}