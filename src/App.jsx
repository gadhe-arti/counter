import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [Counter, setCounter] = useState(1);

  const addValue = () => {
    // console.log("added value:", Counter);
    if (Counter < 20) {
      Counter = Counter + 1;
      setCounter(Counter);
    }
  };
  const rmValue = () => {
    // console.log("added value:", Counter);
    if (Counter > 0) {
      Counter = Counter - 1;
      setCounter(Counter);
    }
  };
  // let Counter = 15;

  return (
    <>
      <h1> Chai aur code</h1>
      <h2>Counter value :{Counter}</h2>
      <button onClick={addValue}> Add value</button>
      <br />
      <button onClick={rmValue}>Remove value</button>
    </>
  );
}

export default App;
