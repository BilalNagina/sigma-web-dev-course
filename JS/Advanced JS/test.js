console.log("Initializing script....");
console.log("");
console.log("Question 1");
// Question 1
async function intro() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(console.log("Hello"));
      resolve(console.log("world"));
    }, 2000);
  });
}

(async function main() {
  await intro();
  console.log("");
  // Question 2
  console.log("Question 2");
  console.log(avg(...arr));
  try {
    let c = await three(2000);
    console.log(c);
  } catch (err) {
    console.log(err);
  }
  let pa = interest(...arr1);
  console.log(pa);
})();

// let arr = [2, 4, 9, 13, 20, 25, 28, 34, 46, 55];
// function avg(arr) {
//   let a = 0;
//   for (let i = 0; i < arr.length; i++) {
//     a = a + arr[i];
//   }
//   return a / arr.length;
// }

// console.log(avg(arr));
let arr = [2, 4, 9];
function avg(a, b, c) {
  return (a + b + c) / 3;
}

// Question 3
async function three(n) {
  return new Promise((resolve, reject) => {
    if (n < 0) {
      reject("Try Again");
    } else {
      setTimeout(() => {
        resolve(45);
      }, n);
    }
  });
}

// Question 4
let arr1 = [6790, 6.3, 1.5];
function interest(p, r, t) {
  return (p * r * t) / 100;
}
