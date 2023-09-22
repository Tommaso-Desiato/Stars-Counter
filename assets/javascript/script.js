let counter = 0;
const counterContainer = document.getElementById("counter-container");
const starContainer = document.getElementById("star-container");


const btnPlus = document.createElement("button");
btnPlus.innerHTML = "+";
counterContainer.appendChild(btnPlus);

const display = document.createElement("div");
display.innerText = counter;
counterContainer.appendChild(display);

btnPlus.addEventListener("click", incrementCounter);

const btnMinus = document.createElement("button");
btnMinus.innerHTML = "-";
counterContainer.appendChild(btnMinus);

btnMinus.addEventListener("click", decrementCounter);

function incrementCounter() {
  counter++;
  updateCounter();
}

function decrementCounter() {
  if (counter > 0) {
    counter--;
    updateCounter();
  }
}

function updateCounter() {
  display.innerText = counter;
};

function createStar() {
  let star = document.createElement("span");
  star.classList.add("star");
  starContainer.appendChild(star);
}