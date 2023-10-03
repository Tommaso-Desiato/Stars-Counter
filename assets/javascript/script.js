let counter = 0;
const counterContainer = document.getElementById("counter-container");
const starContainer = document.getElementById("star-container");

const plusButton = createButton("+", incrementCounter);

const display = document.createElement("div");
display.innerText = counter;
display.id = "counter";
counterContainer.appendChild(display);


const minusButton = createButton("-", decrementCounter);

//Funzione creata per non ripetere codice
function createButton(text, clickHandler) {
  const button = document.createElement("button");
  button.innerHTML = text;
  button.addEventListener("click", clickHandler);
  button.classList.add("button");
  counterContainer.appendChild(button);
  return button;
}

function incrementCounter() {
  counter++;
  updateCounter();
  createStar();
}

function decrementCounter() {
  if (counter > 0) {
    counter--;
    updateCounter();
    removeStar();
  }
}

function updateCounter() {
  display.innerText = counter;
};

function createStar() {
  let star = document.createElement("span");
  star.classList.add("star");
  star.style.backgroundImage = "url('assets/img/sparkling.png')";

  let maxX = window.innerWidth - 40;
  let maxY = window.innerHeight - 40;

  let randomX = Math.random() * maxX;
  let randomY = Math.random() * maxY;

  star.style.left = randomX + "px";
  star.style.top = randomY + "px";

  setTimeout(function() {
    star.classList.add("show");
}, 10);

  starContainer.appendChild(star);
}

function removeStar() {
  let stars = starContainer.getElementsByClassName("star");
  if (stars.length > 0) {
      stars[stars.length - 1].classList.add("remove");
      setTimeout(function() {
          starContainer.removeChild(stars[stars.length - 1]);
      }, 500);
  }
}