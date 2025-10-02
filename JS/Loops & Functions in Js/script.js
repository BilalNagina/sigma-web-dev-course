console.log("Loops tutorial");
let a = 4;
// fro loop is used for looping through a block of code!
for (let i1 = 0; i1 < 100; i1++) {
  console.log(a + i1);
}

let details = {
  name: "Bilal",
  occupation: "Student",
  age: "22",
};
let info = {
  name: "Talha",
  occupation: "Student",
  age: "21",
};
details.family = "Nagina";
details["salary amount"] = "200000";
for (const key in details) {
  const value = details[key];
  console.log(key, value);
}
// Used for looping through keys of an object!
for (const key in info) {
  console.log(key);
}
// Used for Iterable data strcutures like Arrays,strings!
for (const element of "Nagina") {
  console.log(element);
}

let g = 6;
// Condition is checked first
while (g < 6) {
  g++;
  console.log(g);
}
let h = 7;
// Condition is checked at last
console.log("Do while loop");
do {
  console.log(h);
  h++;
} while (h < 6);

// Functions
function nice(name) {
  console.log("Hala, " + name + " here");
  console.log("Hala, " + name + " here");
  console.log("Hala, " + name + " here");
  console.log("Hala, " + name + " here");
}
nice("Bilal");
nice("Talha");

function sum(a, b, c = 5) {
  //c is default value
  // console.log(a + b);
  return a + b + c;
}

result1 = sum(4, 5);
result2 = sum(6, 7);
result3 = sum(3, 9, 7); // "7" will be used as c

console.log("The sum of these numbers is: " + result1);
console.log("The sum of these numbers is: " + result2);
console.log("The sum of these numbers is: " + result3);

//Arrow Function
const func = (x) => {
  console.log("The value is: " + x);
};

func(23);
func(43);
func(54);
