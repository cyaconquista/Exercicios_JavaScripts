/* Aula acender lampda*/
function on() {
  document.getElementById("lamp").src = "imagens/lampada_desligada.png";
}

function off() {
  document.getElementById("lamp").src = "imagens/lampada_ligada.png";
}

function alertar() {
  var intervalo = 0;
  var contador = 0;
  while (contador < 20) {
    intervalo += 300;
    setTimeout(
      "document.getElementById('lamp') .src = 'imagens/lampada_ligada.png';",
      intervalo
    );
    intervalo += 100;
    setTimeout(
      "document.getElementById('lamp') .src = 'imagens/lampada_desligada.png';",
      intervalo
    );
    intervalo += 100;

    contador++;
  }
}
