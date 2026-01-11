let obj ={
    name:"vijay",
    age:22,
    gender:"male"
};

//console.log(Object.getOwnPropertyDescriptor(obj,"name"));
// {
//   value: 'vijay',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }

Object.defineProperty(obj,"name",{
    writable:false,
});

obj.name="aashu"; //nope it will not change
console.log(Object.getOwnPropertyDescriptor(obj,"name"));
// {
//   value: 'vijay',
//   writable: false,
//   enumerable: true,
//   configurable: true
// }

//it is not for hacker safety , it is for your accidental change