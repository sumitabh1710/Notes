import {React, useState} from 'react'
import "./AddNote.css"

const AddNote = ({handleAddNote}) => {

  const [notesText, setNotesText] = useState("")

  const charaterLimit = 200

  const handleChange = (event) => {
    if (charaterLimit - event.target.value.length >= 0){
      setNotesText(event.target.value)
    }
  }

  const handleSave = () => {
    if (notesText.trim().length > 0){
      handleAddNote(notesText)
      setNotesText('')
    }
  }

  return (
    <div className="note new">
        <textarea rows="8" column="10" placeholder="Type to add your note" value={notesText} onChange={handleChange}></textarea>
        <div className='note-footer'>
            <small>{charaterLimit - notesText.length} Remaining</small>
            <button className="save" onClick={handleSave}>Save</button>
        </div>
    </div>
  )
}

export default AddNote