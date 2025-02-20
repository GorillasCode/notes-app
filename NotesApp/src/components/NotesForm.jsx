import React, { useState } from "react"

const NotesForm = ({ addNote }) => {

 const [value, setValue] = useState("");

 const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addNote(value);
    setValue("");
 };

 return <div className="notes-form">
        <h3>Create Notes</h3>
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="enter the title" 
                value={value}
                onChange={(e) => setValue(e.target.value)} />
        <button type="submit">New Note</button>
        </form>

    </div>;
};

export default NotesForm