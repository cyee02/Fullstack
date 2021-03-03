import React, { useEffect, useState } from 'react'
import Person from './components/Person'
import dbService from './services/dbService'
import './index.css'

const App = () => {
  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterName, setFilterName ] = useState('')

  // State hooks for name changes
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterName = (event) => {
    setFilterName(event.target.value)
  }

  // Effect hook for fetching information from database
  useEffect(() => {
    dbService
      .getAll()
      .then(response => 
        setPersons(response))
  }, [])

  // When name is added
  const addName = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
    }
    // Check whether the newName is in the PhoneBook
    const filteredMatch = persons.filter(person => person.name === newName)
    if (filteredMatch.length === 0) {
      dbService
        .create(personObject)
        .then(response => {
          setPersons(persons.concat(response))
        })
    } else {
      const result = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)
      if (result) {
        dbService
          .edit(filteredMatch[0].id, personObject)
          .then(response => {
            setPersons(persons.map(person => person.id !== filteredMatch[0].id ? person : response))
          })
        alert(`Contact number updated for ${newName} `)
      }else{
        console.log("cancelled")
      }
    }
  }

  // Constant to store filtered list of person to show
  const personToShow = persons.filter(person => person.name.match(filterName))

  const handleDelete = (name, id) => {
    const result = window.confirm(`Delete ${name}?`)
    if (result) {
      const updatedPerson = persons.filter(person => person.id !== id)
      dbService
        .deletePerson(id)
        .then(response => {
          setPersons(updatedPerson)
      })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      
      <form onSubmit={addName}>
        <div>
          Filter name:
          <input
            value={filterName}
            onChange={handleFilterName}              
          />
        </div>
        <h2>add a new contact</h2>
        <div>
          name: <input 
            value={newName}
            onChange={handleNameChange}
          /><br />
            number: <input 
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {personToShow.map(person =>
          <Person            
            key={person.id}
            person={person}
            handleDelete={() => handleDelete(person.name, person.id)}
          />
        )}
    </div>
  )
}

export default App