console.log("Faulty Calculator");
let a = prompt("Enter the first number: ");
let c = prompt("Enter the operator: ");
let b = prompt("Enter the second number: ");


let random = Math.random();
let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
}
if (random > 0.1) {
// correct calculation
    console.log(`The result is ${a} ${c} ${b}`);
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
} else {
    // faulty calculation
    c = obj[c];
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}

