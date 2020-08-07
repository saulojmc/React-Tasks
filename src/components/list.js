import React from "react";
import Button from "@material-ui/core/Button";

export default function List(props) {
  const { tasks } = props;

  return (
    <div className="tasks-list">
      {tasks.map((task, index) => {
        return (
          <li key={index}>
            <div className="task-card">
              <span className={task.isComplete ? "complete" : ""}>
                {task.task}
              </span>

              <div className="action">
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => props.deleteTask(index)}
                >
                  Excluir
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => props.completeTask(index)}
                >
                  Completar
                </Button>
              </div>
            </div>
          </li>
        );
      })}
    </div>
  );
}
