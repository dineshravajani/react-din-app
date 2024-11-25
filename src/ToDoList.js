import React, { useState, useRef } from "react";
import "./TodoList.css"; // Importing the CSS file for styling

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editValue, setEditValue] = useState("");
  const inputRef = useRef(null);
  const editInputRef = useRef(null);

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleSubmit() {
    if (inputValue.trim()) {
      setTodos([...todos, inputValue.trim()]);
      setInputValue("");
      inputRef.current.focus();
    }
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      handleSubmit();
    }
  }

  function handleDelete(index) {
    setTodos(todos.filter((_, i) => i !== index));
  }

  function handleEdit(index) {
    setEditingIndex(index);
    setEditValue(todos[index]);
    setTimeout(() => {
      if (editInputRef.current) {
        editInputRef.current.focus(); // Focus on the edit input field
      }
    }, 0); // Allow DOM to update before focusing

  }

  function handleEditChange(event) {
    setEditValue(event.target.value);
  }

  function handleSave(index) {
    if (editValue.trim()) {
      const updatedTodos = [...todos];
      updatedTodos[index] = editValue.trim();
      setTodos(updatedTodos);
      setEditingIndex(null);
    } else {
      alert("Todo cannot be empty!");
    }
  }

  return (
    <div className="todo-container">
      <h1>ToDo List</h1>
      <div className="todo-input-container">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          ref={inputRef}
          onKeyDown={handleKeyDown}
          placeholder="Enter a task..."
        />
        <button className="add-btn" onClick={handleSubmit}>
          Add
        </button>
      </div>
      	{todos.length == 0 ? (<p className="no-todo-message">No todo are created</p>) : 
	  		(
				<ul className="todo-list">
				
				{todos.map((todo, index) => (
					<li key={index} className="todo-item">
					{editingIndex === index ? (
						<>
						<input
							type="text"
							value={editValue}
							onChange={handleEditChange}
							ref={editInputRef}
							className="edit-input"
						/>
						<button className="save-btn" onClick={() => handleSave(index)}>
							Save
						</button>
						</>
					) : (
						<>
						<span className="todo-text">{todo}</span>
						<button
							className="edit-btn"
							onClick={() => handleEdit(index)}
						>
							Edit
						</button>
						<button
							className="delete-btn"
							onClick={() => handleDelete(index)}
						>
							Delete
						</button>
						</>
					)}
					</li>
				))}
			</ul>
		)}

    </div>
  );
}

export default TodoList;
