import React, {useState} from "react";
import {nanoid} from 'nanoid';
import Split from "react-split";
import Data from './data';
import Editor from './components/Editor';
import Sidebar from './components/Sidebar';


function App() {
  const [notes, setNotes] = useState([]);
  const [currentNoteId, setCurrentNoteId] = useState((notes[0] && notes[0].id) || "");

  function createNewNote(){
    const newNote = {
      id : nanoid(),
      body: "#Type you Markdown Text Here"
    }

    setNotes(prevNotes =>[newNote,...prevNotes]);
    setCurrentNoteId(newNote.id);

  }

  function updateNote(text) {
    setNotes(oldNotes => oldNotes.map(oldNote => {
        return oldNote.id === currentNoteId
            ? { ...oldNote, body: text }
            : oldNote
    }))
}

  function findCurrentNote(){
    return notes.find(note=>{
      return note.id === currentNoteId
    }) || notes[0]
  }



  return (
    <main>

    </main>
  );
}

export default App;
