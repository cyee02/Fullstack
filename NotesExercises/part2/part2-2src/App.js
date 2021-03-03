import React, { useState, useEffect } from 'react'
import Course from './components/Course'
import Note from './components/Note'
import axios from 'axios'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  // const hook = () => {
  //   console.log('effect')
  //   axios
  //     .get('http://localhost:3001/notes')
  //     .then(response => {
  //       console.log('promise fulfilled')
  //       setNotes(response.data)
  //     })
  // }  
  // // second parameter specifies how often useEffect is ran
  // useEffect(hook, []) 

  useEffect(() => {
    console.log('effect')
  
    const eventHandler = response => {
      console.log('promise fulfilled')
      setNotes(response.data)
    }
  
    const promise = axios.get('http://localhost:3001/notes')
    promise.then(eventHandler)
  }, [])

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() > 0.5,
      id: notes.length + 1,
    }
  
    setNotes(notes.concat(noteObject))
    setNewNote('')
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important)

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input 
          value={newNote}
          onChange={handleNoteChange}
        />
        <button type="submit">save</button>
      </form>  
    </div>
  )
}
  //   const courses = [
  //     {
  //       name: 'Half Stack application development',
  //       id: 1,
  //       parts: [
  //         {
  //           name: 'Fundamentals of React',
  //           exercises: 10,
  //           id: 1
  //         },
  //         {
  //           name: 'Using props to pass data',
  //           exercises: 7,
  //           id: 2
  //         },
  //         {
  //           name: 'State of a component',
  //           exercises: 14,
  //           id: 3
  //         },
  //         {
  //           name: 'Redux',
  //           exercises: 11,
  //           id: 4
  //         }
  //       ]
  //     }, 
  //     {
  //       name: 'Node.js',
  //       id: 2,
  //       parts: [
  //         {
  //           name: 'Routing',
  //           exercises: 3,
  //           id: 1
  //         },
  //         {
  //           name: 'Middlewares',
  //           exercises: 7,
  //           id: 2
  //         }
  //       ]
  //     }
  //   ]
  
  //   return <Course courses={courses} />
  // }

export default App