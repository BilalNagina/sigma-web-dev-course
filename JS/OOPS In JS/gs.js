class User {
  constructor(username) {
    this.username = username;
  }

  get username() {
    return this._username;
  }
  set username(value) {
    if (value.length < 4) {
      console.log("Less Than 4....");
      return;
    }
    this._username = value;
  }
}

let user = new User("four");
console.log(user.username);

// user = new User("");
user.username = "Bilal";
// console.log(user.username);

//** instancef property
/*
b instanceof sea
true
a instanceof sea
false

*/
