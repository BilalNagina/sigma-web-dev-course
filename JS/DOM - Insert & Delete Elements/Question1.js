// console.log("script is initializing.....");
// let btn1 = document.querySelector(".btn1");
// let btn2 = document.querySelector(".btn2");
// let btn3 = document.querySelector(".btn3");

// btn1.addEventListener("click", function () {
//   alert("Button One is clicked!");
// });

// btn2.addEventListener("click", function () {
//   alert("Button Two is clicked!");
// });

// btn3.addEventListener("click", function () {
//   alert("Button Three is clicked!");
// });

document.querySelectorAll("button").forEach((btn, btnnumber) => {
  btn.addEventListener("click", () => {
    alert(`Button ${btnnumber + 1} is clicked!`);
  });
});


