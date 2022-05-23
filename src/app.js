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

function cuentaAtras() {
  let segundosInicio = 10;
  const btnCronometro = document.getElementById("btnCronometro");
  btnCronometro.textContent = segundosInicio;
  const cronometro = setInterval(function() {
    segundosInicio--;
    btnCronometro.textContent = segundosInicio;
    if (segundosInicio === 0) {
      generateCard();
      btnCronometro.textContent = "Su carta";
      clearInterval(cronometro);
    }
  }, 1000);
}

document.querySelector("#btnBaraja").addEventListener("click", generateCard);
document.querySelector("#btnCronometro").addEventListener("click", cuentaAtras);
