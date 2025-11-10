async function sleep() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(45);
    }, 700);
  });
}
console.log(q);
hello("jjblkjq");
// IIFE - Immediate Invoked Function Execution, No Calling required.
(async function main() {
  let a = await sleep();
  console.log(a);

  let b = await sleep();
  console.log(b);
})();

// Destructuting

let [x,y] = [10,23]
console.log(x,y); // x is assigned 10 and y is assigned 23.

let [v,w, ...rest] = [34,21,4,78,90,5];
console.log(v,w,...rest); // v=34, w=21 and rest will have the remaining array, rest = [4,78,90,5]

// Destructuring for objects....
const obj = {
    naam: "bilal",
    subject: "English",
    grade: "W",
}
console.log(obj);
const {naam} = obj; // Here we use the key as parameter to derive value from the object.
const {grade,subject} = obj;
console.log(naam);
console.log(grade,subject);

// Here c becomes an object which stores a and b as keys.
const a = "ffff"
const b = "fsdf"
const c = {a,b}
console.log(c);

// Spread syntax

function sum(a,b,c) {
    return a+b+c;
}

let arr = [23,52,32]

console.log(sum(arr[0],arr[1],arr[2]));
console.log(sum(...arr)); //Using Spread syntax

// Hoisting - Only used for var
var q = 6; //this is printed on line 8
// The output on line 8 shows "Undefined For var" because the var is hoisted and declared at top as "var q", hence it shows undefined.
// whereas "let" or "const" will display an error. 
function hello(char) {
    console.log(char); //The function is called on line 9, so the function is hoisted on top.
}

