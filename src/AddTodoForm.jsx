import React from 'react';

// Declare a function named AddTodoForm
function AddTodoForm() {
  // Add a multi-line return statement with the form JSX
  return (
    <form>
      <label htmlFor="todoTitle">Title</label>
      <input type="text" id="todoTitle" />
      <button type="submit">Add</button>
    </form>
  );
}

// Export AddTodoForm function as default module
export default AddTodoForm;

