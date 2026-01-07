//Date in JS
//const d = new Date();
// console.log(d);  //2026-01-06T11:48:02.831Z. T means time zone international one 
// console.log(d.toDateString()); //Tue Jan 06 2026
// console.log(d.toString()); //Tue Jan 06 2026 17:21:45 GMT+0530 (India Standard Time)
// console.log(d.toISOString()); //2026-01-06T11:54:56.480Z


// const d = new Date();
// console.log(typeof d); //object

//He is taking time from system clock if i change the time of system clock here is also change my time.


//In JavaScript, Date works on milliseconds counted from a fixed start point. 1s=1000ms
//That fixed start point is January 1, 1970, 00:00:00 UTC, called the Unix Epoch.

// const d = new Date();
//console.log(d); //1970-01-01T00:00:01.000Z

//console.log(d.getDate()); //6
//console.log(d.getDay()); //2
//Sunday, Monday, Tuesday, Wednesday ,Thursday, Friday, Saturday
//0         1         2       3          4        5        6

//console.log(d.getMonth()); //0
//Tiket booking for millisecond

 
// const d = new Date("2022-10-12"); //custom date string format
// console.log(d);//whenever you put string format so your month start like normal 1,2,3... 1 means jan 2 means feb
// console.log(d.toDateString()); //Wed Oct 12 2022



// const date = new Date(2022,10,12); //Number form
// console.log(date); //2022-11-11T18:30:00.000Z
// console.log(date.toString()); //Sat Nov 12 2022 00:00:00 GMT+0530 (India Standard Time) 

//Number: 0 based start
//String: 1based start


//Date Calculation
// const date1 = new Date();
// const date2 = new Date("2025-04-21");

// console.log(date2>date1); //false
// console.log(date2-date1); //-22567382171 date store in milisecond



//Countdown Timer for olympics
//Days, hour, minute, second

const date1 = new Date();
const date2 = new Date("2028-07-14T00:00:00")

const date = date2-date1;
const days = Math.floor(date/(1000*60*60*24));
//console.log(days); //918

const hour = Math.floor((date/(1000*60*60))%24);
//console.log(hour); //13

const minute = Math.floor((date/(1000*60))%60);
//console.log(minute); //32

const second = Math.floor((date/(1000))%60);
//console.log(second);  //16

console.log(`Olympics CountdownTime: Days: ${days} hour:${hour} minute:${minute} second:${second}`);

