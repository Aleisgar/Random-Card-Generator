/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
function generateCard() {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let posicion = Math.floor(Math.random() * numbers.length);
  let cardNumber = document.querySelector(".number");
  cardNumber.innerHTML = numbers[posicion];

  let icons = ["♦", "♥", "♠", "♣"];
  let indexicon = Math.floor(Math.random() * icons.length);
  let cardicontop = document.querySelector(".top-icon");
  let cardiconbottom = document.querySelector(".bottom-icon");
  cardicontop.innerHTML = icons[indexicon];
  cardiconbottom.innerHTML = icons[indexicon];

  icons[indexicon] === "♦" || icons[indexicon] === "♥"
    ? (cardicontop.style.color = "red")
    : (cardicontop.style.color = "black");

  icons[indexicon] === "♦" || icons[indexicon] === "♥"
    ? (cardiconbottom.style.color = "red")
    : (cardiconbottom.style.color = "black");
}

window.onclick = function() {
  generateCard();
};
document.querySelector(".boton1").addEventListener("click", generateCard);
window.onclick = function cuentaAtras() {
  var segundosInicio = 10;
  var cronometro = setInterval(function() {
    segundosInicio--;
    document.getElementById("cronometro").textContent = segundosInicio;
    if (segundosInicio === 0) {
      generateCard();
      document.getElementById("cronometro").textContent = "Su carta";
    }
    if (segundosInicio < 0) {
      document.getElementById("cronometro").textContent = "Su carta";
    }
  }, 1000);
};
