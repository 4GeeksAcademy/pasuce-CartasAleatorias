import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
    nuevaCarta();
    document.querySelector("#nuevaCartaBtn").addEventListener("click", nuevaCarta)
}
    //write your code here

  function nuevaCarta () {
  const valores = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  const palos = ["♠", "♥", "♦", "♣"];

  const valor = valores[Math.floor(Math.random() * valores.length)];
  const palo = palos[Math.floor(Math.random() * palos.length)];
  const color = palo === "♥" || palo === "♦" ? "red" : "black";

  document.querySelector(".valor").innerHTML = valor;
  document.querySelector(".valor").style.color = color;

  document.querySelector(".palo-superior").innerHTML = palo;
  document.querySelector(".palo-superior").style.color = color;

  document.querySelector(".palo-inferior").innerHTML = palo;
  document.querySelector(".palo-inferior").style.color = color;
}

    let nuevoTexto = "Bienvenido esta es tu Carta Aleatoria!";
    let titulo = document.createElement("h1");
    titulo.textContent = nuevoTexto;

    document.body.prepend(titulo);




