import React, { useState } from "react";

export function Form(props) {
  const { onSave } = props;

  const [text, setText] = useState("");

  return (
    <form onSubmit={e => e.preventDefault()}>
      <input
        placeholder="Número do Telefone"
        className="task-field"
        value = {text || ""}
        onChange={e => setText(e.currentTarget.value)}
      />
      <button className="save-button" 
      onClick={() => {
        setText("");
        onSave(text);
      }}>
        Salvar
      </button>
    </form>
  );
}