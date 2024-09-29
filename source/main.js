let car = {
  manufacturer: "Tesla",
  model: "Tesla Model 3",
  year_of_release: "2017",
  speed: "140 km/h",
};

car.Spec = function(){
alert(JSON.stringify(car));
}

window.onload = () => {
let buttonSpec = document.getElementById("spec1").value;
buttonSpec.addEventListener(click, Spec);
}


function STime() {
  const v = 140;
  let s = Number(document.getElementById("s1").value);
  let t = s / v;
  let stop = Math.trunc(t / 4);
  alert("Необходимое время: " + Math.trunc(t + stop) + " часов");
}

window.onload = () => {
  let buttonCalc = document.getElementById("b1").value;
  buttonCalc.addEventListener("click", STime);
};

let newobject = {
  chis: Number(12),
  znam: Number(3),
};

neweobject.Plus = function() {
  alert("chis + znam");
}

neweobject.Plus();

window.onload = () => {
  let buttonPlus = document.getElementById("p1").value;
  buttonPlus.addEventListener("click", Plus);
};

/*
function Plus() {
  alert(chis + znam);
}

window.onload = () => {
  let buttonPlus = document.getElementById("buttonPlus").value;
  buttonPlus.addEventListener("click", Plus);
};

function Plus() {
  alert(chis + znam);
}

window.onload = () => {
  let buttonPlus = document.getElementById("buttonPlus").value;
  buttonPlus.addEventListener("click", Plus);
};

function Plus() {
  alert(chis + znam);
}

window.onload = () => {
  let buttonPlus = document.getElementById("buttonPlus").value;
  buttonPlus.addEventListener("click", Plus);
};

function Plus() {
  alert(chis + znam);
}

window.onload = () => {
  let buttonPlus = document.getElementById("buttonPlus").value;
  buttonPlus.addEventListener("click", Plus);
};
*/
