// Question 1 2 & 3
let age;
do {
    age = prompt("Enter your age");
    if (age >= 18) {
        alert("You can drive");
    } else {
        alert("You are too young!!");
    }
    if (age < 0) {
        console.error("Age is Negative");
    } else {
        console.warn("Age is valid");
    }
} while (confirm("Do you want to enter your age again?"));

// Question 4
let n;
n = prompt("Enter a Number");
if (n > 4){
    location.href = "https://www.google.com"
}
else{
    alert("The number is less than 4");
}

// Question 5
let color;
color = prompt("Enter a color");
if (color === "red"){
    document.body.style.backgroundColor = "red";
}
else if (color === "green"){
    document.body.style.backgroundColor = "green";
}