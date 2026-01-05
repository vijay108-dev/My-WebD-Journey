// //to create a number
// let num1=123;
// console.log(num1); //123
// console.log(typeof num1); //number
// let num2=new Number(123);
// console.log(num2);//[Number: 123]
// console.log(typeof num2);//object

//whenever you see new keyword that means memory allocation happen in heap.

// let num1=123;
// let num2=new Number(123);
// let num3 =new Number(123);
// console.log(num1==num2);//true comparsion we do here so object will convert into number
// console.log(num2==num3);//false


// let num=123.45;
// // toFixed(n)->controls how many digits after the decimal point
// console.log(num.toFixed(0));//"123"
// console.log(num.toFixed(1)); //"123.5"
// console.log(num.toFixed(2)); //"123.45"

// // toPrecision(n) -> controls total number of digits
// console.log(num.toPrecision(1));//"1e+2" 1 *10^2=100
// console.log(num.toPrecision(2));//"1.2e+2" 1.2 * 10^2=120
// console.log(num.toPrecision(3)); //"123"
// console.log(num.toPrecision(4)); //"123.5"
// console.log(num.toPrecision(5)); //"123.45"

// // toExponential(n) -> forces exponential scientific notation
// console.log(num.toExponential());  //"1.2345e+2"
// console.log(num.toExponential(1)); //"1.2e+2"
// console.log(num.toExponential(2)); //"1.23e+2"

// // meaning of e (power of 10)
// console.log(1e+2);// 100  ->1 * 10^2
// console.log(1.2e+2);// 120  -> 1.2 *10^2
// console.log(5e+3);// 5000 ->5 *10^3



//Math
//console.log(Math.E);//2.718281828459045 E means euler's value
//you just do Math. then you will always know all the thing by yourself

//it is used in ludo game as well
//console.log(Math.random()); //0.33764319793012665. this value lies between 0<=value<1

//How can i generate the value between 0-9
// console.log(Math.random()*10); //it will generate random value

//floor and ceil
// let num = 145.5;
// console.log(Math.floor(num)); //145 it does not take point 
// console.log(Math.ceil(num)); //146


//if i do this then i will get first value here is point will not come
//console.log(Math.floor(Math.random()*10));

//if i want the value from 1-10 then what we will do
//console.log(Math.floor(Math.random()*10)+1);


//11-20
//console.log(Math.floor(Math.random()*10)+11);
//0-9 then i will do +11




//min =40. max =50 it is formula
//console.log(Math.floor(Math.random()* (max-min+1)+min));

//we do not use math.random for OTP Generation hacker will guess the output it is used in system clock 