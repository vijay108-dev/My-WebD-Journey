//call back hell
// Callback Hell is a situation in JavaScript where many asynchronous tasks are written using nested callbacks.
// This makes the code look like a deep pyramid, and it becomes hard to read, debug, and maintain.
// ownership over

// console.log("Start");

// setTimeout(() => {
//     console.log("Step 1 done");

//     setTimeout(() => {
//         console.log("Step 2 done");

//         setTimeout(() => {
//             console.log("Step 3 done");

//             setTimeout(() => {
//                 console.log("Step 4 done");
//             }, 1000);

//         }, 1000);

//     }, 1000);

// }, 1000);

// console.log("End");


//2nd example
// fetchuser(greet)

// Domino's ordering pizza :

// callback = ()=>{
//     preparingOrder();
// }



function placeOrder(callback){
    console.log("Talking with Domino's");
    
    setTimeout(()=>{
     console.log("Order Placed Succesfully");
     callback();
    },2000)
}

function preparingOrder(callback){
    console.log("Pizza preparation started....");

    setTimeout(()=>{
        console.log("Pizza preparation Done");
        callback();
       },5000)
};

function pickupOrder(callback){
    console.log("Reaching restaurant for picking order")

    setTimeout(()=>{
        console.log("Order picked up by Delivery Boy");
        callback();
       },3000)
}

function deliverOrder(){
    console.log("Delivery boy on the way");

    setTimeout(()=>{
        console.log("Order Delivered succesfully");
    },5000)
}

// function ratingOrder(){

// }

// placeOrder(preparingOrder);
placeOrder(()=>{
    preparingOrder(()=>{
        pickupOrder(()=>{
            deliverOrder();
        });
    })
});

// callback hell