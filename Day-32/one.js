// Math.random() is not truly random, it follows a fixed algorithm like a pattern.
// It can be predicted, like guessing the next number in a sequence.
// OTP is for security, like a lock key, so it must be unpredictable.
// That’s why OTP uses secure random generators, like a strong digital lock. 
// It is like seed. basically math.random is a system clock number where we find the time not for OTP

// //Array in Js
// const arr =[1,2,3,4,5,"vijay",true];
// console.log(arr); //[ 1, 2, 3, 4, 5, 'vijay', true ]

// console.log(arr[0]);//1
// console.log(arr.length);//7

// console.log(arr.at(5));//vijay
// //Advantage of at is it will take negative index also
// console.log(arr.at(-1)); //true it will start from last

// // const newarr = arr;
// // console.log(newarr); //[ 1, 2, 3, 4, 5, 'vijay', true ]
// // console.log(arr ==newarr); //true bcz we store refernce in stack data will store in heap


// const newarr = structuredClone(arr); // it will amke copy and point different memory allocation
// console.log(newarr==arr); //false



// const arr1=[1,23,67,12,23,"vijay",true];
//push
// arr1.push(35);
// console.log(arr1);//[ 1, 23, 67, 12, 23, 'vijay', true, 35 ]
//pop
// arr1.pop(35);
// console.log(arr1);// [ 1, 23, 67, 12, 23, 'vijay', true ]

//unshift, add element at start
// arr1.unshift(10);
// console.log(arr1); //[ 10, 1, 23, 67, 12, 23, 'vijay', true ]


//shift , delete element from start
// arr1.shift(10);
// console.log(arr1); //[ 1, 23, 67, 12, 23, 'vijay', true ]



//delete operation but here is the disadvantage bcz of hole
// delete arr1[2];
// console.log(arr1) //[ 1, 23, <1 empty item>, 12, 23, 'vijay', true ]




//const arr1=[1,23,67,12,23,"vijay",true];
// console.log(arr1.indexOf(23));//1
// console.log(arr1.lastIndexOf(23));//4
// console.log(arr1.includes(1));//true


// //slice
// console.log(arr1.slice(1,3)); //[ 23, 67 ] //3 index not included
// console.log(arr1); //[ 1, 23, 67, 12, 23, 'vijay', true ] original array will not change

// //splice important
// console.log(arr1.splice(2,5));// [ 67, 12, 23, 'vijay', true ] 5 means how many values you want and it starts from 2nd index
// console.log(arr1); //[ 1, 23 ] it will change your original array


//splice(starting_index, total_element_delete, add value);
// arr1.splice(2,3,"honey",45);
// console.log(arr1); //[ 1, 23, 'honey', 45, 'vijay', true ]

//convert array to string
//console.log(arr1.toString()); //1,23,67,12,23,vijay,true

//same it is also convert into string but advantage is youw will write * in behalf of ,.
// console.log(arr1.join("*")); //1*23*67*12*23*vijay*true



//Concatenation
// let arr2 =[3,6,1,7,8,"vijay"];
// let arr3 =[1,2,5,7,8];
// let arr4 = arr2.concat(arr3);
// console.log(arr4); //[ 3, 6, 1, 7, 8, 'vijay', 1, 2, 5, 7, 8 ] 1D array

// arr2.push(arr3);
// console.log(arr2); //[ 3, 6, 1, 7, 8, 'vijay', [ 1, 2, 5, 7, 8 ] ] now it is convert into 2d array
// console.log(arr2[6]); //[ 1, 2, 5, 7, 8 ] it is consider as single that's why it is printed

// console.log(arr2[2,3]); //7 now it is print 7 2d repersentation


//2D array
// let arr2d=[[1,2,3],[4,5,6],[7,8,9]];
// console.log(arr2d);  //[ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]

// console.log(arr2d[0]); //[ 1, 2, 3 ]

// let abc =[1,3,5,7]; //if i want to confirm it will come form backend
// console.log(Array.isArray(abc)); //true

// let ac = new Array(10);
// console.log(ac); //[ <10 empty items> ] here is only size comes we don't use this generally



// In JavaScript, arrays are not stored in contiguous memory because:
// JS arrays are dynamic (size can grow or shrink anytime).
// They can store mixed data types (number, string, object).
// Engine optimizes for fast insert/delete, not fixed layout.
// Sparse arrays (missing indexes) are allowed.

