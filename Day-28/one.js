//Comparision Operator
//number to number

// let a=10;
// let b=20;
// console.log(a==b);// false
// console.log(a!=b);// true
// console.log(a===b);// false
// console.log(a!==b);// true
// console.log(a>b);// false
// console.log(a<b);// true
// console.log(a>=b);// false
// console.log(a<=b);// true

// let number = 10;
// let string ="10";
// console.log(number==string);//true
//true whenever my js engine do comparsion so he will convert both of them in same type like (number) string will convert into number
//everthing convert into number

//=== it means first it will check type then compare the value
// let number = 10;
// let string ="10";
// console.log(number===string);//false


//null == undefined //Always true if we compare anyone then it give false.null only eqvivalent to undefined important 
//null === undefined //always false

// console.log(null==undefined);//true
// console.log(null===undefined);//false


// console.log(null==0);// false
// console.log(null===0);// false
// console.log(null>0);// false here is my type conversion null will convert and the equivalent of null is 0. so is my 0>0 false
// console.log(null<0);// false
// console.log(null>=0);// true
// console.log(null<=0);// true

//No one will ask you this but if you remember it is good for you


// console.log(undefined == 0);// false
// console.log(undefined === 0);// false
// console.log(undefined >0);// false undefined convert into number Nan>0 so it will give you false
// console.log(undefined< 0);// false
// console.log(undefined >= 0);// false
// console.log(undefined<=0);// false

// let a=undefined;
// console.log(Number(a)); //Nan

// console.log(NaN==NaN);//false

// let abc1=123;
// let abc2="123";
// let abc3=123;
// console.log(abc1==abc2==abc3);//false

//console.log(undefined!=null); //false



// Logical Operators 

// let a = true;
// let b = false;
// //AND(&&)
// console.log(a&&b);// false
// // OR(||)
// console.log(a||b); // true
// // NOT(!)
// console.log(!a);// false
// console.log(!b);// true


// let age=20;
// let hasID=true;
// console.log(age>=18&&hasID);// true
// console.log(age<18||hasID);// true



// Bitwise Operators 

let a=5;// 0101
let b=3;  // 0011
//AND(&)
console.log(a&b);// 1 (0001)

//OR(|)
console.log(a|b); // 7(0111)

// XOR(^)
console.log(a^b);// 6(0110)

// NOT(~)
console.log(~a);// -6

// Left Shift(<<)
console.log(a<<1);// 10 (1010)   //5 multiply by 2 power 1

// Right Shift(>>)
console.log(a>>1);// 2  (0010)  //5 divided by 2 power 1