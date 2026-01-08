//Prototype
////A prototype is a mechanism in JavaScript that allows objects to inherit properties and methods from other objects.
let user1 = {
    name:"vijay",
    age:22
};


let user2 = {
    name:"aashu",
    age:20
};

user2.__proto__ = user1;
console.log(user2.name);