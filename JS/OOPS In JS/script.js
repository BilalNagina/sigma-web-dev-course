// const obj = {
//   name: "bilal",
// };

// let water = {
//   blue: true,
// };
// let rain = {
//   white: true,
// };

// rain._proto_ = water;

class water {
  constructor(quality) {
    this.quality = quality;
    console.log("Object Constructor calling...");
  }
  blue() {
    console.log("water is blue!");
  }
  white() {
    console.log("Water is white");
  }
}

let a = new water("Good"); // 'a' holds the object created using 'new water("good")'.
console.log(a);

class sea extends water {
  constructor(nam) {
    super(nam); // super is used to call the parent constructor, we use super instead of this.
    console.log("Extended Class is Running....");
  }
   white() {
    super.white(); // To call the parent method 
    console.log("Water is white as hailllll....");
  }
}

let b = new sea("Beautiful"); // 'a' holds the object created using 'new water("good")'.
console.log(b);