import React, { useState } from "react";
import "./styles.css";
import { Form } from "./components/form";
import List from "./components/list";

export default function App() {
  const [tasks, setTask] = useState([]);

  const addTask = task => {
    setTask([...tasks, task]);
  };

  const deleteTask = index => {
    let newTasks = [...tasks];
    newTasks.splice(index, 1)
    setTask(newTasks);
  };

  return (
    <div className="App">
      <Form onSave={addTask} />
      <List tasks={tasks} deleteTask = {deleteTask}/>
    </div>
  );
}


