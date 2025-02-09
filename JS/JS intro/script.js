alert("Hello World!");
console.log("Code is running...")

var a = prompt("Enter any number:")
console.log("Your number is " + a)
var verify = confirm("Are you willing to proceed?")
if (verify) {
    console.log("You are willing to proceed")
}
else{
    console.log("You chose not to proceed")
}