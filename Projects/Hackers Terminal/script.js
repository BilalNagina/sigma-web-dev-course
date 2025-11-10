const delay = (ms) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms * 1000);
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
    let d = Math.floor(Math.random() * 6) + 1;
    await delay(d);
    div.classList.remove("dots");
  }
}
//Modern way to write and execute a function immediately
(async () => {
  await random();
  let last = document.createElement("div");
  last.className = "msg";
  last.textContent = "Brother! You are HACKED...cOnGRrATuLaTiOnS";
  document.body.appendChild(last);
})();
// Normally written as:
// async function run() {
//   await random();

//   let last = document.createElement("div");
//   last.className = "msg";
//   last.textContent = "Brother! You are HACKED...cOnGRrATuLaTiOnS";
//   document.body.appendChild(last);
// }
// run();
