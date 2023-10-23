import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import CardNo from './components/CardNo';
 
function App() {
  const [count, setCount] = useState(0)

  const mitva = {
    username: "Mitva",
    age: 19,
    content: "hi my name is mitva, how are you i guess fine?",
  }

  const parv = {
    username: "Parv",
    age: 20,
    content: "hi my name is Parv, i am a dev?",
  }

  return (
    <>
      <h1 className="bg-green-400 p-5 rounded-xl text-black mb-5">
        Mitva
      </h1>
      <Card obj={mitva} btnText="visit me"/>
      <CardNo obj={parv}/>
    </>
  )
}

export default App
