//scope 
//Global scope -> anyone can access
//Block scope
//local scope or you can say that functional scope

// let a =10;
// var b =30;
// const c =50;

// // console.log(a); //10
// // console.log(b); //30
// // console.log(c); //50

// function get(){
// console.log(a); //10
// console.log(b); //30
// console.log(c); //50
// }

// get();


//local scope
// function get(){
//   let a =10;
//   var b =30;
//   const c =50;
// }
// get();

// console.log(a);// nope it will give you error


//Block scope
// if(true){
//     let a =10;
//     var b =30;
//     const c =50;
// }
// //console.log(a); error
// console.log(b); //30 1st problem
// //console.log(c); error

// var a = 20;
// var a =21;
// console.log(a); //21 2nd problem with var


// We do not use var mainly because it causes bugs and confusion in JavaScript.
// No block scope
// var is function-scoped, not block-scoped.
// It can be accessed outside {} which is dangerous.

// Hoisting issue
// var is hoisted and initialized with undefined, which can cause unexpected errors.

// Redeclaration allowed
// You can redeclare the same variable name with var, which leads to mistakes.

// Not safe in loops
// var creates problems in loops due to shared scope.

// let and const are safer
// They are block-scoped and prevent accidental redeclaration.

//Use let for changing values
//Use const for fixed values
//Avoid var in modern JavaScript

// for(let i=1;i<5;i++){
//     console.log(i)
// }
// console.log(i); //it will give you error


// for(var i=1;i<5;i++){
//     console.log(i)
// }
// console.log(i); //it will not give you error it is also a problem


// console.log(a); //error
// let a =20;

// console.log(b);
// var b =12; //undefined it is also a problem with var