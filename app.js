let mensagemCriptografadoH1 = 'A mensagem foi criptografada.';
let mensagemCriptografadoSpam = 'Caso queira descriptografar a mensagem, basta clicar em descriptografar.';
let mensagemDescriptografadaH1 = 'A mensagem foi descriptografada.';
let mensagemDescriptografadaSpam = 'Caso queira criptografar a mensagem basta clicar em criptografar';
var inputTexto = document.querySelector('#input-texto');
var outputTexto = document.querySelector('#texto-secreto');


function criptografar() {
    var removeAcento = texto.value;
    
    var textoCript = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    
    document.getElementById('output').innerHTML = '<textarea id="texto-secreto" readonly>' + textoCript + '</textarea>' + '<button onclick="copiar()" class="botao-copiar">Copiar</button>';

    document.getElementById("mensagemH1").innerHTML = mensagemCriptografadoH1;
    document.getElementById("mensagemSpam").innerHTML = mensagemCriptografadoSpam;
    document.getElementById("img-texto").src = 'img/comemorando.png';
    document.getElementById('descrip').removeAttribute('disabled');
}

function descriptografar() {
    var removeAcento = inputTexto.value;
    var texto = removeAcento.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    var textoDescript = texto.replace(/enter/g,"e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    document.getElementById('output').innerHTML = '<textarea id="texto-secreto" readonly>' + textoDescript + '</textarea>' + '<button onclick="copiar()" class="botao-copiar">Copiar</button>';

    document.getElementById("mensagemH1").innerHTML = mensagemDescriptografadaH1;
    document.getElementById("mensagemSpam").innerHTML = mensagemDescriptografadaSpam;
}


function copiar() {
    var copiarTexto = document.getElementById('texto-secreto');

    copiarTexto.select();
    document.execCommand('copy');
    alert("Texto copiado.");
}
