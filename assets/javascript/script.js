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
      }, 500); // Dopo che l'animazione è completata (0.5 secondi), rimuovi la stella
  }
}