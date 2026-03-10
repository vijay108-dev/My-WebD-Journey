//npx parcel index.html for run the project
//usestate and useffect hook are so efficient and it will solve all the problems mostly
//usememeo render cycle se safe krta h vhi usestate aapko aak or cycle re render krana padta h
//useeffect last me chlta h
//usememeo ka use vha krte h jha hme calculation ko bachana hota h

//useref 

import React, { useCallback, useEffect, useMemo, useState } from "react";
import ReactDOM from "react-dom/client"

//usememo hook
//1. Counter button: increase
//2. Input field: Fibonnaci number
//0 1 1 2 3 5 8 13
//Recursive code: Time Complexity = 2^n it is high page will be un responisve we have so many type of calculation heavy calculation
//when you click on incremant button it will work so slowly like 0 after few second it will be 1 our page is slow
//function re render again and again calculation also that is why page is slow

//we want now our previous result not re render again and again
// so we use usestate hook and useeffect hook to solve this problem

//you will write hera also baar baar ye create nhi hoga agr aap chahte ho to likh skte ho bahr isko
//global h na ye aak baar hi chalega ab ye sirf
  function Fibbonnaci(n){
        if(n<=1)
            return n;

        return Fibbonnaci(n-1)+Fibbonnaci(n-2);
    }



function App(){

    const [count,setcount] = useState(0);
    const [number,setNumber] = useState(null); 

    //agr mujhe show krana h to mujhe usestate banana hoga useeffect k liya
    const[result,setResult] = useState(null);
    //counter


    // function Fibbonnaci(n){
    //     if(n<=1)
    //         return n;

    //     return Fibbonnaci(n-1)+Fibbonnaci(n-2);
    // }


    //usecallback se kesa solve kruga manlo krna ho to 
    const Fibbonnaci = useCallback((n)=>{
        if(n<=1)
            return n;

        return Fibbonnaci(n-1)+Fibbonnaci(n-2);
    }
    ,[]);





    //const resut = Fibbonnaci(number); i will put this into usememo and dependency array
    //depencdecy duga kyoki me chahta hu jb tk mera number change na ho agr number change hota h to es function ko call krna
    //agr number me koi change nhi aaya to 40 h 40 h rhane do
    //agr mera counter change ho rha h to previus result ko store kra dena

    //now it works fine fast increament and decrement
    //const resut = useMemo(()=>Fibbonnaci(number),[number]);  //callback function leta h 


    //kya me useeffect hook ka use nhi kr skta
    useEffect(()=>{
        setResult(Fibbonnaci(number));

    },[number])

    //what is the differnce dono work kr rhe h useeffect hook last me chlta h one render more hoga chlta h useeffect
    // one render cycle save krna k liya
    // useeffect last me chlta h 


    return(
        <>
        <h1>Counter is: {count}</h1>
        <button onClick={()=>setcount(count+1)}>Increment</button>
         <button onClick={()=>setcount(count-1)}>Decrement</button>



        <div>
            <h2>Fibbonnaci number is:{result}</h2>
            <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)}></input>
        </div>





        </>
    )
}




ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);