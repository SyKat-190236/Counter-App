import React from "react";
import Counter from "./Counter";
import './App.css';
import CountDown from "./CountDown";

function App() {
  return (
    <div className="App">
      <h1>Two CountDown Component</h1>
      <Counter/> 
      <CountDown/>
    </div>
  );
}

export default App;
