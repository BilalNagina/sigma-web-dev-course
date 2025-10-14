  let p = document.querySelector(".parent");

function cardpng(title, cname, views, months, duration, thumbnail) {

  let con = document.createElement("div");
  con.className = "container";

  let rightdiv = document.createElement("div");
  rightdiv.className = "rightdiv";
  con.append(rightdiv);

  let div = [];
  for (let index = 0; index < 5; index++) {
    div[index] = document.createElement("div");
  }
  div[0].className = "title";
  rightdiv.append(div[0]);
  div[0].innerHTML = title;

  div[1].className = "cname";
  rightdiv.append(div[1]);
  div[1].innerHTML = cname + " •";

  div[2].className = "views";
  rightdiv.append(div[2]);
  if (views > 999) {
    div[2].innerHTML =
      (views / 1000).toFixed(1).replace(/\.0$/, "") + "K" + " •";
  } else {
    div[2].innerHTML = views + " •";
  }

  div[3].className = "months";
  rightdiv.append(div[3]);
  div[3].innerHTML = months + " months";

  let div4 = document.createElement("div");
  div4.className = "duration";
  con.append(div4);
  div4.innerHTML = duration;

  let div5 = document.createElement("div");
  div5.className = "thumbnail";
  con.append(div5);
  div5.innerHTML = `<img src="${thumbnail}" alt="">`;

  p.append(con);
}

console.log(
  cardpng(
    "Introduction to Classification | ML Course",
    "Bilal Nagina",
    40000,
    4,
    "22:10",
    "assets/ml.png"
  )
);
console.log(
  cardpng(
    "Mastering Kubernetes in 60 Minutes | DevOps Crash Course",
    "Tech with Bilal",
    185000,
    2,
    "59:42",
    "assets/kubernetes.png"
  )
);

console.log(
  cardpng(
    "Understanding Docker Networks | Complete Guide",
    "Cloud Academy",
    98000,
    6,
    "34:18",
    "assets/docker.png"
  )
);

console.log(
  cardpng(
    "Build a Netflix Clone with HTML, CSS & JS",
    "Frontend Simplified",
    412000,
    1,
    "48:25",
    "assets/netflix.png"
  )
);

console.log(
  cardpng(
    "Machine Learning Models Explained | Intuition + Math",
    "AI Simplified",
    76000,
    5,
    "39:07",
    "assets/mlmodel.png"
  )
);

console.log(
  cardpng(
    "Deploying Web Apps on GCP | End-to-End Tutorial",
    "Bilal Codes",
    120000,
    3,
    "55:14",
    "assets/gcp.png"
  )
);
