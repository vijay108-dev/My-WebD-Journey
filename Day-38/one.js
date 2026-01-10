//Reduce in JS
//const arr=[1,2,3,4,5];

//const result = arr.reduce((call back function, intialization)

// const result = arr.reduce((acc,curr)=>{ //accumlator and current value cv me aapka array aayega one by one or jo aapka result h vo acc me aayega jo me return kruga and acc ki intial value kesa pta chlegi jo me intialization ki value put kruga voi meri acc hogi
//     acc=acc+curr;
//     return acc;
 
// },intialization)


// const result = arr.reduce((acc,curr)=>{ 
//     acc=acc+curr;
//     return acc;
 
// },0)
// console.log(result); //15

//how we write this in single line
// const result = arr.reduce((acc,curr)=> acc+curr ,0)
// console.log(result); //15


let arr = ["apple", "orange", "Banana","apple", "orange", "Banana","apple", "orange", "Banana","grapes"];
//how many times every one comes
//apple:3
//orange:3

const result = arr.reduce((acc,curr)=>{
   if(acc.hasOwnProperty(curr))
    acc[curr]++;

   else
   acc[curr]=1;

   return acc;

},{}) //empty object i will intialize

console.log(result); //{ apple: 3, orange: 3, Banana: 3, grapes: 1 }