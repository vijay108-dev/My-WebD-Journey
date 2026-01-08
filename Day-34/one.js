// Object in JavaScript is a collection of key–value pairs used to store related data and functions together.
// const obj={
//     name:"vijay",
//     roll_number:123,
//     age:23,
// }
// console.log(obj);//{ name: 'vijay', roll_number: 123, age: 23 }

// const arr=["vijay",123,"male" 23]; //we can't identify what type of thing we are storing like identification that is why we use object
// console.log(arr);



// const insta ={
//     insta_id:"vijay",
//     password:123344,
//     //account number: 459120, it will give you error you never mention like this . if you want so make him string then it will not throw error
// }
// console.log(insta);//{ insta_id: 'vijay', password: 123344 }

// //To access the element
// console.log(insta.password); //123344

// //Another way to access my element
// console.log(insta["password"]); //123344

// //your key always store as a string on backend



// const obj={
//     0:20,
//     name:"vijay",
//     roll_number:123,
//     age:23,
//     undefined:20,
// }
// console.log(obj); //{ '0': 20, name: 'vijay', roll_number: 123, age: 23 }
// console.log(obj["0"]); //20

//array and object implementation almost same
//console.log(obj.undefined); //20



// //Second method to create object
// const person= new Object();

// //Property add
// person.name="vijay";
// person.age=22,
// person.roll_number=31
// console.log(person); //{ name: 'vijay', age: 22, roll_number: 31 }

// //Delete Property
// delete person.roll_number;
// console.log(person); //{ name: 'vijay', age: 22 }

// //Modify or update
// person.name="Aashu";
// console.log(person); //{ name: 'Aashu', age: 22 }


//third method to create object: class rarely used
// class people{
//     constructor(na,ag,roll_num){
//         this.name=na;
//         this.age=ag;
//         this.roll_number=roll_num;

//     }
// }
//this point the value whoever call the value
// let person1 = new people("vijay",22,31);
// let person2 = new people("Aashu",21,2);
// console.log(person1,person2); //people { name: 'vijay', age: 22, roll_number: 31 } people { name: 'Aashu', age: 21, roll_number: 2 }



// let obj = {
//     name:"vijay",
//     age:22,
//     account_balance:1000000,
//     gender:"male"
// };

// const arr = Object.keys(obj); 
// console.log(arr); //[ 'name', 'age', 'account_balance', 'gender' ]

// const arr = Object.values(obj); 
// console.log(arr);  //[ 'vijay', 22, 1000000, 'male' ]

// const arr2 = Object.entries(obj); //rarely we use
// console.log(arr2);
// [
//   [ 'name', 'vijay' ],
//   [ 'age', 22 ],
//   [ 'account_balance', 1000000 ],
//   [ 'gender', 'male' ]
// ] here we get 2d array



//assign use case
// const obj1={a:1,b:2};
// const obj2={c:3,d:4};

// const obj3 = Object.assign(obj1,obj2);
// console.log(obj3,obj1); //{ a: 1, b: 2, c: 3, d: 4 } here is a catch your obj1 is also changed so what we do

//const obj3 = Object.assign({},obj1,obj2);
// console.log(obj3,obj1); //{ a: 1, b: 2, c: 3, d: 4 } { a: 1, b: 2 } now it is fine here we give target value when they combine it will go in my target value. you also give multiple source


//spread operator do the same also
// Spread operator (...) is used to copy or expand values of arrays or objects.
// It helps create shallow copies and merge data easily in JavaScript.
// const obj4={...obj1,...obj2};
// console.log(obj4); //{ a: 1, b: 2, c: 3, d: 4 }




//                                     Part = 2

// let obj1={
//     a:1,
//     b:2
// };

// let obj2=obj1;
// //shallow copy means copy by refernce it point single one
// obj2.a=3;
// console.log(obj2,obj1);//{ a: 3, b: 2 } { a: 3, b: 2 }

// //deep copy it is point different copy
// let obj3 = structuredClone(obj1);
// obj3.a=5;
// console.log(obj3,obj1); //{ a: 5, b: 2 } { a: 3, b: 2 }

// Nested Object
// const user={
//     name:"vijay",
//     age:22,
//     gender:"male",
//     address: {
//         pincode:333098,
//         city:"pilani",
//     }
// }
// //console.log(user.address.pincode); //333098

// const user2 = Object.assign({},user);
// console.log(user2);
// user2.address.pincode=333210;
// console.log(user.address.pincode); //333210 nested one will change it show by refernce shallow copy when we use assign

// user2.name="aashu";
// console.log(user.name); //vijay deep copy

//for best practise you will use Structureclone it will create copy then you will change


// //Object.freeze()
// const user = {
//   name:"Vijay",
//   age:22
// };
// Object.freeze(user);
// user.name = "Rahul";   // it will not change
// user.city = "Delhi";  // it will not add
// delete user.age;      // it will not delete

// console.log(user); //{ name: "Vijay", age: 22 }


//Object.seal()
// const person ={
//   name: "Vijay",
//   age: 22
// };
// Object.seal(person);
// person.age=23; // allowed 
// person.city="Pune"; //not allowed 
// delete person.name; // not allowed 

// console.log(person); // { name: "Vijay", age: 23 }



//Destructuring of an object
// const obj ={
//   name:"Vijay",
//   age:22,
//   city:"Jhunjhunu",
//   roll_number:31
// };
// destructuring
// const { name, age }=obj; //we get the value indivisually it is mostly use in react and function call
// console.log(name,age); // Vijay 22


//Rename destructuring
// const { name: userName, city: userCity }=obj;

// //console.log(name); //it will give you error now

// console.log(userName); // Vijay
// console.log(userCity); // Jhunjhunu

//rest operator
// const{name,city,...obj1} = obj; //here name and city place there and another value will go to my obj1
// console.log(obj1); //{ age: 22, roll_number: 31 }



//Destructuring of an array
// const arr=[10,20,30,40];

// // destructuring
// // const [first, second, ,fourth ]=arr;

// // console.log(first); //10
// // console.log(second); //20
// // console.log(fourth); //40

// //one more way using rest operator
// const [first, second, ...third]=arr;
// console.log(third); //[ 30, 40 ]



// const obj = {
//   name:"Vijay",
//   age:22,
//   city:"Jhunjhunu",
//   arr:[12,34,56,78,90],
//   roll_number:31,
//   address: {
//     pincode:333098,
//     city:"pilani"
//   }
// };

//Destructure where we have object to object then destructure {} then we put the value
// const{address:{pincode}}= obj; 
// console.log(pincode);

// const {arr: [first]} =obj;
// console.log(first); //12




// let user = {
//     naem:"vijay",
//     gender:"male",
//     roll_number:435,
//     greet: function() {
//         console.log("Anime fanclub");
//     },
//     meet: function() {
//         return 12;
//     }
// }
// console.log(user.greet()); //Anime fanclub then there is no return it print undefined after Anime fanclub

// console.log(user.meet()); //12


//What is Prototype in JavaScript?
//A prototype is a mechanism in JavaScript that allows objects to inherit properties and methods from other objects.
// const user = {
//   name: "Vijay"
// };
// console.log(user.toString());

//toString() is not written inside user
//It works because it comes from the prototype

// Every JavaScript object has a hidden link called [[Prototype]]
// (you can access it using __proto__)

//console.log(user.__proto__ === Object.prototype); // true


//Prototype chain
// If JavaScript does not find a property in an object,
// it looks in its prototype,
// then in the prototype’s prototype,
// until it reaches null.