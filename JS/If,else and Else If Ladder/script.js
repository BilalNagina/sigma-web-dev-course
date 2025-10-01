console.log("Hello, world!");
let age = 1;
let grace = 2;
// Arithmetic Operators
console.log(age + grace);
console.log(age - grace);
console.log(age * grace);
console.log(age / grace);
console.log(age ** grace);
console.log(age % grace);
let b = 5;
let c = 6;
// Assignment Operators
console.log("+= assgn op Result: " + (b += 2)); // b = b + 2
console.log("-= assgn op Result: " + (b -= 2)); // b = b - 2
console.log("*= assgn op Result: " + (b *= 2)); // b = b * 2
console.log("/= assgn op Result: " + (b /= 2)); // b = b / 2
console.log("**= assgn op Result: " + (b **= 2)); // b = b ** 2
console.log("%= assgn op Result: " + (b %= 2)); // b = b % 2
//  Comparison Operators
/* Ternary Operator*/ 
let c1 = age > 18 ? "You Can Drive" : "You Can't Drive";
console.log(c1);

if (age > 10 && age < 20) {
  console.log("Age is between 10 and 20");
} else if (age >= 20 && age < 30) {
  console.log("Age is not between 10 and 20");
} else {
  console.log("Age is not valid");
}
// OR operation
let a = 3;
if (a % 2 == 0 || a % 3 == 0) {
  console.log("Number is divisible by 2 or 3");
} else {
  console.log("Number is not divisible by 2 or 3");
}
// AND operation
let a1 = 3;
if (a % 2 == 0 && a % 3 == 0) {
  console.log("Number is divisible by 2 and 3");
} else {
  console.log("Number is not divisible by 2 and 3");
}

switch (true) {
  case (age === 1):
    console.log("age is 1");
    break;
  case (age === 2):
    console.log("age is 2");
    break;
  case (age === 3):
    console.log("age is 3");
    break;
  default:
    console.log("age is not 1, 2, or 3");
}
