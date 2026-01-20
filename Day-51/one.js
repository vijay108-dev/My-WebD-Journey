//call back hell


//call back function
// function fetchuser(){
//     console.log("Fetching the user Detail");
//     setTimeout(()=>{
//         console.log("Data fetching data succesfully");
//         const name = "vijay";
//         //Data fetched from backend
//         greet(name);
//         meet(name);
//     },2000)
// }

// function greet(name){
//     console.log(`Hello ${name}`);
// }

// function meet(name){
//     console.log(`Hello ${name}, I will meet you in Mumbai`);
// }

// fetchuser();




//Advantage of call back function
function fetchuser(callback){
    console.log("Fetching the user Detail");
    setTimeout(()=>{
        console.log("Data fetching data succesfully");
        const name = "vijay";
        //Data fetched from backend
        callback(name);
    },2000)
}

function greet(name){
    console.log(`Hello ${name}`);
}

function meet(name){
    console.log(`Hello ${name}, I will meet you in Mumbai`);
}

//fetchuser(greet);
fetchuser(meet);