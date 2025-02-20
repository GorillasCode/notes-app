import React from 'react'

const Notes = ({ note, removeNote, saveNote}) => {
  return (
    <div className="notes">
          <div className="content">
            <p>{note.text}</p>
          </div>
          <div className="buttons">
            <button>Edit</button>
            <button onClick={() => saveNote(`note_${note.id}`,note.text)}>Save</button>   
            <button className="delete" onClick={() => removeNote(`note_${note.id}`,note.id)}>x</button>   
          </div>
      </div>

  )
}

export default Notes