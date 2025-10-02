let onj = {
  Harris: "98",
  Bilal: "68",
  Raihan: "70",
};
// Question 1 - using For Loop
let keys = Object.keys(onj); // Object is converted into an array Having Object Keys only.
for (let i = 0; i < keys.length; i++) {
  let key = keys[i];
  const element1 = onj[key];
  console.log(key, element1);
}
// Question 2 - Using For-In loop
for (const key in onj) {
  const element = onj[key];
  console.log(key, element);
}
// Question 3
let age;
do {
  age = parseInt(prompt("Enter the Correct Number: "), 10);
  if (age !== 5) {
    console.log("Try Again!");
  }
} while (age !== 5);
console.log("Correct!");

// Question 4
function mean(a, b=3, c, d=6 ,e) {
  return (a + b + c + d + e) / 5;
  // console.log("The mean value of these number is (using console):" + ((a + b + c + d + e) / 5) )
}
// mean(2,5,3,8,7); //Direct Function call
let mean_value = mean(4,5,7,8,2); //Function call using a variable
console.log("The Mean of the numbers is: " + mean_value);
