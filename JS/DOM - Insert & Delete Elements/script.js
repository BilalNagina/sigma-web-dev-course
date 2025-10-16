// **Inserting elements using createElement!**
let div = document.createElement("div");
div.innerHTML = "Salam alaikum! <b>from Bilal</b>";
div.setAttribute("class","created");
// document.querySelector(".container").replaceWith(div);
document.querySelector(".container").append(div);
// document.querySelector(".container").prepend(div);
// document.querySelector(".container").before(div);
// document.querySelector(".container").after(div);

// **Inserting using insertAdjacentHTML!**
let con = document.querySelector(".box1");
// con.insertAdjacentHTML("beforeend","<b>I am Under the WATER</b>");
// con.insertAdjacentHTML("afterend","<b>I am Under the WATER</b>");
con.insertAdjacentHTML("beforebegin","<b>I am Under the WATER</b>");
// con.insertAdjacentHTML("afterbegin","<b>I am Under the WATER</b>");
// con.remove();
console.log(document.querySelector(".container").classList); //classList.toggle("glow");
console.log(document.querySelector(".container").className); //classList.contains("glow");
console.log(document.querySelector(".container").className); //classList.add/remove("glow");

// **Inner and Outer HTML**
// document.querySelector(".box1").innerHTML
// document.querySelector(".container").innerText
// document.querySelector(".container").innerHTML
// document.querySelector(".box").outerHTML
// document.querySelector(".container").textContent
// document.querySelector(".container").innerHTML = "Hey i am bilal"

// **TagName/NodeName**
// document.querySelector(".container").tagName
// document.querySelector(".container").nodeName

// **Hidden Property**
// document.querySelector(".box1").hidden
// document.querySelector(".box1").hidden = true

// **Attribute Properties**
// document.querySelector(".box1").hasAttribute("style")
// document.querySelector(".box1").getAttribute("style")
// document.querySelector(".box1").setAttribute("style","color: blue")
// document.querySelector(".box1").removeAttribute("style")
// document.querySelector(".box1").attributes
// document.querySelector(".box1").dataset - //using `data-` eg: data-createdwith:"love" in the style tag.
