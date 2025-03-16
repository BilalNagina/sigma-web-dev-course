console.log("Script Loaded successfully");

// function factorial(n){
//     if(n<=1){
//         return 1;
//     }
//     return n * factorial(n - 1);
// }
// let number = 5;
// console.log(`Factorial of ${number} is ${factorial(number)}`)

let a = 4;

function factorial(n) {
  let arr = Array.from(Array(n + 1).keys());
  if (n <= 1){
    return 1;
  }
  let result = arr.slice(1).reduce((a, b) => {
    return a * b;
  });
  //   let result = arr.slice(1,).reduce((a, b) => a * b );
  return result;
}
console.log(factorial(a));

function forFact(n) {
  let fac = 1;
  if (n <= 1){
    return 1;
  }
  for (let i = 1; i <= n; i++) {
    fac = fac * i;
  }
  return fac;
}
console.log(forFact(a));
