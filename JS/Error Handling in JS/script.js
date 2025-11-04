// let error = new SyntaxError("invalid");
let a = prompt("Enter first number");
let b = prompt("Enter second number");
if (isNaN(a) || isNaN(b)) {
  throw SyntaxError("Not Allowed");
  //   throw new Error("Not Allowed");
}
let sum = parseInt(a) + parseInt(b);
function main() {
  let x = 1;
  try {
    console.log(sum * x);
    return true
  } catch (error) {
    console.log('error');
    
    // alert(error.name);
    // alert(error.stack);
    return false;
  } finally {
    // Used in Functions to run after a retuen statement
    console.log("Files are being Closed!");
  }
}
let d = main();

