// What does Object.create() do?
//It creates a new object
//It sets the prototype of that object directly
const parent = {
  greet() {
    console.log("Hello");
  }
};

const child = Object.create(parent);

child.greet(); // Hello


//child does not have its own greet()
//It comes from the parent prototype

//Check prototype
console.log(Object.getPrototypeOf(child) === parent); // true

//Example with properties
const student = Object.create(parent);
student.name = "Vijay";

student.greet();// Hello
console.log(student.name); // Vijay


let obj1 = {
    a:1,
    b:2,
}

let obj2 = {
    c:1,
    d:2,
}


obj2 = Object.create(obj1);

//this method is not consider bcz it is costly your code will face issue
// obj2.__proto__ = obj1;
// console.log(obj2.__proto__)