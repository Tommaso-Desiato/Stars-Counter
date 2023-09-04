let counter = 0;
let container = document.querySelector(".container")

//Crea il display 
let display = document.createElement("div");
display.innerHTML = `${counter}`;
container.appendChild(display);

//Bottone "-"
let btnMinus = document.createElement("button");
btnMinus.innerHTML = "-";
container.appendChild(btnMinus);

btnMinus.addEventListener("click", function() {
  counter--;
  display.innerHTML = `${counter}`;
})
// Bottone "+"
let btnPlus = document.createElement("button");
btnPlus.innerHTML = "+";
container.appendChild(btnPlus);

btnPlus.addEventListener("click", function() {
  counter++;
  display.innerHTML = `${counter}`;
})