let arr = [7, 1, 2, 6, 4, 9];
let brr = [88, 9, 5];
let crr = ["gello", 39, 15];

console.log(arr.length);
arr[4] = 44;
console.log(arr);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[4]);

console.log(arr.join(" and "));
console.log(arr.pop());
console.log(arr.push("Bilal"));
console.log(arr.shift());
console.log(arr.unshift("Talha"));
console.log(arr.concat(crr, brr));
delete arr[3];
console.log(arr.splice(1, 3, 67, 76));
console.log(arr.slice(1));
console.log(arr.slice(2, 4));
console.log(arr.reverse());
console.log(arr);

// Loops
// For Loop
let a = [3, 4, 2, 8, 9];

for (let index = 0; index < a.length; index++) {
  const element = a[index];
  console.log(element);
}

// For Each Loop
a.forEach((value, index, arr) => {
  console.log(value, index, arr);
});

// ForIn loop
let obj = {
  hlo: "44",
  helo: "84",
  hello: "34",
};
for (const key in obj) {
  if (!Object.hasOwn(obj, key)) continue;
  const element = obj[key];
  console.log(key,element);
}

// ForOf
for (const element of a) {
    console.log(element);
}
// ForOf using entries()
for (const [key,element] of a.entries()) {
    console.log(key,element);
}

