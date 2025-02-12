import { useState } from "react"
import Notes from "./components/Notes";
import NotesForm from "./components/NotesForm";


function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      text: "notas teste 1",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Notas teste 2",
      isCompleted: false,
    },
    {
      id: 3,
      text: "notas teste 3",
      isCompleted: false,
    },
  ]);


  return (
    <div className="app">
      <h1>Note list</h1>
      <div className="notes">
        {notes.map((notes) => (
          <Notes notes={notes}/>
        ))}
      </div>
      <NotesForm />
    </div>
  )
}

export default App
