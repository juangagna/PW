let Total = 0;
console.log("Hola juan carlos");
function sumarprecio(valorproducto) {
  Total = Total + valorproducto;
  document.getElementById("Total").innerHTML =
    "TOTAL: " + "$" + Total + " Pesos";
}
function restarprecio(valorproducto) {
  Total = Total  - valorproducto;
  
  document.getElementById("Total").innerHTML = "TOTAL: " + "$" + Total + " Pesos";

  
}
function Borrar() {
  Total = 0;
  document.getElementById("Total").innerHTML = "TOTAL:" + " $" + 0 + " Pesos";
}

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const mins = document.getElementById("mins");
const seconds = document.getElementById("seconds");

const newYear = "4 May 2023";

function countTimer() {
  const newYearDate = new Date(newYear);
  const currentDate = new Date();

  const totalSeconds = (newYearDate - currentDate) / 1000;

  const daysCalc = Math.floor(totalSeconds / 3600 / 24);
  const hoursCalc = Math.floor(totalSeconds / 3600) % 24;
  const minsCalc = Math.floor(totalSeconds / 60) % 60;
  const secondsCalc = Math.floor(totalSeconds % 60);

  days.innerHTML = daysCalc;
  hours.innerHTML = hoursCalc;
  mins.innerHTML = minsCalc;
  seconds.innerHTML = secondsCalc;
}
countTimer();

setInterval(countTimer, 1000);













