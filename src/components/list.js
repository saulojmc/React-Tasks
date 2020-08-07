import React from "react"

export default function List(props) {
  const { tasks } = props;

  return (
    <div className="tasks-list">
      {tasks.map(( task, index) => {
        return (
          <div className="task-card" key={index}>
            <span>{task}</span>

            <div className="action">
              <button onClick={() => props.deleteTask(index)}>Excluir</button>
              <button>Completa</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}