import React, { useState } from "react";

const TodoItem = ({ task, index, toggleTask }) => {
  return (
    <div>
      <input 
        type="checkbox" 
        onChange={() => toggleTask(index)}
      />
      {task}
    </div>
  );
};

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = { 
      ...updatedTasks[index], 
      completed: !updatedTasks[index].completed 
    };
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <form onSubmit={addTask}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button type="submit">Tambah Tugas</button>
      </form>
      <div>
        {tasks.map((task, index) => (
          <TodoItem key={index} index={index} task={task.text} toggleTask={toggleTask} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;