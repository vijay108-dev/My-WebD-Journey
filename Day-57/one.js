"use strict";
let num = 10;
//type automatically maan lega
let x = 10;
//Declare by deafult any 
//anything will come inside -> type any
let money;
money = 20;
money = "Honey";
console.log(money.toUpperCase());
let val2;
val2 = "Singh";
//console.log(val2.toUpperCase()); //error
if (typeof val2 === "string")
    console.log(val2.toUpperCase()); //error gone
val2 = 20;
if (typeof val2 === "number")
    console.log(val2.toFixed()); //error gone
let array = [1, 2, 3, 4];
array.push(5); // 
//numbers.push("a"); // error
let names = ["Vijay", "aashu"];
names.push("Amit");
//names.push(10); //error
let arr = ["Vijay", 25, "aashu", 22];
//arr.push(true);//error
arr.push(12);
let users = [
    { name: "Vijay", age: 25 },
    { name: "Sanya", age: 23 }
];
//Turples
//Tuple = fixed order + fixed types
let person;
person = ["Vijay", 25]; //correct
//person = [25, "Vijay"]; //error (order wrong)
//Normal array vs Tuple
let arr1 = ["Vijay", 25, "aashu", 23];
let tuple = ["aashu", 23];
//Objects
let student = {
    name: "Vijay",
    age: 23,
    isActive: true
};
console.log(student.name);
let user = {
    name: "ashu",
    age: 22
};
let c2 = "Vijay";
let user1 = {
    name: "Aashu",
    age: 24
};
let students = [
    { name: "Vijay", marks: 80 },
    { name: "Aashu", marks: 75 }
];
let user2 = {
    name: "Vijay",
    age: 23,
    ids: 2
};
