let counter = 0;
let display = document.createElement("div");
display.innerHTML = `${counter}`;
document.body.append(display);

let btnPlus = document.createElement("button");
btnPlus.innerHTML = "+";
document.body.append(btnPlus);

btnPlus.addEventListener("click", function() {
  counter++;
  display.innerHTML = `${counter}`;
})

let btnMinus = document.createElement("button");
btnMinus.innerHTML = "-";
document.body.append(btnMinus);

btnMinus.addEventListener("click", function() {
  counter--;
  display.innerHTML = `${counter}`;
})