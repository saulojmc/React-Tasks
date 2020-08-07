import React, { useState } from "react";
import "./styles.css";
import { Form } from "./components/form";
import List from "./components/list";

export default function App() {
  const [tasks, setTask] = useState([]);

  const addTask = (task) => {
    const newTask = {
      task,
      isComplete: false
    };
    setTask([...tasks, newTask]);
  };

  const deleteTask = (index) => {
    let newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTask(newTasks);
  };

  const togleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].isComplete = !newTasks[index].isComplete;
    setTask(newTasks);
  };

  return (
    <div className="App">
      <Form onSave={addTask} />
      <List
        tasks={tasks}
        deleteTask={deleteTask}
        completeTask={togleComplete}
      />
    </div>
  );
}
