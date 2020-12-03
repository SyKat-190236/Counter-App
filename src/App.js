import React from "react";
import Counter from "./Counter";
import './App.css';
import CountDown from "./CountDown";

function App() {
  return (
    <div className="App">
     <CountDown/>
     <Counter/> 
    </div>
  );
}

export default App;
