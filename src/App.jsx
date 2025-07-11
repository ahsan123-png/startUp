import { useState } from 'react'
import './App.css'
// learn how to import apps from other files
// import './Hero'
import Hero from './Hero' // import Hero component from Hero file
import Login,{msg, Settings, Profile} from './UserComponent' // here you cn see how we import multi componenets from a single file
import UserCard from './UserCard'
import ClickExample,{GreetUser} from './ClickExample'
import Counter from './Counter'
import { ToggleMessage, ToggleSwitch } from './Toggles';
function App() {
  return (
    // <> Fragment
    // we inheriet hero code and we can also our own code using <> </> frament 
    <>
    <Hero/>
    <h1>This is fragment Code </h1>
    <p>we are learning React</p>
    {/* use button component in main */}
    <Button />

    <Login />
    <h3>{msg}</h3>
    <Settings />
    <Profile />
    {/* Using the user card where we add different info inside js to see the working of jsx  */}
    <UserCard />
    <ClickExample/>
     <GreetUser name="Ali" /> 
      <GreetUser name="Fatima" />
      <Counter />
      <ToggleMessage />
      <ToggleSwitch />
    </>
  )}

  // Create button Component
  function Button(){
    return(
    <>
    <button>Add Value</button>
    <button>Remove Value</button>
    </>
    )
  }

  // here we learn abount use click event and function in jsx
  




// function App() {
// let counter =25;
// const addValue=() => {
//   console.log("value added: ",Math.random());
//   // counter = counter + 1
// }

//   return (
//     <>
//       <h2>The Counter App</h2>
//       <h3>The counter value is : {counter}</h3>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//       <button
//       onClick={addValue}>Add more</button>
//       <button>Remove Button</button>
//     </>
//   )
// }

export default App
