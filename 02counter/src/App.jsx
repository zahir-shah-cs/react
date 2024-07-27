import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5)

  // let counter = 5

  let addValue = () => {
    // counter = counter + 1
    setCounter(preCount => preCount + 1)
    setCounter(preCount => preCount + 1)
    setCounter(preCount => preCount + 1)
    setCounter(preCount => preCount + 1)
    setCounter(preCount => preCount + 1)

  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

  return (
    <>
      <h1>Starting React</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addValue}>add value {counter}</button>
      <br />
      <button onClick={removeValue}>remove value: {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
