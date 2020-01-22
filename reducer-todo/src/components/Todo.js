import React, { useContext } from 'react'

import { ToDoContext } from '../context/ToDoContext'

import './Todo.css'

export const ToDo = (props) => {
  console.log(props)
  return(
    <div>{props.todo}</div>
  )}