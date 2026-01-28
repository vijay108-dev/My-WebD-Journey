let a =20;
console.log(20);

// Interface = object ka shape
// interface Person {
//   name: string;
//   age: number;
//   isStudent: boolean;
//   email?: string;   //optional property
// }

// // Object using interface
// const person1: Person = {
//   name: "Vijay",
//   age: 22,
//   isStudent: true,
//   email: "vijay@gmail.com"
// };

// const person2: Person = {
//   name: "Aashu",
//   age: 25,
//   isStudent: false
//   // email is not → No error  
// };

// console.log(person1);
// console.log(person2);




//1readonly
//value can't change

// interface Person {
//   readonly id: number;
//   name: string;
// }

// const user1: Person = {
//   id: 1,
//   name: "Vijay"
// };

// user1.name = "Rahul"; //allowed
// user1.id = 2;        //not allowed


//readonly = read only



//2️Partial
//sab properties optional ho jaati hain
// interface Person {
//   name: string;
//   age: number;
//   isStudent: boolean;
// }

// const p: Partial<Person> = {
//   age: 22
// };

//Partial = give only what you want




//3️Required
//every properties is compulsory

interface Person {
  name: string;
  ages?: number;
}

const p1: Required<Person> = {
  name: "Vijay",
  ages: 22
};


//Required = everything is must



// Interface for object
interface Student {
  name: string;
  age: number;
  isPass: boolean;
}

// Array of objects
const students: Student[] = [
  { name: "Vijay", age: 22, isPass: true },
  { name: "Aashu", age: 24, isPass: false },
  { name: "Sanya", age: 21, isPass: true },
];

// Loop through array
students.forEach(student => {
  console.log(`${student.name} is ${student.isPass ? "Pass" : "Fail"}`);
});


//function
function add(a: number, b: number): number { //number tell us return
  return a + b;
}
add(5, 3); // 8


//Optional parameter
function greet(name: string, age?: number): string {
  if (age) {
    return `Hello ${name}, you are ${age} years old.`;
  } else {
    return `Hello ${name}`;
  }
}

console.log(greet("Vijay"));        // Hello Vijay
console.log(greet("Aashu", 25));    // Hello Aashu, you are 25 years old.


//Default parameter
function multiply(a: number, b: number = 2): number {
  return a * b;
}

console.log(multiply(5));    // 10 (b=2 by default)
console.log(multiply(5, 3)); // 15



//Arrow function
const sub = (a: number, b: number): number => a - b;

console.log(sub(10, 4)); // 6





//callback function
// Function jo callback lega
function greet1(name: string, callback: (msg: string) => void){
  let message=`Hello ${name}`;
  callback(message);  // callback call
}

// Callback function define 
function printMessage(msg: string) {
  console.log(msg);
}

// Call
greet1("Vijay",printMessage);





//Basic Rest Parameter
function addNumbers(...nums: number[]): number{
  let sum = 0;
  for (let num of nums) {
    sum += num;
  }
  return sum;
}

console.log(addNumbers(1, 2, 3));// 6
console.log(addNumbers(10, 20, 30, 40));// 100




//extend keyword
// Parent interface
interface Person {
  name: string;
  age: number;
  greet(): void;
}

// Child interface extends parent
interface Employee extends Person {
  salary: number;
  department: string;
}

// Class implements child interface
class Manager implements Employee {
  name: string;
  age: number;
  salary: number;
  department: string;

  constructor(name: string, age: number, salary: number, department: string) {
    this.name = name;
    this.age = age;
    this.salary = salary;
    this.department = department;
  }

  greet(): void {
    console.log(`Hello, I am ${this.name}, age ${this.age}`);
  }

  showDetails(): void {
    console.log(`${this.name} works in ${this.department} and earns ₹${this.salary}`);
  }
}

// Object create
const mgr = new Manager("Rahul", 30, 80000, "IT");

mgr.greet();     // Hello, I am Rahul, age 30
mgr.showDetails();// Rahul works in IT and earns ₹80000

