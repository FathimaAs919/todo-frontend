import React from "react";
import axios from "axios";
import.meta.env.VITE_API_URL

// src/App.jsx or TodoForm.jsx
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8001/api/tasks";


function TodoItem({ task, fetchTasks }) {

  const toggleComplete = async () => {
    await axios.put(`${API_URL}/${task.id}`, {
      title: task.title,
      completed: !task.completed,
    });
    fetchTasks();
  };

  const deleteTask = async () => {
    await axios.delete(`${API_URL}/${task.id}`);
    fetchTasks();
  };

  return (
    <li className={`todo-item ${task.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={toggleComplete}
      />
      <span>{task.title}</span>
      <button onClick={deleteTask}>✕</button>
    </li>
  );
}

export default TodoItem;
