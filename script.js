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














