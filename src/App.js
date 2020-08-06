import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [tasks, setTask] = useState([]);

  const addTask = task => {
    setTask([...tasks, task]);
  };

  return (
    <div className="App">
      <Form onSave={addTask} />
      <List tasks={tasks} />
    </div>
  );
}

export function Form(props) {
  const { onSave } = props;

  const [text, setText] = useState("");

  return (
    <div>
      <input
        placeholder="Digite o texto da Tarefa"
        className="task-field"
        onChange={e => setText(e.currentTarget.value)}
      />
      <button className="save-button" onClick={() => onSave(text)}>
        Salvar
      </button>
    </div>
  );
}

export function List(props) {
  const { tasks } = props;

  return (
    <div className="tasks-list">
      {tasks.map(task => {
        return (
          <div className="task-card">
            <span>{task}</span>

            <div className="action">
              <button>Excluir</button>
              <button>Completa</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
