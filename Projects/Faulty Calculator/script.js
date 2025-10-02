let a = prompt("Enter the first Number: ");
let b = prompt("Enter your operator: ");
let c = prompt("Enter the Second Number: ");

let random = Math.random();

let obj = {
  "+": "-",
  "*": "+",
  "-": "/",
  "/": "**",
};

if (random > 0.1) {
  console.log(`The Result of ${a} ${b} ${c}`);
  alert(`The result is ${eval(`${a} ${b} ${c}`)}`);
} else {
   b = obj[b];
   alert(`The Result is ${eval(`${a} ${b} ${c}`)}`);
}
