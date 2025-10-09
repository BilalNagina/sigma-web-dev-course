// ** Question 1 2 & 3 **
let age;
do {
  age = parseInt(prompt("Enter your Age"));

  if (age > 18) {
    alert("You can Drive!");
  } else if (age < 0) {
    console.error("Wrong value");
  } else {
    alert("You cannot Drive!");
  }
} while (confirm("Do you want to see the prompt Again!"));

// ** Question 4 **
let n;
n = parseInt(prompt("Enter any Number:"));

if (n > 4) {
  window.location.href = "https://www.google.com";
} else {
  alert("You will stay on the same page");
}

// ** Question 5 **
let color;
color = prompt("Enter any color");

document.body.style.backgroundColor = color;
