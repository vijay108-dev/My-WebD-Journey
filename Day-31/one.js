//Primitive Data type
// const num =12;
// num =13;
// console.log(num); //it will give you error bcz const means we will never the value

//Non Primitive data type
// const obj ={
//     name:"Vijay",
//     id:31,
// }
// obj.id =44;
// console.log(obj); //it will change  

// let obj2 ={
//     id:23,
//     money:200000,
// }
// obj=obj2;
// console.log(obj); //it will give you error

//location of obj2 is 800 suppose
//location of obj is 600 suppose


//string in js
// let str1 ="vijay";
// let str2='Sanya';
// let str3 = `Aashu Singh`;
// console.log(str1, str2, str3); //vijay sanya Aashu Singh there are three ways to repersent string 


//backtick is important benifit is like change the value of price like Blinket
// const price = 299;
// console.log(`The price of this product is ₹${price}`);

//String Concatenation
// let s1="Vijay";
// let s2="Singh"
// console.log(s1 + s2);//VijaySingh

// let s1="Vijay";
// let s2=" Singh"
// let s3= s1+s2;
// console.log(s3); //Vijay Singh
//console.log(s3.length); //11

//"Vijay Singh is the best"
//console.log('"Vijay Singh is the best"'); //"Vijay Singh is the best"

//\n used for next line
// const message = `Hello User \n your order has been placed successfully.\nThank you for shopping with us.`;
// console.log(message);

//escape character \
// const message = `Hello User \\n your order has been placed successfully.\\nThank you for shopping with us.`;
// console.log(message);//Hello User \n your order has been placed successfully.\nThank you for shopping with us.

 
// let special="Vijay";
// console.log(special[2]);//j
// console.log(special.charAt(2));//j

// //toLowerCase
// let name= "Vijay";
// console.log(name.toLowerCase());//vijay

// //toUpperCase
// console.log(name.toUpperCase()); //VIJAY

//we use function evrywhere except length

//Searching in string
// let message = "I Will talk you later you";
// console.log(message.indexOf("you")); //12 first he will check the string is persent or not if it is persent then it will print at which index it is persent.if value is not persent then it will print -1
// console.log(message.lastIndexOf("you")); //22
// console.log(message.includes("you")); //true


// //Extracting substrings
//            //0123456789
// let string ="VijaySingh"
//     // -9-8-7-6-5-4-3-2 -1 this is my negative index
// console.log(string.slice(0,5)); //Vijay catch is last index is not included
// //difference is slice can take negative index also
// console.log(string.substring(0,5)); //Vijay

// console.log(string.slice(-6,-1)); //ySing


// let str3 = "what is going on your on";
// console.log(str3.replace("going","money")); //what is money on your
// console.log(str3.replaceAll("on","you")); //what is going you your you


// let str4 = "Money! honey! sunny! funny! Tunny";
// console.log(str4.split("!")); //[ 'Money! honey! sunny! funny! Tunny' ] string is convert into array


// let str5= " Hello all of you ";
// console.log(str5.trim()); //it will remove space from starting and ending Hello all of you


//New way to create string
let lateststring = new String("Hello guys");
console.log(lateststring); //[String: 'Hello guys']
console.log(typeof lateststring);//object

//whenever i make string like normal way his memeory allocate in stack when you use new keyword then it will alocate in heap your string create in heap

