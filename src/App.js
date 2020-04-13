import React, { useState } from "react";
import "./App.css";

/*
TODO
 - Create function that adds number buttons programmatically, but may need
   changing of how the buttons are organized in separate divs
 - Create function that adds operator buttons programmatically, but same issue
   as number buttons
 - Organize codebase to use separate js files per component (optional)
 - Add Github svg logo and link
 - Remove unecessary files

REF
  - number buttons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
  - operator buttons = ["/", "%", "+", "x", "-", "=", "AC", "+/-"];
*/

function App() {
  const [display, setDisplay] = useState("");
  const [current, setCurrent] = useState(0);
  const [previous, setPrevious] = useState(null);
  const [operator, setOperator] = useState("");

  // Update Functions
  const updateDisplay = value => {
    if (value.toString().length > 10) {
      setDisplay(value.toExponential(3));
    } else if (!Number.isInteger(value)) {
      setDisplay(value.toFixed(3));
    } else {
      setDisplay(value.toString());
    }
  };
  const updateCurrent = value => {
    setCurrent(isNaN(value) ? Number(value) : value);
  };
  const updatePrevious = value => {
    setPrevious(isNaN(value) ? Number(value) : value);
  };
  const updateOperator = op => {
    setOperator(op);
  };

  // Clear Functions
  const clearDisplay = () => {
    setDisplay("");
  };
  const clearCurrent = () => {
    setCurrent(0);
  };
  const clearPrevious = () => {
    setPrevious(0);
  };
  const clearOperator = () => {
    setOperator("");
  };

  const toggleSign = () => {
    let result = -current;
    updateCurrent(result);
    updateDisplay(result);
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
    if (current && previous && operator) {
      let result = doCalculate(current, previous, operator);
      updatePrevious(result);
      updateDisplay(result);
    } else {
      updatePrevious(current);
      clearDisplay();
    }
    updateOperator(op);
    clearCurrent();
  };

  const onNumber = num => {
    let result = num;
    if (current !== 0) {
      result = current.toString() + result;
    }
    updateCurrent(Number(result));
    updateDisplay(Number(result));
  };

  const onClear = () => {
    clearDisplay();
    clearCurrent();
    clearPrevious();
    clearOperator();
  };

  const onEqual = () => {
    if (current && previous && operator) {
      let result = doCalculate(current, previous, operator);
      updatePrevious(result);
      updateDisplay(result);
    }
  };

  const onPercent = () => {
    if (current && previous && operator) {
      let result = previous * (current / 100);
      updateCurrent(result);
    }
  };

  return (
    <div className="app">
      <header> Minimal Calculator </header>
      <div className="calculator">
        <div className="screen">
          <div className="prev">{previous}</div>
          <div className="display">{display}</div>
        </div>
        <div className="pad">
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
          <button onClick={e => onOperator(e.target.value)} value="/">
            {" "}
            /{" "}
          </button>

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
          <button onClick={e => onOperator(e.target.value)} value="x">
            {" "}
            x{" "}
          </button>

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
          <button onClick={e => onOperator(e.target.value)} value="-">
            {" "}
            -{" "}
          </button>

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
          <button onClick={e => onOperator(e.target.value)} value="+">
            {" "}
            +{" "}
          </button>

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
  );
}

export default App;
