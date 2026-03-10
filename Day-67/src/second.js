//userefhook k baare me sikhte h ab
//ye aak object hota h uske andher current value persent hoti h uske andher value persent rhti h
//useref hook aapke function ko re render nhi hone dega
// money vala purani vali value ko hold krke rakhta h
//useref aapke function ko re render nhi krta ha agr kisi aur ne kra diya tb vo changes screen per refelect hoge

import {useState,useRef} from "react";
import React, { useCallback, useEffect, useMemo, useState, useRef } from "react";
// function App(){

//  const [count,setCount] = useState(0);
//  const money = useRef(0);

//  return(
//   <>
//   <h1>Counter is: {count}</h1>
//   <button onClick={()=>setCount(count+1)}>Increment</button>

//   <h1>Money is: {money.current}</h1>
//   <button onClick={()=>{
//     money.current = money.current + 1;
//     console.log(money.current);
//   }}>
//   Increment
//   </button>
//   </>
//  )
// }





//Old Function: setInterval: setTime(time+1): time = 0 call it after every one second that is a common thing

function StopWatch(){

   const [time,setTime] = useState(0);
   const [isRunning , setIsRunning] = useState(false);
   const intervalRef = useRef(null);
   
   function start(){
    if(!isRunning){
    intervalRef.current = setInterval(()=>{
     setTime(prevTime=>prevTime+1); // now you will get the latest value easily callback
    //  console.log(time);
    },1000)
    setIsRunning(true);
   }

   }

   function stop(){
      if(isRunning){
      clearInterval(intervalRef.current);
      intervalRef.current=null;
      setIsRunning(false);
      }
   }

   function reset(){
    clearInterval(intervalRef.current);
    intervalRef.current=null;
    setTime(0);
   }

    return (
        <>
          <h1>StopWatch is: {time}</h1>
          <button onClick={start}>Start</button>
          <br></br>
          <br></br>
          <button onClick={stop}>Stop</button>
          <br></br>
          <br></br>
          <button onClick={reset}>Reset</button>
        </>
    )

}


ReactDOM.createRoot(document.getElementById('root')).render(<StopWatch></StopWatch>);