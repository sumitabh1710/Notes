import React from 'react'
import AddNote from './AddNote/AddNote'
import "./AddNote/AddNote.css"

const updateNote = (id, text, date) => {
  return (
    <div className="update-note">
        <AddNote/>
    </div>
  )
}

export default updateNote