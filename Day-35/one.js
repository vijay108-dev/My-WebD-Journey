//Function
// A function in JavaScript is a block of code that performs a specific task.
// It runs only when it is called and can be reused multiple times.

// function meet(){
//     console.log("I Love DSA")
// }
// meet();// I Love DSA


//parameter
// function add(number1, number2){
//     console.log(number1+number2);
// }
// // function call: Argument
// add(3,4);//7


// function multiply(a, b){
//   return a*b;
// }
// console.log(multiply(3,4));// 12


// const fun1= function(){
//     console.log("Hello guys, I Love JS");
//     return "ok";
// }
// fun1();// Hello guys, I Love JS
// console.log(fun1); //[Function: fun1]
// console.log(fun1()); //Hello guys, I Love JS
//                      //ok


//Arrow Function 
//An arrow function is a shorter syntax to write functions in JavaScript and it does not have its own this.

// const multiply=(a,b) => {
//     console.log(a * b);
// }
// multiply(3, 4); //12


// const sum = (number1, number2)=> number1 + number2;
// console.log(sum(2,3)); //5


//if you have single parameter there is no need of bracket
// const cube = number => number*number*number;
// console.log(cube(2)); //8



//rest operator if we have multiple values
// const sum = function(...number){
//     console.log(number);

// }
// sum(2,3);
// sum(2,4,6,8);
// sum(1,2,3,6,8,9);
// [ 2, 3 ]
// [ 2, 4, 6, 8 ]
// [ 1, 2, 3, 6, 8, 9 ] it will store in array



let obj = {
    name:"vijay",
    age:22,
    roll_number:44
};

//Destructure i want only 2 values 
function fun({name, age}) {
 console.log(name, age);
}

fun(obj);