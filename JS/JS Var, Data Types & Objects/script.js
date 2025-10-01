console.log("Hey there");
var a1 = 10; // if value is not defined, default initialized with 'undefined'
let a3 = 20; // if value is not defined, default initialized with 'NaN'
a3 = a3 + 10;
const a = 10; // must be initialized
var b = 20;
// var c = "bilal"

console.log("const global " + a);
{
  var a1 = 45;
  let a3 = 45;
  a3 = a3 + 10;
  const a = 45;
  // a = a+10
  console.log("let block " + a3);
  console.log("var block " + a1);
  console.log("const block " + a);
}
console.log("let global " + a3);
// console.log(a+b+3)
// console.log("const global" + a)
console.log("var global " + a1);
let x = 10;
let y = "bilal";
let w = 10.555;
let z = true;
let a2 = null;
let b2 = undefined;
let c2 = [1, 2, 3, 4, 5];
let d2 = {
  "name is": "bilal",
  "age code": 20,
  isStudent: true,
};
d2["name is"] = "1000crores";
console.log(x, y, w, z, a2, b2, c2);
console.log(
  typeof x,
  typeof y,
  typeof w,
  typeof z,
  typeof a2,
  typeof b2,
  typeof c2
);
console.log(d2);
