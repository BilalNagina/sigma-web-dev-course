const delay = (ms) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

let msg = [
  "Initializing Hacking",
  "Reading your Files",
  "Password files Detected",
  "Sending all passwords and personal files to server",
  "Cleaning up",
];
async function random() {
  for (let i = 0; i < msg.length; i++) {
    const div = document.createElement("div");
    div.className = "msg dots";
    div.textContent = msg[i];
    document.body.appendChild(div);
    let d = Math.floor(Math.random() * 6000) + 1000;
    await delay(d);
    div.classList.remove("dots");
  }
}

random();
