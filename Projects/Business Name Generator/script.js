console.log("Marhaba! Welcome to my Page");
let random = Math.random();
console.log(random);
let a, s, w;

if (random < 0.33) {
  a = "Crazy";
} else if (random > 0.33 && random < 0.66) {
  a = "Amazing";
} else {
  a = "Fire";
}
random = Math.random();
console.log(random);
if (random < 0.33) {
  s = "Engine";
} else if (random > 0.33 && random < 0.66) {
  s = "Dishdasha";
} else {
  s = "Food";
}
random = Math.random();
console.log(random);
if (random < 0.33) {
  w = "Bros";
} else if (random > 0.33 && random < 0.66) {
  w = "LLC";
} else {
  w = "Hub";
}
console.log(`${a} ${s} ${w}`)