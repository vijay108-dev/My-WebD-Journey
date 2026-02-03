import React from "react";
import ReactDOM from "react-dom/client";

const element1 = <h1>Discipline makes a man perfect</h1>



//JSX: JS Experssion (Result produce)
//JSX: Statement(you canot write this) like let a =2;

//but for object it will give you error but array is allowed

//const arr = [1,2,3,"aashu",23]; //one by one it will take your value and get from the array
//123aashu23
// function greet(name) {
//     return <h2>Money and fame is everything {name}</h2>
// }

// props ={
//     name:"vijay",
//     age:22
// }

function Greet(props) {
    return <h2>Money and fame is everything {props.name} {props.age}</h2>
}

//IN JSX you will write your function like this always (in CAPITAL)
const element2 = <Greet name ="vijay ji" age="22"/>


const Root = ReactDOM.createRoot(document.getElementById('root'));
// Root.render(element1);
//Root.render(greet("vijay"));

Root.render(element2);