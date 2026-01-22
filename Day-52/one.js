//asyn task cannot imediately run like fetch()
//weatherapi.com


//The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

//http://api.weatherapi.com/v1/current.json?key=8ac4bc9504d6436bb8633607262201&q=London&aqi=yes

// const obj = fetch(`http://api.weatherapi.com/v1/current.json?key=8ac4bc9504d6436bb8633607262201&q=London&aqi=yes`);
// console.log(obj); //Promise { <pending> } it will give you promise. it is asynch task that's why we get this output


// const obj = fetch(`http://api.weatherapi.com/v1/current.json?key=8ac4bc9504d6436bb8633607262201&q=London&aqi=yes`);
// setTimeout(()=>{ 
//     console.log(obj);
//  },2000); //it will give your answer but the problem is how can you identify the time bcz data is unprdictable what time it will come we could not define




// const promises = fetch(`http://api.weatherapi.com/v1/current.json?key=8ac4bc9504d6436bb8633607262201&q=London&aqi=yes`);

// promises.then((response)=>{
//     console.log(response);
// });

//agr promise me value jb tk nhi aa jati ye nhi chalega bcz ye async task h kuch time lega data lane me synch task nhi h ye jo aak dam se print kr dega



//pending , resolve and reject example: Instagram
// const promises = fetch(`http://api.weatherapi.com/v1/current.json?key=8ac4bc9504d6436bb8633607262201&q=London&aqi=yes`);

// promises.then((response)=>{
//     console.log(response);
// }).catch((error)=>{
//     console.log(error);
// });




// const promises = fetch(`http://api.weatherapi.com/v1/current.json?key=8ac4bc9504d6436bb8633607262201&q=London&aqi=yes`);

// promises.then((response)=>{
//     console.log(response.json()); //Promise { <pending> } this is also my async task it cannot run immediately
// });

//we cannot print direct async task bcz it takes some time


// const promises = fetch(`http://api.weatherapi.com/v1/current.json?key=8ac4bc9504d6436bb8633607262201&q=London&aqi=yes`);

// promises.then((response)=>{
//     const pro2 = response.json();
//     pro2.then((data)=>{
//         console.log(data); //it will work
//     });
// });


//2nd way to write this
// const promises = fetch(`http://api.weatherapi.com/v1/current.json?key=8ac4bc9504d6436bb8633607262201&q=London&aqi=yes`);

// const pro2 = promises.then((response)=>{
//    return response.json();
// });

//  pro2.then((data)=>{
//         console.log(data); //it will work
// });


//3rd way to write this this is my promise chaining
// const promises = fetch(`http://api.weatherapi.com/v1/current.json?key=8ac4bc9504d6436bb8633607262201&q=London&aqi=yes`);

// const pro2 = promises.then((response)=>{
//    return response.json();
// }).then((data)=>{
//         console.log(data); //it will work
// });


//4th way to write this
// const promises = fetch(`http://api.weatherapi.com/v1/current.json?key=8ac4bc9504d6436bb8633607262201&q=London&aqi=yes`);

// //Arrow function remember single parameter
// promises
// .then(response=>response.json())
// .then(data=>console.log(data));


// //5h way clean code
// fetch(`http://api.weatherapi.com/v1/current.json?key=8ac4bc9504d6436bb8633607262201&q=London&aqi=yes`)
// .then(response=>response.json())
// .then(data=>console.log(data))
// .catch(error=>console.log(error));



//if you want any type of data 
//agr aapko reponse ko body part chaiya to json me kruga response.json mera promise h jo raw data h vo json formet me aayega mera pass
fetch(`http://api.weatherapi.com/v1/current.json?key=8ac4bc9504d6436bb8633607262201&q=London&aqi=yes`)
.then(response=>response.json())
.then(data=>console.log(data.current.temp_c)) //8.3
.catch(error=>console.log(error));

