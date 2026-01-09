// let obj = {};
// console.log(obj);

// obj.name="vijay";
//key value writable, enumerable, configurable
//console.log(obj); //{ name: 'vijay' }

//console.log(Object.getOwnPropertyDescriptors(obj,'name'));
// {
//   name: {
//     value: 'vijay',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   }
// }
//writable true means you can change the value you can make vijay to sanya if writable false then you can not change the value it will give you error
//configurable true means you can change the value of writable enumerable and configurable means true converts into false if it is false then you can not change the value


// let obj ={};

// Object.defineProperty(obj, 'name', {
//     value:"vijay",
//     writable:true,
//     enumerable:true,
//     configurable:true,
// })

// console.log(obj); //{ name: 'vijay' }



// const obj1 = {
//     name:"vijay",
//     age:22,
//     accountNumber: 123456789
// };

// Object.defineProperty(obj1, 'accountNumber', {
//     writable: false
// });

// obj1.accountNumber = 987654321;

// console.log(obj1.accountNumber); // 123456789 it will not change




// const customer ={
//     name:"vijay",
//     age:22,
//     gender:"male",
//     balance:100000
// };

// let customer2 = Object.create(customer)
// customer2.city = "pilani";
// customer2.place = "Delhi";

// Object.defineProperty(customer, 'name', {
//     enumerable: false,
// });

// enumerable means:
// Only the keys whose enumerable value is true will be printed or accessible.
// If a property or key comes through inheritance and its enumerable value is true,
// then that property will also be printed.


// for(let key in customer){
//     console.log(key); //age gender balance
// }

//that is why tostring properties are not printed bcz whose enurable is false you will check
//console.log(Object.getOwnPropertyDescriptor(Object.prototype, 'toString'));
// {
//   value: [Function: toString],
//   writable: true,
//   enumerable: false,
//   configurable: true
// } here you see enum is false that is why he is not printing object.prototype values or you can say that properties





// const customer ={
//     name:"vijay",
//     age:22,
//     gender:"male",
//     balance:100000
// };

// let customer2 = Object.create(customer)
// customer2.city = "pilani";
// customer2.place = "Delhi";

// Object.defineProperty(customer, 'name', {
//     enumerable: false,
// });

// Object.defineProperty(Object.prototype,'toString',{
//     enumerable:true,
// })

// for(let key in customer){
//     console.log(key); //age gender balance toString
// }



//Object.defineProperties

//Syntax
// Object.defineProperties(obj, {
//     key1: { descriptor },
//     key2: { descriptor }
// });

let account = {};

Object.defineProperties(account, {
    accountNo: {
        value: 12345,
        writable: false,
        enumerable: true
    },
    balance: {
        value: 5000,
        writable: true,
        enumerable: true
    }
});

console.log(account);
// { accountNo: 12345, balance: 5000 }

// Important default behavior
// If you don’t specify:

// writable: false
// enumerable: false
// configurable: false
// By default everyone is false