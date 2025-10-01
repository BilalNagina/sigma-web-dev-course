let age = 20;
// Question 1
if (age > 10 || age < 20) {
  console.log("Age is between 10 & 20");
}
// Question 2
switch (true) {
  case age > 18:
    console.log("Age is greater than 18, Age: " + age);
    break;
  case age < 18:
    console.log("Age is less than 18, Age: " + age);
    break;
  default:
    console.log("Age is not valid");
}
// Question 3
if (age % 2 == 0 && age % 3 == 0) {
  console.log("Age is divisible by 2 and 3");
} else {
  console.log("Age is not divisible by 2 and 3");
}
// Question 4
if (age % 2 == 0 || age % 3 == 0) {
  console.log("Age is divisible by 2 and 3");
} else {
  console.log("Age is not divisible by 2 and 3");
}
// Question 5

age > 18 ? console.log("you can drive!") : console.log("You cannot drive!");
