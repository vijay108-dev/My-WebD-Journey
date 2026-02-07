// npm init 
// npm install react 
// npm install react-dom
// npm insatll -D parcel
// npx parcel index.html
// callback function
// Hooks

import React, {useState} from "react";
import ReactDOM from "react-dom/client";

function Counter(){
    //let count =0;

    //For some changes in UI
    let [count,setCount] = useState(0); //0 will go into count and one function i will give you function name you will give anything

    //usestate will change like 1 2 3 .... will go into count like this firstly we intialize the value 0


    function incrementnumber(){
        count = count + 1;
        //inpect window you will see when you click
        // console.log(count);
        //Now changes occurs

        //it will take count
        setCount(count);
        //document.querySelector('h1').innerText= `Count is ${count}`;
    }
    function decrementnumber(){
        count = count - 1;
        setCount(count);

        //document.querySelector('h1').innerText= `Count is ${count}`;
    }
    return (
        <div className="first">
        <h1>Count is:{count}</h1>
        <button onClick={incrementnumber}>Increment {count}</button>
        <button onClick={decrementnumber}>Decrement {count}</button>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<Counter/>);