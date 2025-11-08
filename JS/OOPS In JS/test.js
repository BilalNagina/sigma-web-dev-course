// Question 1
class complex {
  constructor(real1, real2, imaginary1, imaginary2) {
    this.real1 = real1;
    this.imaginary1 = imaginary1;
    this.real2 = real2;
    this.imaginary2 = imaginary2;
  }
  // Question 5
  get real1() {
    return this._real1;
  }
  set real1(rvalue) {
    this._real1 = rvalue;
  }
  get imaginary1() {
    return this._imaginary1;
  }
  set imaginary1(ivalue) {
    this._imaginary1 = ivalue;
  }
  show() {
    console.log(`${this.real1} + ${this.imaginary1}i`);
  }
  // Question 2
  addcomplex() {
    console.log(
      `${this.real1 + this.real2} + ${this.imaginary1 + this.imaginary2}i`
    );
  }
}
let a = new complex(3, 4, 6, 7);
// Question 5
a.real1 = 23;
a.imaginary1 = 12;
console.log(a.imaginary1);
console.log(a.real1);
a.show();
a.addcomplex();

// Question 3
class human {
  constructor(quality) {
    this.quality = quality;
    console.log("Object Constructor calling...");
  }
  white() {
    console.log("Water is white");
  }
}

let c = new human("Good"); // 'a' holds the object created using 'new water("good")'.
console.log(c);

class student extends human {
  constructor(adj) {
    super(adj);
    console.log("Extended Class is Running....");
  }
  white() {
    super.white();
    console.log("I am a student");
  }
}

let d = new student("Beautiful"); // 'a' holds the object created using 'new water("good")'.
console.log(d);

// Question 4

/* d(object of student) instanceof human
-> true
*/
