console.log("This file is for Defining map, filter & reduce method");

// **Traditional way vs using map()**
let arr = [3, 5, 12, 9, 4];
let newArr = [];

for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  newArr.push(element ** 2);
}
console.log(newArr);

newArr = arr.map((value) => {
  return value ** 2;
});
console.log(newArr);

// **Using filter()**

// Method 1 - call the func in the filter method
const BooleanFunc = (e) => {
    if(e > 5){
        return true;
    }
    return false;
}
console.log(arr.filter(BooleanFunc));

// Method 2 - write the function directly into filter
console.log(arr.filter(e => {
    if(e > 5){
        return true;
    }
    return false;
}) )

// **Using reduce**

let arr3 = [5,19,5,12,33];

// Method 1 - Directly write the func into Reduce
console.log(arr3.reduce((a,b) => {
    return a+b;
}));

// Method 2 - Create a func and call it in Reduce
const red = (a,b) => {
    return a+b;
}
console.log(arr3.reduce(red));
