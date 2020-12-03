import React,{useState} from "react";

function CountDown(){
    const[limit,setLimit]=useState(0);
    const [display,setDisplay]=useState("");
    const [flag,setFlag]=useState(false);
    const setValue=(event)=>{
        setLimit(event.target.value);
        setDisplay(event.target.value);
    };
    const decrement=()=>{
        if(flag){
            if(limit>0)
            {
                setLimit(limit-1);
            }
            else{
                alert("Countdown is finished.");
                setFlag(false);
            }
        }
        else{
            alert("Enter your number and Press 'Done' Button to Start Contdown");
        }
    };
    const finalValue=(event)=>{
        event.preventDefault();
        setDisplay("");
        setFlag(true)
    };
    return(
        <div>
            <input type="text" value={display} onChange={setValue}/>
            <button onClick={finalValue}>Done</button><br/>
            <button onClick={decrement}>Countdown</button>
            <h1>{limit}</h1>
        </div>
    );
}

export default CountDown;