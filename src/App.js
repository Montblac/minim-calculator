import React, { useState } from "react";
import "./App.css";

/*
TODO
 - Create function that adds number buttons programmatically, but may need
   changing of how the buttons are organized in separate divs
 - Create function that adds operator buttons programmatically, but same issue
   as number buttons

REF
  - number buttons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
  - operator buttons = ["/", "%", "+", "x", "-", "=", "AC", "+/-"];
*/

function App() {
  const [current, setCurrent] = useState("");
  const [previous, setPrevious] = useState("");
  const [operator, setOperator] = useState("");

  // Update Functions
  const updateCurrent = value => {
    setCurrent(value);
  };
  const updatePrevious = value => {
    setPrevious(value);
  };
  const updateOperator = op => {
    setOperator(op);
  };

  // Clear Functions
  const clearCurrent = () => {
    updateCurrent("");
  };
  const clearPrevious = () => {
    updatePrevious("");
  };
  const clearOperator = () => {
    updateOperator("");
  };

  const toggleSign = () => {
    if (current) {
      var num = parseFloat(current);
      setCurrent(num > 0 ? -Math.abs(num) : Math.abs(num));
    }
  };
  const doCalculate = (operand1, operand2, operator) => {
    let result;
    switch (operator) {
      case "+":
        result = operand1 + operand2;
        break;
      case "-":
        result = operand1 - operand2;
        break;
      case "x":
        result = operand1 * operand2;
        break;
      case "/":
        result = operand1 / operand2;
        break;
      default:
        console.log("Warning: Improperly handled calculation");
    }
    return result;
  };
  const onOperator = op => {
    updateOperator(op);
    updatePrevious(current);
    updateCurrent("");
  };
  const onNumber = num => {
    updateCurrent(current + num);
  };

  // TODO: Make separate Display function to show values without changing state
  const onClear = () => {
    clearCurrent();
    clearPrevious();
    clearOperator();
  };
  const onEqual = () => {
    if (current && previous && operator) {
      updatePrevious("");
      let result = doCalculate(
        parseFloat(current),
        parseFloat(previous),
        operator
      );
      setCurrent(result);
    }
  };

  const onPercent = () => {
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
            <button onClick={() => onClear()} value="AC">
              {" "}
              AC{" "}
            </button>
            <button onClick={() => toggleSign()} value="+/-">
              {" "}
              +/-{" "}
            </button>
            <button onClick={() => onPercent()} value="%">
              {" "}
              %{" "}
            </button>
            <button onClick={e => updateOperator(e.target.value)} value="/">
              {" "}
              /{" "}
            </button>
          </div>

          <div>
            <button onClick={e => onNumber(e.target.value)} value="7">
              {" "}
              7{" "}
            </button>
            <button onClick={e => onNumber(e.target.value)} value="8">
              {" "}
              8{" "}
            </button>
            <button onClick={e => onNumber(e.target.value)} value="9">
              {" "}
              9{" "}
            </button>
            <button onClick={e => updateOperator(e.target.value)} value="x">
              {" "}
              x{" "}
            </button>
          </div>
          <div>
            <button onClick={e => onNumber(e.target.value)} value="4">
              {" "}
              4{" "}
            </button>
            <button onClick={e => onNumber(e.target.value)} value="5">
              {" "}
              5{" "}
            </button>
            <button onClick={e => onNumber(e.target.value)} value="6">
              {" "}
              6{" "}
            </button>
            <button onClick={e => updateOperator(e.target.value)} value="-">
              {" "}
              -{" "}
            </button>
          </div>
          <div>
            <button onClick={e => onNumber(e.target.value)} value="1">
              {" "}
              1{" "}
            </button>
            <button onClick={e => onNumber(e.target.value)} value="2">
              {" "}
              2{" "}
            </button>
            <button onClick={e => onNumber(e.target.value)} value="3">
              {" "}
              3{" "}
            </button>
            <button onClick={e => updateOperator(e.target.value)} value="+">
              {" "}
              +{" "}
            </button>
          </div>

          <div>
            <button onClick={e => onNumber(e.target.value)} value="0">
              {" "}
              0{" "}
            </button>
            <button onClick={e => onNumber(e.target.value)} value=".">
              {" "}
              .{" "}
            </button>
            <button
              onClick={() => onEqual({ current, previous })}
              className="equal"
              value="="
            >
              {" "}
              ={" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
