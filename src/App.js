import React, { useState } from "react";
import "./App.css";

function App() {
  const [current, setCurrent] = useState("");
  const [previous, setPrevious] = useState("");
  const [operator, setOperator] = useState("");

  //const num_buttons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
  //const op_buttons = ["/", "%", "+", "x", "-", "=", "AC", "+/-"];

  const updateCurrent = value => {
    setCurrent(current + value);
  };
  const updatePrevious = value => {
    setPrevious(value);
  };
  const updateOperator = operator => {
    setOperator(operator);
    setPrevious(current);
    setCurrent("");
  };
  const clearDisplay = () => {
    setCurrent("");
    setPrevious("");
    setOperator("");
  };
  const toggleSign = () => {
    if (current) {
      var num = parseFloat(current);
      setCurrent(num > 0 ? -Math.abs(num) : Math.abs(num));
    }
  };
  const doCalculation = () => {
    if (current && previous && operator) {
      let result;
      let prev_temp = parseFloat(previous);
      let curr_temp = parseFloat(current);

      updatePrevious("");
      switch (operator) {
        case "+":
          result = prev_temp + curr_temp;
          break;
        case "-":
          result = prev_temp - curr_temp;
          break;
        case "x":
          result = prev_temp * curr_temp;
          break;
        case "/":
          result = prev_temp / curr_temp;
          break;
        default:
          console.log("Warning: Improperly handled calculation");
      }

      setCurrent(result);
    }
  };
  const doPercent = () => {
    if (current && previous && operator) {
      let prev_temp = parseFloat(previous);
      let curr_temp = parseFloat(current);
      setCurrent();
    }
  };

  return (
    <div className="app">
      <header> Minimal Calculator </header>
      <div className="calculator">
        <div className="screen">
          <div className="prev">{previous}</div>
          <div className="curr">{current}</div>
        </div>
        <div className="pad">
          <div>
            <button onClick={() => clearDisplay()} value="AC">
              {" "}
              AC{" "}
            </button>
            <button onClick={() => toggleSign()} value="+/-">
              {" "}
              +/-{" "}
            </button>
            <button onClick={e => updateOperator(e.target.value)} value="%">
              {" "}
              %{" "}
            </button>
            <button onClick={e => updateOperator(e.target.value)} value="/">
              {" "}
              /{" "}
            </button>
          </div>

          <div>
            <button onClick={e => updateCurrent(e.target.value)} value="7">
              {" "}
              7{" "}
            </button>
            <button onClick={e => updateCurrent(e.target.value)} value="8">
              {" "}
              8{" "}
            </button>
            <button onClick={e => updateCurrent(e.target.value)} value="9">
              {" "}
              9{" "}
            </button>
            <button onClick={e => updateOperator(e.target.value)} value="x">
              {" "}
              x{" "}
            </button>
          </div>
          <div>
            <button onClick={e => updateCurrent(e.target.value)} value="4">
              {" "}
              4{" "}
            </button>
            <button onClick={e => updateCurrent(e.target.value)} value="5">
              {" "}
              5{" "}
            </button>
            <button onClick={e => updateCurrent(e.target.value)} value="6">
              {" "}
              6{" "}
            </button>
            <button onClick={e => updateOperator(e.target.value)} value="-">
              {" "}
              -{" "}
            </button>
          </div>
          <div>
            <button onClick={e => updateCurrent(e.target.value)} value="1">
              {" "}
              1{" "}
            </button>
            <button onClick={e => updateCurrent(e.target.value)} value="2">
              {" "}
              2{" "}
            </button>
            <button onClick={e => updateCurrent(e.target.value)} value="3">
              {" "}
              3{" "}
            </button>
            <button onClick={e => updateOperator(e.target.value)} value="+">
              {" "}
              +{" "}
            </button>
          </div>

          <div>
            <button onClick={e => updateCurrent(e.target.value)} value="0">
              {" "}
              0{" "}
            </button>
            <button onClick={e => updateCurrent(e.target.value)} value=".">
              {" "}
              .{" "}
            </button>
            <button onClick={() => doCalculation()} className="=" value="=">
              {" "}
              ={" "}
            </button>
          </div>
        </div>
      </div>
    </div>
    /*
    <div className="App">
      <header className="App-header">
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
