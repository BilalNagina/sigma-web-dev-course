console.log("Hello, world!");
let a = [1,2,3,44,33]
// console.log(a.toString());
// console.log(a)
// a.forEach((value,index,arr) => {
//     console.log(value,index,arr);
// });
for (const value of a) {
    console.log(value)
}
// let a1 =[2,3,4]
// let a2 = [3,4,5]
// let c = a.concat(a1,a2)
// console.log(c)
// console.log(a.join(" and "))
// question 1
// let a = [1, 2, 3, 4, 5];
// let b = prompt('Enter a number: ');
// a.push(b);
// console.log(a);

// question 2
// let a = [1, 2, 3, 4, 5];

// let b;
// while (true) {
//   b = Number(prompt("Enter a positive number (Except Zero): "));

//   if (b > 0) {
//     a.push(b);
//     console.log(a);
//   } else if (b == 0) {
//     console.log("You entered zero. Please enter a positive number");
//     break;
//   } else {
//     console.log("Enter a valid number");
//   }
// }

// question 3

// let a = [10, 15, 120];
// let b = Number(prompt('Enter a number: '));
// a.push(b);
// console.log(a);
// function ten(a) {
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] % 10 == 0) {
//             console.log(a[i]);
//         }
//     }
// }
// ten(a);

// filter method
// let c = [10, 1, 2, 3, 15, 13];
// const small = (e) => {
//   if (e > 5) {
//     return true;
//   }
//   return false;
// };
// console.log(c.filter(small));

// question 4

// let a = [10, 15, 13];
// let newa = [];
// for (let i = 0; i < a.length; i++) {
//     newa.push(a[i] ** 2);
// }
// console.log(newa);
// let b = a.map((e) => {
//   return e ** 2;
// });
// console.log(b);

// question 5

// let a = [1,2,3,4,5];
// const func = (a,n) =>{
//     return a*n
// }
// console.log(a.reduce(func));



