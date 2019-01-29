
function encriptar (texto, desplazamientos) {
    if (desplazamientos > 33) {
        process.stdout.write("Valores permitidos solo de 1 a 33");
        return;
    }
    for (let indiceLetraActual = 0; indiceLetraActual<texto.length; indiceLetraActual++) {
    const codigoASCII = (texto.charCodeAt(indiceLetraActual)-65+desplazaminetos)%26+65;
    if (texto[indiceLetraActual] == " ") process.stdout.write(" ");
    else process.stdout.write(String.fromCharCode(codigoASCII));
  }
  
  document.getElementById("decipherSentence").innerHTML = "Click en boton para descifrar";

