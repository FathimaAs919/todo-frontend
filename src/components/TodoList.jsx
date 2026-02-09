import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ tasks, fetchTasks }) {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <TodoItem key={task.id} task={task} fetchTasks={fetchTasks} />
      ))}
    </ul>
  );
}

export default TodoList;
