import React from 'react';

function ClickExample() {
  const handleClick = () => {
    alert("Button was clicked!");
  };

  return (
    <div>
      <h2>Click Event Example</h2>
      {/* when we call function on click we use function defination mean without `()` next we learn how we pas parms to function */}
      <button onClick={handleClick}>Click Me</button> 
    </div>
  );
}

const name ="Ahsan"
export function GreetUser({ name }) {
  const greet = (userName) => {
    alert(`Hello, ${userName}!`);
  };

  return (
    <button onClick={() => greet(name)}>Greet {name}</button>
  );
}

export default ClickExample;
