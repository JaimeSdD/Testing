import React from "react";

const Note = ({ note, toggleImportance }) => {
  const text = note.important ? "make unimportant" : "make important";

  return (
    <li>
      <div>{note.content}</div>
      <button onClick={toggleImportance}> {text} </button>
    </li>
  );
};

export default Note;
