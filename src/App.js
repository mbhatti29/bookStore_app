import React from 'react';
import logo from './logo.svg';
import png from './trans-book.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={png} className="App-logo" alt="logo" />
        <p>
          Book Store
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
