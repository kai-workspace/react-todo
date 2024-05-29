import React from 'react';

//declare a function named TodoList
function TodoList() {

  // Move todoList array here
const todoList = [
    { id: 1, title: "Complete assignment 1" },
    { id: 2, title: "Complete assignment 2" },
    { id: 3, title: "Complete assignment 3" }
  ];
  
  // add a multi-line return statement with the list JSX
  return (
    <ul>
      {todoList.map(todo => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}

//export TodoList function as default module
export default TodoList;
