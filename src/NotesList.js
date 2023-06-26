import React from "react";
import Notes from "./Notes";

const Notelist = (props) => {
  const showSearchMatch = (note) => note.doesMatchSearch;
  const searchMatch = props.notes.filter(showSearchMatch);
  const renderNote = (note) => (
    <Notes onType={props.onType} notes={note} key={note.id} />
  );
  const noteElements = searchMatch.map(renderNote);
  return <ul className="notes-list">{noteElements}</ul>;
};

export default Notelist;
