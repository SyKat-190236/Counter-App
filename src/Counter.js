import React,{useState} from "react";

function Counter(){
    const [over,setOver]=useState(0);
    const [count,setCount]=useState(0);
    const [bound,setBound]=useState(-1);
    const setodi=()=>{
        setBound(50);
    };
    const settwenty=()=>{
        setBound(20);
    };
    const increment=()=>{
        if(over<bound||bound===-1){
            setCount(count+1);
            if(count===5){
                setOver(over+1);
                setCount(0);
            }
        }
        else{
            alert("Count is over...");
            setOver(bound);
            setCount(0);
        }
    };
    const clear=()=>{
        setCount(0);
        setOver(0);
        setBound(-1);
    };
    const decrement=()=>{
        setCount(count-1);
        if(count<=0 && over>0){
            setOver(over-1);
            setCount(5);
        }
        else if(count<=0 && over===0){
            setCount(0);
            alert("All Cleared!");
        }
    };
    return(
        <div className="cnt">
            Enter Match type:
            <button onClick={setodi}>ODI</button>
            <button onClick={settwenty}>T20</button><br/><br/>
            <button onClick={increment}>Count</button>
            <button onClick={decrement}>#Del</button>
            <h1>Over:{over}.{count}</h1>
            <button onClick={clear}>Reset</button>
            <br/>
        </div>
    );
}

export default Counter;