//Non-primitive data types
//array, object, function

// let arr = [1,2,3];
// console.log(arr); //[1, 2, 3]

// let arr = [1,2 ,"vijay"];
// console.log(arr); //[ 1, 2, 'vijay' ]
//console.log(typeof arr);//Object

//Object
// it will exist in key value pairs 

// let obj = {
//     user_name: "Vijay",
//     account_number: 1425780532,
//     balance:500000,
// }
// console.log(obj); //{ user_name: 'Vijay', account_number: 1425780532, balance: 500000 }

//Why we need object
//We need objects in JavaScript to store related data and functions together.
//Objects group multiple values under one name
//They represent real-world entities (user, car, product)
//They make code clean readable and easy to manage
//Restaurant

//function
// let fun = function(){
//     console.log("Hello How are you . I am Fine");
//     return 2;
// }
// // fun(); //function call Hello How are you . I am Fine
// // console.log(typeof fun); //function

// console.log(fun());


//Type Conversion
// let account_balance ="12";
// let num = Number(account_balance);
// console.log(num);//12
// console.log(typeof num);//number
// console.log(typeof account_balance);//string

//Boolean convert into number
// let Boolean = true;
// let num1 = Number(Boolean);
// console.log(num1);//1
// console.log(typeof num1);//number
// console.log(typeof Boolean);//boolean

// let x = true;
// console.log(Number(x)); //1

// let account="123fhr";
// console.log(Number(account));//NaN

//Null
// let a = null;
// console.log(Number(a));//0

//Undefined
// let b;
// console.log(Number(b)); //NaN

//Boolean
// let abc = " ";
// console.log(Boolean(abc)); //true




//Arithemetic Operator
//Addition 
// let a=10;
// let b=5;
// console.log(a+b); // 15

//Subtraction
// let a=10;
// let b=5;
// console.log(a-b); // 5

//Multiplication 
// let a=10;
// let b=5;
// console.log(a*b);// 50

//Division
//let a=10;
//let b=5;
//console.log(a/b);// 2

//Important
//Modulus (%) → remainder
// let a=10;
// let b=3;
// console.log(a%b);// 1

//Increment(++)
// let a=5;
// a++;
// console.log(a);// 6

// let sum=12;
// console.log(sum++);//12
// console.log(sum);//13

//Decrement(--)
// let a=5;
// a--;
// console.log(a);// 4



//BODMAS
// console.log((6*3)+(18/6)-9); //12
//Divide and multiply left to right
//addition and subtaction left to right



//Assignment Operator
// let a =13;
// console.log(a);//13

// let a =12;
// a+=2;
// console.log(a); //14

// let a=10;
//a+=5;
//console.log(a);//15

//a-=3;
//console.log(a);//7

//a*=2;
//console.log(a);//20

//a/=4;
//console.log(a);//2

// a%=3;
// console.log(a);//1