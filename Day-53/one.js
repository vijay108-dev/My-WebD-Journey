// const cart = ["Pizza","Sandwitch","Coke"];


// function placeOrder(cart){
//     console.log("Talking with Domino's");
     
//     const pr = new Promise(function(resolve,reject){

//         setTimeout(()=>{
            
//            const food_available = true;
//             if(food_available){
//             console.log("Order Placed Succesfully");
//             const order = {orderId: 221 , food: cart , restaurant: "Dominos", location:"Dwarka"}
//             resolve(order);
//             }
//             else{
//                 reject("Items Out of Stocks");
//             }
//            },2000)

//     })


//     return pr;
// }

// function preparingOrder(order){
//     console.log("Pizza preparation started....");

//     const pr = new Promise(function(resolve,reject){

//         setTimeout(()=>{
//             console.log("Pizza preparation Done");
//             const foodDetails = {token: 12 , restaurant: order.restaurant, location: order.location};
//             resolve(foodDetails);
//            },5000)
//     })

//     return pr;
// };

// function pickupOrder(foodDetails){
//     console.log("Reaching restaurant for picking order")
    
//     const pr = new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             console.log("Order picked up by Delivery Boy");
//             const droplocation = foodDetails.location;
//             resolve(droplocation);
//            },3000)

//     })

//     return pr;

    
// }

// function deliverOrder(droplocation){
//     console.log("Delivery boy on the way");

//     setTimeout(()=>{
//         console.log("Order Delivered succesfully");
//     },5000)
// }


//async task takes time so we use await dependency

// const order = await placeOrder(cart);
// const foodDetails = await preparingOrder(order);
// const droplocation = await pickupOrder(foodDetails);
// deliverOrder(droplocation);



// async function greet() {
//     const order = await placeOrder(cart);
//     const foodDetails = await preparingOrder(order);
//     const droplocation = await pickupOrder(foodDetails);
//     deliverOrder(droplocation);
// }

// greet();

//always use await in function you don't use outside , if you use openly then problem will occur

// placeOrder(cart)
// .then(order=>preparingOrder(order)) //.this -> in the end what was I doing? I was waiting until my data arrived. I wouldn’t go inside until then, because this is an asynchronous task
// .then(foodDetails=>pickupOrder(foodDetails))
// .then(droplocation=>deliverOrder(droplocation))
// .catch(error=>console.log(error));




// const p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Hello");
//     },5000);
// });

// //console.log(p1); //No never it is my async task
// //p1.then((response)=>console.log(response));

// async function greet() 
// {
//     const data = await p1;
//     console.log(data);
// }

// greet();





// const p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Hello");
//     },5000);
// });

// async function greet() 
// {
//     const data1 = await p1;
//     console.log(data1);

//     const data2 = await p1; //why he did not wait for 5 sec ? promise resolve not parellel
//     console.log(data2);
// }

// greet();




// const p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("First promise resolved");
//     },5000);
// });

// const p2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Second promise resolved");
//     },5000);
// });

// //The ones above are running in parallel not the ones inside

// async function greet() 
// {
//     const data1 = await p1;
//     console.log(data1);

//     const data2 = await p2;
//     console.log(data2);
// }

// greet();

//IN await wait, thennext one will not execute



// const p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("First promise resolved");
//     },8000);
// });

// const p2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Second promise resolved");
//     },5000);
// });
// p1.then(value=>console.log(value));

// p2.then(value=>console.log(value));


//await jb tk mera data nhi aa jata me next instruction execute nhi kruga



// function test1(){
//     const p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("First promise resolved");
//     },5000);
// })
//   return p1;

// }

// function test2(){
//     const p2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Second promise resolved");
//     },5000);
// })

//   return p2;

// }

// async function greet() 
// {
//     const data1 = await test1();
//     console.log(data1);

//     const data2 = await test2();
//     console.log(data2);  
// }

// greet(); //we could not get the answer paralle when 5 sec complete first promise resolve then after 5 sec second problem resolved look the function greet()







// async function meet(params) {
//     return "Hello"; //it is consider as promise it always return promise,  if you do not return anything then it will make undefined to promise
    
// }

// meet().then(value=>console.log(value)); //Hello




// async function meet(params) {
   
// }

// meet().then(value=>console.log(value)); //undefined






// function test1(){
//     const p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("First promise resolved");
//     },5000);
// })
//   return p1;

// }

// function test2(){
//     const p2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Second promise resolved");
//     },5000);
// })

//   return p2;

// }

// async function greet() 
// {
//     console.log("Hello I will call you greet");
//     const data1 = await test1();
//     console.log(data1);

//     const data2 = await test2();
//     console.log(data2);  
// }

// greet(); 

// console.log("Anime fan");
// console.log("I am the best");

//function freez await test1()

//output
//Hello I will call you greet
//Anime fan
// I am the best
// First promise resolved
// Second promise resolved





// const cart = ["Pizza","Sandwitch","Coke"];


// function placeOrder(cart){
//     console.log("Talking with Domino's");
     
//     const pr = new Promise(function(resolve,reject){

//         setTimeout(()=>{
            
//            const food_available = true;
//             if(food_available){
//             console.log("Order Placed Succesfully");
//             const order = {orderId: 221 , food: cart , restaurant: "Dominos", location:"Dwarka"}
//             resolve(order);
//             }
//             else{
//                 reject("Items Out of Stocks");
//             }
//            },2000)

//     })


//     return pr;
// }

// function preparingOrder(order){
//     console.log("Pizza preparation started....");

//     const pr = new Promise(function(resolve,reject){

//         setTimeout(()=>{
//             console.log("Pizza preparation Done");
//             const foodDetails = {token: 12 , restaurant: order.restaurant, location: order.location};
//             resolve(foodDetails);
//            },5000)
//     })

//     return pr;
// };

// function pickupOrder(foodDetails){
//     console.log("Reaching restaurant for picking order")
    
//     const pr = new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             console.log("Order picked up by Delivery Boy");
//             const droplocation = foodDetails.location;
//             resolve(droplocation);
//            },3000)

//     })

//     return pr;

    
// }

// function deliverOrder(droplocation){
//     console.log("Delivery boy on the way");

//     setTimeout(()=>{
//         console.log("Order Delivered succesfully");
//     },5000)
// }


// async function greet() {

//     try{
//     const order = await placeOrder(cart);
//     const foodDetails = await preparingOrder(order);
//     const droplocation = await pickupOrder(foodDetails);
//     deliverOrder(droplocation);
//     }
//     catch(error){
//         console.log(error);
//     }
// }


// greet();








function test1(){
    const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("First promise resolved");
    },5000);
})
  return p1;

}

function test2(){
    const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Second promise resolved");
    },5000);
})

  return p2;

}

async function greet() 
{
    console.log("Hello I will call you greet");
    const [data1,data2] = await Promise.all([test1(),test2()]); //destructuring of array output will come parallel and data independent
    console.log(data1);
    console.log(data2);  
}

greet(); 

console.log("Anime fan");
console.log("I am the best");




