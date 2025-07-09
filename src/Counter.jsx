// here we learn abount state in reat.js 
// what is stat?
/**
 In React, state is a built-in object that stores dynamic data for a component. It allows your component to remember information and react to user input or events.
Think of it like a component’s personal memory. When the state changes, React automatically re-renders the component to reflect the new data.

================================
How to Use State in a React Project
There are two main ways to use state depending on the type of component:
1. Functional Components (with Hooks)
React introduced the useState hook to manage state in functional components.

2. Class Components (older style)

🧩 When to Use State
Use state when:
- You want to track user input (e.g., form fields).
- You need to toggle UI elements (e.g., modals, dropdowns).
- You’re fetching and displaying dynamic data (e.g., from an API).
- You want to track changes over time (e.g., counters, timers).

🧼 Best Practices
- Never modify state directly. Always use setState or the updater function.
- Lift state up when multiple components need access to the same data.
- Keep state minimal—don’t store derived or redundant data.
 */
import { useState } from 'react';  // when we see any state use import with name use = Hooks (useState)
const Counter =() =>{
    const [count, setCounter]=useState(0)
    return(
        <>
            <h1>Counter: {count}</h1>
            <button onClick={() => {
                setCounter(count+1)
            }}>Update Counter</button>
        </>
    )
}


export default Counter