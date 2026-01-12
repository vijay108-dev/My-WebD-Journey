//globalobject: object Global Object is a special object that is automatically available everywhere in a JavaScript environment.
//Chrome Browser: window
//Nodejs: global

//globalThis you will use everywhere. it points global object irrespective of environment.

//let and const are not global object but var is a part of go

//console.log("DSA"); //console.log function where it comes from ? ans->global object


//console.log(globalThis.Math.random());

//console.log(this); //{} it will point an empty object or we can say that Module's exports object 


// "use strict"

// function meet(){
//     console.log("Hello");
// }
// meet(); //if you see in inspect window it will print undefined


// "use strict"

// a=10;
// console.log(a); //by default non strict mode

//this keyword behaviour differnt different in every environment




// const obj ={
//     name:"vijay",
//     age:22,
//     greet: function(){
//         console.log(this);
//     }
// }
// obj.greet(); //this will point to obj { name: 'vijay', age: 22, greet: [Function: greet] }




// obj={

// } this bracket are not scope it is object defined