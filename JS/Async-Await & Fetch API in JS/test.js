// Question 2 - Chapter 9
// async function calculator() {
//   return new Promise((resolve, reject) => {
//     let b = Math.random();
//     if (b > 0.5) {
//       reject("Rejected!...b is greater than 0.5");
//     } else {
//       setTimeout(() => {
//         resolve("Resolved");
//       }, 2000);
//     }
//   });
// }
// async function main1() {
//   console.log("Script Initialized.....");
//   try {
//     let x = await calculator();
//     alert(x);
//   } catch (error) {
//     alert(error);
//   }
//   alert("Done");
//   console.log("Completed");
// }

// main1();

// Question 3 - Chapter 9
// async function calculator1() {
//   return new Promise((resolve, reject) => {
//     let a = Math.random();
//     if (a > 0.5) {
//       setTimeout(() => {
//         reject("Rejected Two!...a is greater than 0.5");
//       }, 3000);
//     } else {
//       resolve("Resolved Two");
//     }
//   });
// }
// async function main2() {
//   console.log("Script 2 Initialized.....");
//   try {
//     let x = await calculator1();
//     console.log(x);
//   } catch (error) {
//     console.log(error);
//   }
//   alert("Done Two");
//   console.log("Completed Two");
// }

// main2();

// **Question 3**
let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1");
  }, 1000);
});
let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2");
  }, 5000);
});
let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 3");
  }, 7000);
});

async function main() {
  console.log("Start");

  let r1 = await p1;
  console.log(r1);
  let r2 = await p2;
  console.log(r2);
  let r3 = await p3;
  console.log(r3);

  const p = await Promise.all([p1, p2, p3]);
  console.log(p);
  console.log("End");
}

main();
