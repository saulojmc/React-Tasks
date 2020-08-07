import React, { useState, useEffect } from "react";
import "./styles.css";
import { Form } from "./components/form";
import List from "./components/list";

export default function App() {
  const [tasks, setTask] = useState();

  const addTask = (task) => {
    const newTask = {
      task,
      isComplete: false
    };

    const newTasks = [...(tasks || []), newTask];
    setTask(newTasks);
    saveTasks(newTasks);
  };

  const deleteTask = (index) => {
    let newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTask(newTasks);
    saveTasks(newTasks);
  };

  const togleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].isComplete = !newTasks[index].isComplete;
    setTask(newTasks);
    saveTasks(newTasks);
  };

  const saveTasks = (tasksToSave) => {
    localStorage.setItem("tasks", JSON.stringify(tasksToSave));
  };

  const loadTasks = () => {
    const loadedTasks = JSON.parse(localStorage.getItem("tasks"));
    return loadedTasks;
  };

  useEffect(() => {
    if (tasks) {
      saveTasks(tasks);
    }
  }, [tasks]);

  useEffect(() => {
    const loadedTasks = loadTasks();
    setTask(loadedTasks);
  }, []);

  return (
    <div className="App">
      <Form onSave={addTask} />
      {tasks ? (
        <List
          tasks={tasks}
          deleteTask={deleteTask}
          completeTask={togleComplete}
        />
      ) : null}
    </div>
  );
}
