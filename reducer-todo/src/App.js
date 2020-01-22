import React, { useReducer } from 'react';

import { ToDoList } from './components/TodoList'
import { ToDoForm } from './components/ToDoForm'

import { ToDoContext } from './context/ToDoContext'

import { initialState, reducerThing } from './reducers/reducer'

import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducerThing, initialState);

  return (
    <div className="App">
      <ToDoContext.Provider value={{state, dispatch}}>
      <header className="App-header">
        <ToDoForm />
        <ToDoList />
      </header>
      </ToDoContext.Provider>
    </div>
  );
}

export default App;
