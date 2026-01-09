//if-else
// let age = 20;
// if(age>=18){
//   console.log("You are eligible to vote");
// } 
// else{
//   console.log("You are not eligible to vote");
// }

//if-else if-else
// let marks =75;
// if(marks>=90){
//   console.log("Grade A");
// }else if(marks>=60){
//   console.log("Grade B");
// }else if(marks>=40){
//   console.log("Grade C");
// }else{
//   console.log("Fail");
// }

//Switch loop follow strict rule
// let day = 3;
// switch (day){
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
//   default:
//     console.log("Invalid day");
// }


//Loop
// for(let i=1;i<=5;i++){
//   console.log(i);
// }

//sum of first n number
// let n=5;
// let sum=0;
// for (let i=1;i<=n;i++){
//   sum+=i;
// }
// console.log(sum); //15
//js is slow compartively to c++ bcz every i there is a new memeory allocation is provided



//Nested for loop
//12345
//12345
//12345
//12345
//12345
// let n = 5;
// for(let i=1;i<=n;i++){
//   let line = "";
//   for (let j=1;j<=n;j++){
//     line+=j;
//   }
//   console.log(line);
// }


//while loop
// let i=1;
// while(i<6)
// {
//     console.log(i);
//     i++;
// }

//do while loop
// let i =1;
// do{
//   console.log(i);
//   i++;
// }while(i < 6);


//for loop on array
// let arr = [10, 20, 30, 40, 50];
// for (let i=0;i<arr.length;i++){
//   console.log(arr[i]);
// }


const obj={
    name:"vijay",
    age:22,
    gender:"male"
};

const key = Object.keys(obj);
//[ 'name', 'age', 'gender' ]
for(let i=0;i<key.length;i++){
    console.log(obj[key[i]]); //vijay 22 male
}
