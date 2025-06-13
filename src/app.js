import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here

   const valores = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    const palos = ["♠", "♥", "♦", "♣"];

    function generarCartaAleatoria() {
        const valor = valores[Math.floor(Math.random() * valores.length)];
        const palo = palos[Math.floor(Math.random() * palos.length)];
        return { valor, palo };
    }

    const { valor, palo } = generarCartaAleatoria();
    document.querySelector(".valor").innerHTML = valor;
    document.querySelector(".palo-superior").innerHTML = palo;
    document.querySelector(".palo-inferior").innerHTML = palo;

    let nuevoTexto ="Bienvenido esta es tu Carta Aleatoria!";
    let titulo =document.createElement("h1");
    titulo.textContent = nuevoTexto;

    document.body.prepend(titulo);

    
};

