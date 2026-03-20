//react router es problem ko solve krti h baar baar load krne vali problem se aapkao
//npm i react-router
//jo command de vo hi khul jaye vo hi h react router mera
import React from "react";
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route,Link } from "react-router";
import Home from "./src/Home";
import Contact from "./Src/contact";
import Dashboard from "./src/Dashboard";
import Details from "./src/Details";
import Zero from "./src/Zero";
import Hello from "./src/Hello";
import Hi from "./src/Hi";


function App(){

    return (
        
        <BrowserRouter> 

        <nav>
        <Link to="/">Home</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Dashboard">Dashboard</Link>
        <Link to="/Details">Details</Link>
        </nav>

        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/Contact" element={<Contact></Contact>}></Route>
            <Route path="/Dashboard" element={<Dashboard/>}></Route>
            <Route path="/Details" element={<Details></Details>}>

            <Route index element={<Zero></Zero>}></Route>
            <Route path="Hello" element={<Hello></Hello>}></Route>
            <Route path="Hi" element={<Hi></Hi>}></Route>
            
            </Route>
        </Routes>


        {/* footer section */}
        </BrowserRouter>
        
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);


//browser router help krta h page refersh nhi krta easy hogya 
//react router don't use anchor tag it will give you power like link
//nav k ander likhuga link . link me hota h to
//route batate h konsa route choose kruga me
//behind the seen anchor ka hi use kr rha h 
//browser only understand html css and js only
//routes me sirf aak hi work krta h nav vale to aapko dikhega hi dikhega

//nested routing page k andher page
// /slash ye mt krna fir root level se dhundta h you will get so many errors

// sirf hello likho path me Hi

//outlet batate h kisko render krna h if i have 10 options jo bhi path diya vo dekh lega apna outlet mtlb konsa path select kiya h aapna

//routes se jo bahr h vo aapke har jgh nazar aayega

//route k andher sirf aak hi chlta h aapka

//flow ko smjhna important h syntax nhi guys

