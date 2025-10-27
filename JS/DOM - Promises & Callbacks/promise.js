console.log("Let's learn promises");

let prom1 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a > 0.5) {
    reject("The value is greater than 0.5 - prom 1");
  } else {
    setTimeout(() => {
    //   console.log("running one");
      resolve("bilal one");
    }, 200);
  }
});
// **Question 1
prom1
  .then(alert)
  .catch((er) => {
    console.log(er);
  });

let prom2 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a > 0.5) {
    reject("The value is greater than 0.5 - prom 2");
  } else {
    setTimeout(() => {
    //   console.log("running two");
      resolve("bilal two");
    }, 400);
  }
});

// prom2
//   .then((a1) => {
//     console.log(a1);
//   })
//   .catch((er) => {
//     console.log(er);
//   });

// let p3 = Promise.allSettled([prom1, prom2]);
// let p3 = Promise.all([prom1, prom2]);
// let p3 = Promise.race([prom1, prom2]);
// let p3 = Promise.any([prom1, prom2]);
// let p3 = Promise.reject([prom1]);
let p3 = Promise.resolve([prom1]);

p3.then((a1) => {
  console.log(a1);
}).catch((er) => {
  console.log(`From P3 ${er}`);
});


// ** Script Load using Promises
const loadscript = (src1) => {
  return new Promise((resolve, reject) => {
    let sc = document.createElement("script");
    sc.src = src1;
    sc.onload = () => resolve("LOADSCRIPT-IGNORE");
    sc.onerror = () => reject("We are working on it!");
    document.head.append(sc);
  });
};

loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js")
  .then((a1) => {
    console.log(a1);
  })
  .catch((e) => {
    console.log(e);
  });
