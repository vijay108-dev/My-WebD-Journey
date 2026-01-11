//ForEach 
//let arr =[1,2,3,4,5];
// arr.forEach(function(num){
//     console.log(num); 
// })
// 1
// 2
// 3
// 4
// 5

//Arrow function you will use
//arr.forEach(callback function)

// arr.forEach((num,index,arr)=>{
//     console.log(num,index,arr);  //index arr is optional
// })

//you can do this also clean code
// function greet(num){
//     console.log(num);
// }

// arr.forEach(greet);




//filter
// let arr =[1,2,3,4,5];
// //arr.filter(callback function)
// let result = arr.filter((num) => { //here you will give three arguments
//     return num % 2 == 0; //here it will return true or false
// })
// console.log(result); //[2, 4]



// const students = [
//   { name: "Vijay", marks: 85 },
//   { name: "Amit", marks: 32 },
//   { name: "Rohit", marks: 60 },
//   { name: "Neha", marks: 28 }
// ];
// only pass students (marks >= 40)
//const passStudents = students.filter(student => student.marks >= 40);

//Destructure
// const passStudents = students.filter(({marks}) => marks >= 40);
// console.log(passStudents); //same output





//Map //it is used to modify the value , same thing you pass number index arr
// const arr =[1,2,3,4,5];
// const result = arr.map((num)=>{
//     return num*num
// })
// console.log(result);


// const students = [
//   { name: "Vijay", marks: 85 },
//   { name: "Amit", marks: 32 },
//   { name: "Rohit", marks: 60 }
// ];

// // we add 5 marks of every student 
// const updatedStudents = students.map(student => {
//   return {
//     name: student.name,
//     marks: student.marks + 5
//   };
// });

// console.log(updatedStudents);



//for each don't return your result , for each don't take return statement