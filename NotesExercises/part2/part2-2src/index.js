import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import App from './App'

const promise = axios.get('http://localhost:3001/notes')
// promise.then(response => {
//   console.log(response)
// })

// axios
//   .get('http://localhost:3001/notes')
//   .then(response => {
//     const notes = response.data
//     console.log(notes)
//   })

// const promise2 = axios.get('http://localhost:3001/foobar')
// promise2.then(response => {
//   console.log(response)
// })

// axios.get('http://localhost:3001/notes').then(response => {
//   const notes = response.data
//   ReactDOM.render(
//     <App notes={notes} />,
//     document.getElementById('root')
//   )
// })

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)