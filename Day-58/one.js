"use strict";
let a = 20;
console.log(20);
const p1 = {
    name: "Vijay",
    ages: 22
};
// Array of objects
const students = [
    { name: "Vijay", age: 22, isPass: true },
    { name: "Aashu", age: 24, isPass: false },
    { name: "Sanya", age: 21, isPass: true },
];
// Loop through array
students.forEach(student => {
    console.log(`${student.name} is ${student.isPass ? "Pass" : "Fail"}`);
});
//function
function add(a, b) {
    return a + b;
}
add(5, 3); // 8
//Optional parameter
function greet(name, age) {
    if (age) {
        return `Hello ${name}, you are ${age} years old.`;
    }
    else {
        return `Hello ${name}`;
    }
}
console.log(greet("Vijay")); // Hello Vijay
console.log(greet("Aashu", 25)); // Hello Aashu, you are 25 years old.
//Default parameter
function multiply(a, b = 2) {
    return a * b;
}
console.log(multiply(5)); // 10 (b=2 by default)
console.log(multiply(5, 3)); // 15
//Arrow function
const sub = (a, b) => a - b;
console.log(sub(10, 4)); // 6
//callback function
// Function jo callback lega
function greet1(name, callback) {
    let message = `Hello ${name}`;
    callback(message); // callback call
}
// Callback function define 
function printMessage(msg) {
    console.log(msg);
}
// Call
greet1("Vijay", printMessage);
//Basic Rest Parameter
function addNumbers(...nums) {
    let sum = 0;
    for (let num of nums) {
        sum += num;
    }
    return sum;
}
console.log(addNumbers(1, 2, 3)); // 6
console.log(addNumbers(10, 20, 30, 40)); // 100
// Class implements child interface
class Manager {
    constructor(name, age, salary, department) {
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.department = department;
    }
    greet() {
        console.log(`Hello, I am ${this.name}, age ${this.age}`);
    }
    showDetails() {
        console.log(`${this.name} works in ${this.department} and earns ₹${this.salary}`);
    }
}
// Object create
const mgr = new Manager("Rahul", 30, 80000, "IT");
mgr.greet(); // Hello, I am Rahul, age 30
mgr.showDetails(); // Rahul works in IT and earns ₹80000
