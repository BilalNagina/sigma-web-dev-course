// Question 1
let crr = [33, 2, 61, 15, 27];
let value = parseInt(prompt("Enter the number to add: "));
console.log(crr);

// Question 2
if (value > 0) {
  crr.push(value);
  console.log(crr);
} else {
  console.log(crr);
}

// Question 3
let arr = [20, 24, 30, 70, 43, 50, 10];
console.log(
  arr.filter((e) => {
    if (e % 10 == 0) {
      return e;
    }
    return 0;
  })
);

// Question 4
console.log(
  arr.map((e) => {
    return e * e;
  })
);

// Question 5
let a = 5;

function Fact(number) {
  let brr = Array.from(Array(number + 1).keys());
  let c = brr.slice(1).reduce((a, b) => {
    return a * b;
  });
  return c;
}
console.log(Fact(a));
