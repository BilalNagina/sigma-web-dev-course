console.log("salaam");

let boxes = document.getElementsByClassName("box");
console.log(boxes);

boxes[3].style.backgroundColor = "red";

document.getElementById("redo").style.color = "blue";

document.querySelector(".box").style.backgroundColor = "blue";

console.log(document.querySelectorAll(".box"));

document.querySelectorAll(".box").forEach(e => { //Returns a Nodelist, so iterate through each element.
    e.style.backgroundColor = "cyan";
})

// document.getElementsByName(".box")