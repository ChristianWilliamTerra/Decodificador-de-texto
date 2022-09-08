const inputTexto = document.querySelector(".inputTexto");
const mensagem = document.querySelector(".mensagem")

function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value);
    mensagem.value = textoEncriptado;
    document.getElementById("box").style.backgroundImage = "none";
    var div = document.getElementById('apagar');
    div.remove();
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i= 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada;
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(inputTexto.value);
    mensagem.value = textoDesencriptado
    document.getElementById("box").style.backgroundImage = "none";
    var div = document.getElementById('apagar');
    div.remove();
}


function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i= 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

function btnCopiar(stringCopiar) {
    var copyText = document.getElementById("box");

    copyText.select();
    copyText.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copyText.value);
}

