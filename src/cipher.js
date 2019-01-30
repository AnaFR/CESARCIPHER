
function encriptar (texto, desplazamientos) {
    if (desplazamientos > 33) {
        process.stdout.write("Valores permitidos solo de 1 a 33");
        return;
    }
    let secreto = "";
    for (let indiceLetraActual = 0; indiceLetraActual<texto.length; indiceLetraActual++) {
        const codigoASCII = (texto.charCodeAt(indiceLetraActual)-65+desplazamientos)%26+65;
        if (texto[indiceLetraActual] == " ") secreto = secreto + " ";
        else secreto= secreto + String.fromCharCode(codigoASCII);
  }
  return secreto;
}

  function desencriptar (texto, desplazamientos) {
    if (desplazamientos > 33) {
        process.stdout.write("Valores permitidos solo de 1 a 33");
        return;
    }
    let revelado = "";
    for (let indiceLetraActual = 0; indiceLetraActual<texto.length; indiceLetraActual++) {
        const codigoDesencriptado = (texto.charCodeAt(indiceLetraActual)+ 65-desplazamientos)%26+65;
        if (texto[indiceLetraActual] == " ") revelado = revelado +" ";
        else revelado = revelado + String.fromCharCode(codigoDesencriptado);
    }
    return revelado;
}

let despl = 33
let mySecreto = encriptar("ANA LAURA", despl)
process.stdout.write(mySecreto + "\n")
process.stdout.write(desencriptar(mySecreto, despl))
