import React from 'react'

const NotesForm = () => {
    return <div className="notes-form">
        <h2>Create Notes</h2>
        <form>
            <input type="text" placeholder="enter the title" />
        </form>
        <button type="submit">New Note</button>

    </div>;
}

export default NotesForm