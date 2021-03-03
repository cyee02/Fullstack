import React, {useState} from 'react'
import ReactDOM from 'react-dom'

// const Header = (props) => {
//   return <h1>{props.course}</h1>
// }

// const Part = ({part}) => {
//   return part.map(element => 
//     <div>{element.name} {element.exercises}</div>
//   )
// }

// const Content = ({parts}) => {
//   return parts.map((part, i) => <Part key={i} part={part}/>)
// }

// const Total = (props) => {
//   return(
//     <div>
//       Total number of exercises: {props.total}
//     </div>
//   )
// }

// const App = () => {
//   const course = {
//     name: 'Half Stack application development',
//     parts: [
//       {
//         name: 'Fundamentals of React',
//         exercises: 10
//       },
//       {
//         name: 'Using props to pass data',
//         exercises: 7
//       },
//       {
//         name: 'State of a component',
//         exercises: 14
//       }
//     ]
//   }
//   return (
//     <>
//       <Header course={course.name}/>
//       <Part part={course.parts}/>
//     </>
//   )
// }

// ReactDOM.render(<App />, document.getElementById('root'))




// // Destructured button 
// const Display = ({counter}) => <div>{counter}</div>

// const Button = ({handleClick, text}) => (
//     <button onClick={handleClick}>
//       {text}
//     </button>
//   )

// const App = () => {
//   const [ counter, setCounter ] = useState(0)

//   const increaseByOne = () => setCounter(counter + 1)

//   const setToZero = () => setCounter(0)

//   const decreaseByOne = () => setCounter(counter - 1)

//   return (
//     <div>
//       <Display counter={counter}/>
//       <Button
//         handleClick={increaseByOne}
//         text='plus'
//       />
//       <Button
//         handleClick={setToZero}
//         text='zero'
//       />
//       <Button
//         handleClick={decreaseByOne}
//         text='minus'
//       />      
//     </div>
//   )
// }


// const App = () => {
//   const [clicks, setClicks] = useState({
//     left: 0, right: 0
//   })

//   const handleLeftClick = () => 
//     setClicks({ ...clicks, left: clicks.left + 1 })

//   const handleRightClick = () => {
//     const newClicks = { 
//       ...clicks, // Creates new object that has copies of all the properties of the click object
//       right: clicks.right + 1 
//     }
//     setClicks(newClicks)
//   }

//   return (
//     <div>
//       {clicks.left}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       {clicks.right}
//     </div>
//   )
// }


// // Handling arrays, rules of hook and Event handling
// const History = (props) => {
//   if (props.allClicks.length === 0) {
//     return (
//       <div>
//         the app is used by pressing the buttons
//       </div>
//     )
//   }

//   return (
//     <div>
//       button press history: {props.allClicks.join(' ')}
//     </div>
//   )
// }

// const Button = ({onClick, text}) => (
//   <button onClick={onClick}>
//     {text}
//   </button>
// )

// const App = () => {
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)
//   const [allClicks, setAll] = useState([])

//   const handleLeftClick = () => {
//     setAll(allClicks.concat('L'))
//     setLeft(left + 1)
//   }

//   const handleRightClick = () => {
//     setAll(allClicks.concat('R'))
//     setRight(right + 1)
//   }

//   const testFunction = () => {
//     console.log('test button is clicked')
//     setAll(allClicks.concat('Test'))
//   }

//   return (
//     <div>
//       {left}
//       <Button onClick={handleLeftClick} text='left' />
//       <Button onClick={handleRightClick} text='right' />
//       <Button onClick={testFunction} text='test' />
//       {right}
//       <History allClicks={allClicks} />
//     </div>
//   )
// }


// // Pasing event handlers to Child components
// const Button = (props) => (
//   <button onClick={props.handleClick}>
//     {props.text}
//   </button>
// )


// // Function in a function
// const App = () => {
//   const [value, setValue] = useState(10)

//   const setToValue = (newValue) => setValue(newValue)

//   return (
//     <div>
//       {value}
//       <Button handleClick={() => setToValue(1000)} text="Thousand" />
//       <Button handleClick={() => setToValue(0)} text = "Reset"/>
//       <Button handleClick={() => setToValue(value + 1)} text = "Increment" />
//     </div>
//   )
// }


// // Exercise 1.6 to 1.11
// const Button = ({handleClick, text}) => (
//   <button onClick={handleClick}>
//     {text}
//   </button>
// )

// const Statistics = ({good, neutral, bad, average}) => {
//   const sum = good + neutral + bad
//   const positive = good/(sum) * 100
//   const averageDivided = average/sum

//   if (sum === 0){
//     return (
//       <div>No feedback given</div>
//     )
//   }

//   return (
//     <div>
//       good {good}<br/>
//       neutral {neutral}<br/>
//       bad {bad}<br/>
//       all {sum}<br/>
//       average {averageDivided}<br/>
//       positive {positive}
//     </div>
//   )
// }
  

// const App = () => {
//   // save clicks of each button to its own state
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)
//   const [average, setAverage] = useState(0)

//   const handleGoodClick = () => {
//     setGood(good + 1)
//     setAverage(average + 1)
//   }
//   const handleNeutralClick = () => {
//     setNeutral(neutral + 1)
//   }
//   const handleBadClick = () => {
//     setBad(bad + 1)
//     setAverage(average - 1)
//   }

//   console.log(average)

//   return (
//     <div>
//       <h1>give feedback</h1>
//       <Button handleClick={handleGoodClick} text='good'/>
//       <Button handleClick={handleNeutralClick} text='neutral'/>
//       <Button handleClick={handleBadClick} text='bad'/>
//       <h1>statistics</h1>
//       <Statistics good={good} neutral={neutral} bad={bad} average={average} />
//     </div>
//   )
// }



// Exercise 1.12 to 1.14: Anecdotes

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(new Uint8Array(anecdotes.length))

  const handleClickSelect = () => {
    setSelected(selected*0 + Math.floor(Math.random() * 6))
  }
  const handleClickVote = () => {
    const newVote = [...vote]
    newVote[selected] ++
    setVote(newVote)
  }
  console.log("vote: ", vote)
  console.log("selected: ", selected)

  const highestVote = Math.max(...vote)
  const highestVoteindex = vote.indexOf(highestVote)

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}<br />
      has {vote[selected]} votes<br/>
      <button onClick={handleClickVote}>vote</button>
      <button onClick={handleClickSelect}>next anecdote</button><br/>

      <h1>Anecdote with most votes</h1>
      {anecdotes[highestVoteindex]}<br/>
      has {highestVote} votes
    </div>
  )
}





ReactDOM.render(<App />, 
  document.getElementById('root')
)