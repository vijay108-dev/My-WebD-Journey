// let a =10;
// let b=a;
// b=30;
// console.log(b);//30
// console.log(a);//10

//Primitve data type are Immutable
//Non-primitive data type are mutable

//Object example
// let obj1={
//     name:"vijay",
//     roll_number:31,
// }

// let obj2 =obj1;
// console.log(obj2);
// console.log(obj1);

// obj2.roll_number=38;
// console.log(obj2);
// console.log(obj1);

// { name: 'vijay', roll_number: 31 }
// { name: 'vijay', roll_number: 31 }
// { name: 'vijay', roll_number: 38 }
// { name: 'vijay', roll_number: 38 }

// Primitive data types are stored in stack because they are small, fixed in size, and store direct values, so stack memory can allocate and access them very fast.

// Non-primitive data types are stored in heap because they are large, complex, and dynamic in size. Heap memory provides flexible space, and only their reference (address) is stored in the stack.

// Stack is fast but limited, while heap is slower but large and flexible.