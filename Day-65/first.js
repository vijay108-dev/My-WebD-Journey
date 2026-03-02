let b = 40;

function greet(){
    let a = 10;
    let b = 30;
    
    function meet(){
        console.log(a);
        console.log(b);
    }

    return meet;
}


const num = greet();
num();



//  Closure in React 
// In React, a closure means:
// A function remembers variables from where it was created, even when it runs later.

//  Simple Exampl
// function Counter() {
//   let count = 0;

//   function handleClick() {
//     count++;
//     console.log(count);
//   }

//   return <button onClick={handleClick}>Click</button>;
// }


// handleClick is a closure
// It remembers the variable count
// Real React Example (with state)
// import { useState } from "react";

// function Counter() {
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     setCount(count + 1);
//   }

//   return <button onClick={handleClick}>{count}</button>;
// }



// handleClick remembers count
// This is closure in action
// Important Thing (Very Common Interview Point)
// Sometimes closure can give old value (stale value)
// setCount(count + 1); // may use old count

// Better way:
// setCount(prev => prev + 1);