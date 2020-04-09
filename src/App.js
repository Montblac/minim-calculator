import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header> Minimal Calculator </header>
      <div className="calculator">
        <div className="screen"></div>
        <div className="buttons"></div>
      </div>
    </div>
    /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
    */
  );
}

export default App;
