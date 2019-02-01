function comenzar() {
    document.getElementById("Instrucciones").style.display = "none";
    document.getElementById("appView").style.display = "inline";
}

document.getElementById("comenzar").addEventListener ("click", comenzar);

function ejecutaOperacion(op) {
    const despl = parseInt(document.getElementById("cajaDesplazamientos").value);
    let secret = document.getElementById("cajaTexto").value;
    secret  = secret.toUpperCase ();
    let resultado;
    if (op == "enc") { 
        resultado = encriptar(secret, despl); 
    } else {
        resultado =  desencriptar(secret, despl);
    }
    document.getElementById("cajaResultado").value = resultado;
}

document.getElementById("appView").style.display = "none";


function intentar(){
cajaDesplazamientos.value =" ";
cajaTexto.value =" ";
cajaResultado.value = " ";

}

document.getElementById("intentar").addEventListener ("click", intentar);

function regresar() {
    document.getElementById("appView").style.display = "none";
    document.getElementById("Instrucciones").style.display = "inline";
}

document.getElementById("Regresar").addEventListener ("click", regresar);