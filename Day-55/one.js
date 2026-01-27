const arr = [1, 2, 3, 4, 5];
const reversed = arr.reverse();
console.log(reversed); 




function fibonacci(n) {
  let a = 0, b = 1;
  const series = [a, b];
  for (let i = 2; i < n; i++) {
    let c = a + b;
    series.push(c);
    a = b;
    b = c;
  }
  return series;
}

console.log(fibonacci(10)); 



const numbers = [1,2,3,4,5,6,7,8];
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2,4,6,8]
