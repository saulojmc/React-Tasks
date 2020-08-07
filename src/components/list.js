import React from "react";
import Button from "@material-ui/core/Button";

export default function List(props) {
  const { tasks } = props;

  return (
    <div className="tasks-list">
      {tasks.map((task, index) => {
        return (
          <div className="task-card" key={index}>
            <span className={task.isComplete ? "complete" : ""}>
              {task.task}
            </span>

            <div className="action">
              <Button
                variant="contained"
                onClick={() => props.deleteTask(index)}
              >
                Excluir
              </Button>
              <Button
                variant="contained"
                onClick={() => props.completeTask(index)}
              >
                Completar
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
