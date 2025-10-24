// **Asynchronous Nature in JS - Start
/*
console.log("hello one");
console.log("hello two");

setTimeout(() => {
    console.log("asynchronous one");
}, 2000);
setTimeout(() => {
    console.log("asynchronous two");
}, 1000);

console.log("hello three");
*/
// **Asynchronous Nature in JS - End
const callback = (arg) => {
  console.log(arg);
}

const loadScript = (sourceurl,callback) => {
  let sc = document.createElement("script");
  sc.src = sourceurl;
  sc.onload = () => callback("Bilal");
  document.head.append(sc);
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback);
















