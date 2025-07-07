import { useState } from 'react'
import './App.css'
// learn how to import apps from other files
import './Hero'
import Hero from './Hero'

// function App() {
//   return (
//     // <> Fragment
//     // we inheriet hero code and we can also our own code using <> </> frament 
//     <>
//     <Hero/>
//     <h1>This is fragment Code </h1>
//     <p>we are learning React</p>
//     </>
//   )}


function App() {
let counter =25;
const addValue=() => {
  console.log("value added: ",Math.random());
  // counter = counter + 1
}

  return (
    <>
      <h2>The Counter App</h2>
      <h3>The counter value is : {counter}</h3>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <button
      onClick={addValue}>Add more</button>
      <button>Remove Button</button>
    </>
  )
}

export default App
