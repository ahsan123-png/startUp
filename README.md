# What is React.js?.
React.js is a JavaScript library for building user interfaces (mainly SPAs — Single Page Applications).

Developed by Facebook.

Uses components for UI structure.

Uses JSX (JavaScript + XML) syntax.

Uses a virtual DOM for fast rendering.

Supports declarative UI and unidirectional data flow.

### What is JSX?
JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files

## 📁 2. React Project Structure (create-react-app example)


### React Project Structure
```

my-app/
├── public/                    # Static files (HTML, favicon, images)
│   └── index.html             # The root HTML file
│
├── src/                       # All React source code lives here
│   ├── assets/                # Images, fonts, etc.
│   ├── components/            # Reusable UI components
│   ├── pages/                 # Page-level components (routes)
│   ├── services/              # API functions or business logic
│   ├── store/                 # Redux / Context API store
│   ├── App.js                 # Root component
│   ├── index.js               # ReactDOM.render starts here
│   └── styles/                # Global or modular CSS
│
├── .gitignore
├── package.json               # Project metadata and dependencies
├── README.md
└── vite.config.js / webpack.config.js  # Bundler configuration
```

# 🔄 3. React App Flow (Step-by-step)
🔹 index.js — Entry Point
```

import React from 'react';

import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
```

## 🔹 App.js — Root Componen
```
import React from 'react';
import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {
    return (
        <div className="App">
            <Header />
            <Content />
            <Footer />
        </div>
    );
}
```
export default App;

### 🔹 Header.js — Reusable UI Component
```
import React from 'react';
function Header() {
    return (
        <header>
            <h1>Welcome to My App</h1>
        </header>
    );
}  
export default Header;
```
### 🔹 Content.js — Reusable UI Component
```
import React from 'react';

function Content() {
    return (
        <main>
            <p>This is the main content area.</p>
        </main>
    );
}

export default Content;
```
### 🔹 Footer.js — Reusable UI Component
```
import React from 'react';

function Footer() {
    return (
        <footer>
            <p>&copy; 2025 My App. All rights reserved.</p>
        </footer>
    );
}

export default Footer;

```

        





## 📁 React Components
### What is a React Component?
A React component is a small, reusable piece of code that represents a UI element.
### Types of React Components
1. Functional Components
2. Class Components
3. Higher-Order Components (HOCs)
4. React Hooks
### Example of a Functional Component
