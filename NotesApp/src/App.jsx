import { useState } from "react"
import Notes from "./components/Notes";
import NotesForm from "./components/NotesForm";
import "./app.css";


function App() {
  const [notes, setNotes] = useState([
    // {
    //   id: 1,
    //   text: "notas teste 1",
    //   isCompleted: false,
    // },
    // {
    //   id: 2,
    //   text: "Notas teste 2",
    //   isCompleted: false,
    // },
    // {
    //   id: 3,
    //   text: "notas teste 3",
    //   isCompleted: false,
    // },
  ]);

  const addNote = (text) => {

    const newNotes = [
      ...notes,
      {
       id: Math.floor(Math.random() *10000),
       text,
       isCompleted: false,
      },
    ];

    setNotes(newNotes);
  }


  return (
    <div className="app">
      <h1>Note list</h1>
      <div className="notes">
        {notes.map((note) => (
          <Notes key={note.id} notes={note}/>
        ))}
      </div>
      <NotesForm addNote={addNote} />
    </div>
  )
}

export default App
