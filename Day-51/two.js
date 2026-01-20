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