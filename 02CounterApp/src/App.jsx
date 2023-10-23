import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    if(counter < 20){
      counter+=1;
      setCounter(counter);
    }
  }

  const removeValue = () => {
    if(counter > 0){
      counter -= 1;
      setCounter(counter);
    }
  }

  return (
    <>
      <h1>mitva virvadiya | Age: {counter}</h1>
      <p>Count: {counter}</p>
      <button onClick={addValue}>Add value {counter}</button>
      <button onClick={removeValue}>Remove value {counter}</button>
    </>
  )
}

export default App
