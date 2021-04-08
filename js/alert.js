function aleatorio(min, max) {
  return Math.floor(Math.random()*((max+1)-min)+min);
}

function cambio() {
  document.getElementById("numero1").innerHTML = aleatorio(1,10);
  document.getElementById("numero2").innerHTML = aleatorio(1,10);
  document.getElementById("numero3").innerHTML = aleatorio(1,10);
}

console.log(aleatorio(1,10));
