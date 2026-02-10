import React, { useEffect, useState } from "react";
import axios from "axios";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";
import.meta.env.VITE_API_URL


const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8001/api/tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const res = await axios.get(API_URL);
      setTasks(res.data);
      setError("");
    } catch {
      setError("Failed to load tasks");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  
    return (
      <div className="app-container">
        <h2>Todo List</h2>
        <TodoForm fetchTasks={fetchTasks} />
        <TodoList tasks={tasks} fetchTasks={fetchTasks} />
      </div>
    );
    
  
}

export default App;
