//for in loop: why we do not use with array
//array is an object

const arr = [12,34,56,78,90];
arr.name="vijay";
for(let key in arr)
{
    console.log(key, arr[key]);
}
// 0 12
// 1 34
// 2 56
// 3 78
// 4 90
// name vijay that is why we do not use array in for loop

// for...in loop: why we do not use it with arrays
// for...in iterates over keys (indexes) and also inherited enumerable properties
// arrays are objects, so extra properties or prototype methods can be included
// the order of keys is not guaranteed
// that is why for arrays we prefer for, for...of, or forEach
// for in loop only see enumerbale