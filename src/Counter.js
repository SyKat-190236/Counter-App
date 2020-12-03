import React,{useState} from "react";

function Counter(){
    const [over,setOver]=useState(0);
    const [count,setCount]=useState(0);
    const increment=()=>{
        setCount(count+1);
        if(count==5){
            setOver(over+1);
            setCount(0);
        }
    };
    return(
        <div>
            <button onClick={increment}>Count</button>
    <h1>Over:{over}.{count}</h1>
        </div>
    );
}

export default Counter;