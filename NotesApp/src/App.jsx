import { useState } from "react"
import Notes from "./components/Notes";
import NotesForm from "./components/NotesForm";
import "./app.css";
import Switch from "react-switch";


function App() {
  const [noteList, setNotes] = useState([]);

  const addNote = (text) => {

    const newNotes = [
      ...noteList,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        isCompleted: false,
      },
    ];

    setNotes(newNotes);
  }
  


  const saveNote = (id, notes) => {
    localStorage.setItem(id, notes)
    const newNotes = [...noteList]
    const filteredNotes = newNotes.filter(note =>
      note.id !== id ? note : null
    );
    setNotes(filteredNotes)

  }

  const showNotes = (chave) => {
    alert(localStorage.getItem(chave))
  }

  const removeNote = (key,id) => {
    localStorage.removeItem(key)
    const newNotes = [...noteList]
    const filteredNotes = newNotes.filter(note =>
      note.id !== id ? note : null
    );
    setNotes(filteredNotes)
  }

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((corr) => (corr === "light" ? "dark" : "light"));
  }


  return (

    <div className="app" id={theme}>
      <button onClick={()=>showNotes("")}>Show Notes</button>
      <h5>◑</h5>
      <div className="switch">
        <Switch
          onChange={toggleTheme}
          checked={theme === "dark"}
          height={20}
          width={40}
          checkedIcon={false}
          uncheckedIcon={false}
          handleDiameter={20}
          offHandleColor="#232323"
          offColor="#fff"
          onColor="#232323"

        />

      </div>
      <h1>Note list</h1>
      <div className="notes">
        {noteList.map((note) => (
          <Notes key={note.id} note={note} removeNote={removeNote} saveNote={saveNote} />
        ))}
      </div>
      <NotesForm addNote={addNote} />
    </div>
  )
}

export default App
