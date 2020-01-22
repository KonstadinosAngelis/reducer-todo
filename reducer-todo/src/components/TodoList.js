import React, { useContext } from 'react'

import { ToDoContext } from '../context/ToDoContext'
import { ToDo } from './Todo'

export const ToDoList = () => {
  const { state, dispatch } = useContext(ToDoContext)

  return(
    <div>
    {state.map(todo => (
      <div className={`todo${todo.completed ? ' completed' : ''}`} onClick={()=> dispatch({type:'TOGGLE_TODO', payload: todo.id})}>
      <ToDo key={todo.id} todo={todo.item} completed={todo.completed}/>
      </div>
    ))}
    </div>
  )}