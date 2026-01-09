//Advanced loop
let obj={
    name:"vijay",
    age:22,
    gender:"male",
};

//for-in-loop , I can iterate over keys in an object
// for(let key in obj){
//     console.log(key,obj[key]);
// }

//Object.key(obj);
//console.log(Object.keys(obj)); 

let obj2 = Object.create(obj);
obj2.balance=10000;
obj2.roll_number=31;
//console.log(obj2); //{ balance: 10000, roll_number: 31 }

//console.log(Object.keys(obj2)); //[ 'balance', 'roll_number' ] it will not print inherit properties

for(let key in obj2)
{
    console.log(key); //balance roll_number name age gender it wil print inherit also and this is the differnce between both
}
