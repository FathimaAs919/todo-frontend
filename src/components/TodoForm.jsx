import React, { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:8001/api/tasks";

function TodoForm({ fetchTasks }) {
  const [title, setTitle] = useState("");

  const addTask = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    await axios.post(API_URL, { title });
    setTitle("");
    fetchTasks();
  };

  return (
    <form className="todo-form" onSubmit={addTask}>
      <input
        type="text"
        placeholder="Add a new task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
