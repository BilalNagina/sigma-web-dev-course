let btn = document.getElementById("btn");
// **List of all mouse events**
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

btn.addEventListener("dblclick", () => {
  document.querySelector(".con").innerHTML = "hello sir<b> Enjoying?</b>";
});

btn.addEventListener("contextmenu", () => {
  alert("Dont right click please");
});

document.addEventListener("keydown", (e) =>{
console.log(e.key);
})