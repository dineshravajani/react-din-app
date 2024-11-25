import React, { useState, useRef } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);  // Create a ref for the input element


  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleSubmit() {
    if (inputValue.trim()) {
      setTodos([...todos, inputValue.trim()]);
      setInputValue('');
      inputRef.current.focus();  // Focus on the input element after adding a todo
    }
  }
  // Handle Enter key press to add todo
  function handleKeyDown(event) {
    if (event.key === 'Enter') {
       handleSubmit();
    }
}

  function handleDelete(index) {
    setTodos(todos.filter((_, i) => i !== index));
  }

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} ref={inputRef} onKeyDown={handleKeyDown}  />
      <button onClick={handleSubmit}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
