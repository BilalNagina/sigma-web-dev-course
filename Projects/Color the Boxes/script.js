function RandomColor() {
  let r = Math.ceil(Math.random() * 255);
  let g = Math.ceil(Math.random() * 255);
  let b = Math.ceil(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
}

console.log(RandomColor());

let a = document.body.getElementsByClassName("box");
Array.from(a).forEach(e => {
    e.style.backgroundColor = RandomColor();
    e.style.color = RandomColor();
})
