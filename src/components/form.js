import React, { useState } from "react";
import Button from "@material-ui/core/Button";

export function Form(props) {
  const { onSave } = props;

  const [text, setText] = useState("");

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        placeholder="Número do Telefone"
        className="task-field"
        value={text || ""}
        onChange={(e) => setText(e.currentTarget.value)}
      />
      <Button
        className="save-button"
        variant="contained"
        color="primary"
        onClick={() => {
          setText("");
          onSave(text);
        }}
      >
        Salvar
      </Button>
    </form>
  );
}
