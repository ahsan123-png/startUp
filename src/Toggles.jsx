/**
What Is a Toggle in React?
A toggle is a mechanism that switches between two states—like on/off, show/hide, or true/false. In React, toggles are typically implemented using state and event handlers.

===============================
- useState(false) initializes the toggle state.
- toggleMessage flips the state between true and false.
- The message is conditionally rendered using {isVisible && <p>...</p>}.

🎛️ Toggle Switch Example (Dark Mode Style)
Want something more visual? Let’s build a toggle switch:

=======================================
When to Use Toggles
Toggles are perfect for:
- Showing/hiding UI elements (modals, dropdowns, tooltips)
- Switching themes (light/dark mode)
- Enabling/disabling features (notifications, settings)
- Controlling form inputs (e.g., password visibility)

🧼 Best Practices
- Keep toggle state boolean (true/false)
- Use clear labels so users know what the toggle does
- For accessibility, use semantic HTML (like <input type="checkbox">)

 */

// YourComponentFile.js (e.g., Toggles.js)
import React, { useState } from 'react';

export function ToggleMessage() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleMessage = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleMessage}>
        {isVisible ? 'Hide' : 'Show'} Message
      </button>
      {isVisible && <p>Hello! I’m now visible 👋</p>}
    </div>
  );
}

export function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="switch-container">
      <label className="switch">
        <input
          type="checkbox"
          checked={isOn}
          onChange={() => setIsOn(!isOn)}
        />
        <span className="slider" />
      </label>
      <p>{isOn ? 'Switch is ON' : 'Switch is OFF'}</p>
    </div>
  );
}