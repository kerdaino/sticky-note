import React from "react";

const Notes = (props) => {
  const updateTitle = (e) => {
    const updatedValue = e.target.value;
    const editMeId = props.notes.id;
    props.onType(editMeId, "title", updatedValue);
  };

  const updateDecription = (e) => {
    const updatedValue = e.target.value;
    const editMeId = props.notes.id;
    props.onType(editMeId, "description", updatedValue);
  };
  return (
    <li className="note">
      {/* {console.log(props)} */}
      <input
        type="text"
        placeholder="Title"
        className="note__title"
        value={props.notes.title}
        onChange={updateTitle}
      />
      <textarea
        placeholder="Description..."
        className="note__description"
        value={props.notes.description}
        onChange={updateDecription}
        // onChange={updateTitle}
      />
      <span className="note__delete">X</span>
    </li>
  );
};

export default Notes;
