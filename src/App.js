import React, { Component } from "react";
import Header from "./Header";
import Notelist from "./NotesList";

class App extends Component {
  state = {
    notes: [
      {
        id: Date.now(),
        title: "",
        description: "",
        doesMatchSearch: true
      }
    ],
    searchText: ""
  };

  addNote = () => {
    // create a new note
    const newNote = {
      id: Date.now(),
      title: "",
      description: "",
      doesMatchSearch: true
    };
    // add new note to existing notes array in state
    this.setState({ notes: [newNote, ...this.state.notes] });
  };

  onType = (editMeId, updatedButton, updatedValue) => {
    // editMeId == id of the note edited
    // updatedButton == title or description field
    // updatedVlue == value of title or description

    const updatedNote = this.state.notes.map((note) => {
      if (note.id !== editMeId) {
        return note;
      } else {
        if (updatedButton === "title") {
          note.title = updatedValue;
          return note;
        } else {
          note.description = updatedValue;
          return note;
        }
      }
    });
    this.setState({ notes: updatedNote });
  };

  onSearch = (text) => {
    const newSearchText = text.toLowerCase();
    const updatedNotes = this.state.notes.map((note) => {
      if (!newSearchText) {
        note.doesMatchSearch = true;
        return note;
      } else {
        const title = note.title.toLowerCase();
        const description = note.description.toLowerCase();
        const titleMatch = title.includes(newSearchText);
        const descriptionMatch = description.includes(newSearchText);
        // if (titleMatch) {
        //   note.doesMatchSearch = true;
        // } else if (descriptionMatch) {
        //   note.doesMatchSearch = true;
        // } else {
        //   note.doesMatchSearch = false;
        // }
        const hasMatch = titleMatch || descriptionMatch;
        note.doesMatchSearch = hasMatch;
        return note;
      }
    });
    this.setState({
      notes: updatedNotes,
      searchText: newSearchText
    });
  };

  render() {
    return (
      <div>
        <Header
          onSearch={this.onSearch}
          addNote={this.addNote}
          searchText={this.state.searchText}
        />
        <Notelist onType={this.onType} notes={this.state.notes} />
      </div>
    );
  }
}

export default App;
