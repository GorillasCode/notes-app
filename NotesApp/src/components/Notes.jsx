import React from 'react'

const Notes = ({notes}) => {
  return (
    <div className="notes">
          <div className="content">
            <p>{notes.text}</p>
            <p className="category">{notes.category}</p>
          </div>
          <div>
            <button>editar</button>
            <button>x</button>   
          </div>
      </div>

  )
}

export default Notes