import React from 'react'

const Notes = ({notes}) => {
  return (
    <div className="notes">
          <div className="content">
            <p>{notes.text}</p>
          </div>
          <div>
            <button>Editar</button>
            <button>Save</button>   
            <button className="delete">x</button>   
          </div>
      </div>

  )
}

export default Notes