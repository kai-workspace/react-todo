{/*}
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
*/}

import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import TodoList from './TodoList'; // Import TodoList
import AddTodoForm from './AddTodoForm'; // Import AddTodoForm


/*
const todoList = [
  { id: 1, title: "Complete assignment 1" },
  { id: 2, title: "Complete assignment 2" },
  { id: 3, title: "Complete assignment 3" }
]; // Empty array to store todo items
*/


function App() {
  //const [count, setCount] = useState(0)

  //return null; // or <></> for an empty fragment

  return (
    <>
      <h1>Todo List</h1>
      
      <TodoList /> {/* Use the TodoList component */}
      <AddTodoForm /> {/* Use the AddTodoForm component */}
      {/*
      <ul>
        
        {todoList.map(todo => (
            <li key={todo.id}>{todo.title}</li>
          ))}
      </ul>
        */}
    </>
  );

  /* remove JSX from the "App" component in src/App.jsx file
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
*/

}


export default App;