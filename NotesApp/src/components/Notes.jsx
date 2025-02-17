import React from 'react'

const Notes = ({ notes, removeNote }) => {
  return (
    <div className="notes">
          <div className="content">
            <p>{notes.text}</p>
          </div>
          <div className="buttons">
            <button>Edit</button>
            <button>Save</button>   
            <button className="delete" onClick={() => removeNote(notes.id)}>x</button>   
          </div>
      </div>

  )
}

export default Notes