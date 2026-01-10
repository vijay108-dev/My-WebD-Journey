//Map
//Map = collection of (key → value) pairs
// key should be unique

// When to use Map?
// When you need key–value data
// When keys are not just strings
// When you want fast lookup
// When insertion order matters

// const map1 = new Map();
// map1.set(1,2);
// map1.set("vijay",22);
// // console.log(map1); //Map(2) { 1 => 2, 'vijay' => 22 }

// // map1.set("vijay",23)//
// // console.log(map1); //Map(2) { 1 => 2, 'vijay' => 23 } update the value key only one

// console.log(map1.has("vijay")); //true

// console.log(map1.size); //2

//map1.clear();
//console.log(map1);



const map1 = new Map([
    [1,"vijay"],
    [2,"aashu"],
    [3,"sanya"],
    [4,"aachal"]
]);
//console.log(map1); //Map(4) { 1 => 'vijay', 2 => 'aashu', 3 => 'sanya', 4 => 'aachal' }

//for of loop
// for(let value of map1){
//     console.log(value);
// }
// [ 1, 'vijay' ]
// [ 2, 'aashu' ]
// [ 3, 'sanya' ]
// [ 4, 'aachal' ]


//destructure
// for(let [keys,value] of map1){
//     console.log(keys,value);
// }
// 1 vijay
// 2 aashu
// 3 sanya
// 4 aachal