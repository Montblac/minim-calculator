import React, { useState } from "react";
import { Github } from "@icons-pack/react-simple-icons";
import "./App.css";

/*
TODO
 - Create function that adds number buttons programmatically, but may need
   changing of how the buttons are organized in separate divs
 - Create function that adds operator buttons programmatically, but same issue
   as number buttons
 - Organize codebase to use separate js files per component
 - Remove unecessary files
 - Consider using 3 useStates:
    => current: the active string that the user manipulates in real time
    => history: the last previously submitted value
    => answer:  the result of the calculation

REF
  - number buttons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
  - operator buttons = ["/", "%", "+", "x", "-", "=", "AC", "+/-"];
*/

function App() {
  const [display, setDisplay] = useState("");
  const [current, setCurrent] = useState("");
  const [previous, setPrevious] = useState("");
  const [operator, setOperator] = useState("");

  // Update Functions
  // TODO: Optimize updateDisplay, possibly regex
  const updateDisplay = (value) => {
    let num = Number(value);

    if (value.length > 15) {
      setDisplay(num.toExponential(3));
    } else if (!Number.isInteger(num)) {
      setDisplay(Number(num.toFixed(3)).toString());
    } else {
      setDisplay(value);
    }
  };
  const updateCurrent = (value) => {
    setCurrent(value);
  };
  const updatePrevious = (value) => {
    setPrevious(value);
  };
  const updateOperator = (op) => {
    setOperator(op);
  };

  // Clear Functions
  const clearDisplay = () => {
    setDisplay("");
  };
  const clearCurrent = () => {
    setCurrent("");
  };
  const clearPrevious = () => {
    setPrevious("");
  };
  const clearOperator = () => {
    setOperator("");
  };

  const toggleSign = () => {
    let result = Number(current);
    if (result !== 0) {
      result = (-result).toString();
      updateCurrent(result);
      updateDisplay(result);
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

  const onOperator = (op) => {
    if (current && previous && operator) {
      let result = doCalculate(Number(current), Number(previous), operator);
      updatePrevious(result);
      clearCurrent();
      clearDisplay();
      updateOperator(op);
    } else if (current) {
      updatePrevious(current);
      clearCurrent();
      clearDisplay();
      updateOperator(op);
    }
  };

  const onNumber = (num) => {
    if (!current || current === "0") {
      updateCurrent(num);
      updateDisplay(num);
    } else {
      updateCurrent(current + num);
      updateDisplay(current + num);
    }
  };
  const onDot = () => {
    if (!current.includes(".")) {
      updateCurrent(current + ".");
      updateDisplay(current + ".");
    }
  };

  const onClear = () => {
    clearDisplay();
    clearCurrent();
    clearPrevious();
    clearOperator();
  };

  const onEqual = () => {
    if (current && previous && operator) {
      let result = doCalculate(
        Number(current),
        Number(previous),
        operator
      ).toString();
      //updatePrevious(current);
      clearPrevious();
      updateCurrent(result);
      updateDisplay(result);
    }
  };

  const onPercent = () => {
    if (current && previous && operator) {
      let result = (Number(previous) * (Number(current) / 100)).toString();
      updateCurrent(result);
      updateDisplay(result);
    }
  };

  return (
    <div className="app">
      <header> Minimal Calculator </header>
      <div className="social">
        <Github
          size={24}
          onClick={() => window.open("https://github.com/Montblac")}
        />
      </div>
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
          <button onClick={(e) => onOperator(e.target.value)} value="/">
            {" "}
            /{" "}
          </button>

          <button onClick={(e) => onNumber(e.target.value)} value="7">
            {" "}
            7{" "}
          </button>
          <button onClick={(e) => onNumber(e.target.value)} value="8">
            {" "}
            8{" "}
          </button>
          <button onClick={(e) => onNumber(e.target.value)} value="9">
            {" "}
            9{" "}
          </button>
          <button onClick={(e) => onOperator(e.target.value)} value="x">
            {" "}
            x{" "}
          </button>

          <button onClick={(e) => onNumber(e.target.value)} value="4">
            {" "}
            4{" "}
          </button>
          <button onClick={(e) => onNumber(e.target.value)} value="5">
            {" "}
            5{" "}
          </button>
          <button onClick={(e) => onNumber(e.target.value)} value="6">
            {" "}
            6{" "}
          </button>
          <button onClick={(e) => onOperator(e.target.value)} value="-">
            {" "}
            -{" "}
          </button>

          <button onClick={(e) => onNumber(e.target.value)} value="1">
            {" "}
            1{" "}
          </button>
          <button onClick={(e) => onNumber(e.target.value)} value="2">
            {" "}
            2{" "}
          </button>
          <button onClick={(e) => onNumber(e.target.value)} value="3">
            {" "}
            3{" "}
          </button>
          <button onClick={(e) => onOperator(e.target.value)} value="+">
            {" "}
            +{" "}
          </button>

          <button onClick={(e) => onNumber(e.target.value)} value="0">
            {" "}
            0{" "}
          </button>
          <button onClick={() => onDot()} value=".">
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
