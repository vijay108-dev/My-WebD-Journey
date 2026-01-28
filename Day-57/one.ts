let num:number = 10;

//type automatically maan lega
let x =10;


//Declare by deafult any 
//anything will come inside -> type any
let money:any;

money=20;
money="Honey";

console.log(money.toUpperCase());



let val2:unknown

val2 = "Singh";

//console.log(val2.toUpperCase()); //error


if (typeof val2 === "string") 
console.log(val2.toUpperCase());  //error gone

val2 =20;
if (typeof val2 === "number") 
console.log(val2.toFixed());  //error gone



let array: number[] = [1, 2, 3, 4];

array.push(5); // 
//numbers.push("a"); // error


let names: string[] = ["Vijay", "aashu"];

names.push("Amit"); 
//names.push(10); //error


let arr: (number | string)[] = ["Vijay", 25, "aashu", 22];
//arr.push(true);//error

arr.push(12);


let users: { name: string; age: number }[] = [
  { name: "Vijay", age: 25 },
  { name: "Sanya", age: 23 }
];


//Turples
//Tuple = fixed order + fixed types
let person: [string, number];
person = ["Vijay", 25]; //correct
//person = [25, "Vijay"]; //error (order wrong)


//Normal array vs Tuple
let arr1: (string | number | string | number)[] = ["Vijay", 25, "aashu", 23];

let tuple: [string, number] = ["aashu", 23];



//Objects
let student = {
  name: "Vijay",
  age: 23,
  isActive: true
};

console.log(student.name);

let user: {
  name: string;
  age: number;
} = {
  name: "ashu",
  age: 22
};



//Alias
type c1 = string;

let c2: c1 = "Vijay";



//Reusable
// Clean code
type User = {
  name: string;
  age: number;
};

let user1: User = {
  name: "Aashu",
  age: 24
};


type Student = {
  name: string;
  marks: number;
};

let students: Student[] = [
  { name: "Vijay", marks: 80 },
  { name: "Aashu", marks: 75 }
];


//for object use interface bcz you use this multiple time don't use type
//type use for primitive
interface User2 {
  name: string;
  age: number;
}

interface User2 {
  ids: number;
}

let user2: User2 = {
  name: "Vijay",
  age: 23,
  ids: 2
};


