import React, { useState, useEffect } from 'react'
import noteService from './services/notes'
import Headline from './components/Headline'
import Note from './components/Note'
import NoteForm from './components/NoteForm'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')

  useEffect(() => {
    noteService.getAll()
    .then(initialNotes => {
      setNotes(initialNotes)
    })
  }, [])

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date(),
      important: Math.random() < 0.5,
    }
  
    noteService.create(noteObject)
    .then(returnedNote => {
      setNotes(notes.concat(returnedNote))
      setNewNote('')
    })
  }

  const handleNewNoteChange = (event) => {
    setNewNote(event.target.value)
  }

  const toggleImportanceOf = (id) => {
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }

    noteService.update(id, changedNote)
    .then(returnedNote => {
      setNotes(notes.map(note => note.id !== id ? note : returnedNote ))
    })
    .catch(error => {
      alert(
        `the note '${note.content}' was already deleted from server`
      )
      setNotes(notes.filter(n => n.id !== id))
    })
  }

  return (
    <div>
      <Headline text="Notes" />
      {notes.map((note, index) => {
        return <Note key={index} note={note} toggleImportance={() => toggleImportanceOf(note.id)} />
      })}
      <NoteForm 
        submitFunction={addNote} 
        noteValue={newNote} 
        noteChangeFunction={handleNewNoteChange} 
      />
    </div>
  )
}

export default App