//set
// In JavaScript, Set is a built-in object used to store unique values.
// Set = collection of values where no duplicates are allowed

// Points you should remember about Set
// Stores only unique values
// Values can be any type (number, string, object, array, etc.)
// Order is insertion order
// Faster than array for checking existence

// When to use Set?
// When you need unique data
// When you want fast lookup
// To remove duplicates easily

// const set1 = new Set([1,2,3,4,5,1,2]);
// console.log(set1); //Set(5) { 1, 2, 3, 4, 5 }
// console.log(typeof set1); //object


// const set2 = new Set();
// set2.add(2);
// set2.add(4);
// set2.add(6);
// set2.add(8);
// console.log(set2); //Set(4) { 2, 4, 6, 8 }
// console.log(set2.size); //4

// set2.delete(8);
// console.log(set2); //Set(3) { 2, 4, 6 }


// let instagramIDs = new Set();
// // users signing up / following
// instagramIDs.add("vijay_01");
// instagramIDs.add("code_with_vijay");
// instagramIDs.add("tech_guru");
// instagramIDs.add("vijay_01"); // duplicate, ignored

// console.log(instagramIDs);
// // Set { 'vijay_01', 'code_with_vijay', 'tech_guru' }
// if (instagramIDs.has("vijay_01")) {
//   console.log("ID already taken");
// } else {
//   console.log("ID available");
// }


//convert array to set
// let arr = [1,2,3,4,5,6,1,1,2,2];
// let set1 = new Set(arr);
// //console.log(set1); //Set(6) { 1, 2, 3, 4, 5, 6 }

// //spread operator
// arr = [...set1];
// console.log(arr); //[ 1, 2, 3, 4, 5, 6 ]


//union of 2 set
// let set1 = new Set([80,20,30,40,50]);
// let set2 = new Set([12,24,36,48,50]);

// //spread means one by one value came out

// let set3 = new Set([...set1,...set2]);
// console.log(set3); //Set(9) { 80, 20, 30, 40, 50, 12, 24, 36, 48 }


// //Intersection
// let set1 = new Set([10,24,30,40,50]);
// let set2 = new Set([12,24,36,48,50]);

// //filter:used on array not on set

// const result = [...set1].filter((num)=>set2.has(num));
// console.log(result); //[ 24, 50 ]


// const final = new Set([...set1].filter((num)=>set2.has(num)));
// console.log(final); //Set(2) { 24, 50 }


//Iterate over set , In object there is no iteration
//for of 
let set1 = new Set([10,24,30,40,50]);
// let set2 = new Set([12,24,36,48,50]);
// for(let value of set1){
//     console.log(value); //10 24 30 40 50
// }


//for each
set1.forEach((value)=>console.log(value)); //10 24 30 40 50 