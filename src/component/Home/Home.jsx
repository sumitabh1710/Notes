import { React, useState, useEffect } from 'react'
import "./Home.css"
import { nanoid } from "nanoid"
import SearchBar from '../SearchBar/SearchBar'
import NoteList from "../NoteList/NoteList"
import AddNote from '../AddNote/AddNote'

const Home = () => {

    const [Notes, setNotes] = useState([
        {
            id: nanoid(),
            text: "this is my first note!",
            date: "18/09/2022",
        },
        {
            id: nanoid(),
            text: "this is my second note!",
            date: "19/09/2022",
        },
        {
            id: nanoid(),
            text: "this is my third note!",
            date: "17/09/2022",
        },

    ])

    useEffect(() => {
      const savedNotes = JSON.parse(localStorage.getItem('react-note-app-data'))

      if (savedNotes){
        setNotes(savedNotes)
      }
    }, [])
    

    useEffect(() => {
      localStorage.setItem("react-note-app-data", JSON.stringify(Notes))
    }, [Notes])
    

    const addNote = (text) => {
        const date = new Date()
        const newNote = {
            text: text,
            date: date.toLocaleDateString(),
            id: nanoid(),
        }

        const newNotes = [...Notes, newNote]
        setNotes(newNotes)
    }

    const deleteNote = (id) => {
        const newNotes = Notes.filter((Note) => Note.id !== id)
        setNotes(newNotes)
    }

    const [searchText, setSearchText] = useState('')

    return (
        <div className="home">
            <div className='search-container'>
                <h1>Notes List</h1>
                <SearchBar handleSearchNote={setSearchText} />
                <NoteList notes={Notes.filter((note)=>note.text.toLowerCase().includes(searchText))} handleAddNote={addNote} handleDeleteNote={deleteNote}/>
            </div>
        </div>
    )
}

export default Home