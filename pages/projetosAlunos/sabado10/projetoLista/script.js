var contador = true;

var lista = document.getElementById('lista');

var linhas = [];

var contarLinhas = 0;

function print() {

    if (contador == true) {
        document.getElementById('01').classList.add("desabilitado");
        contador = false;
    } else {
        document.getElementById('01').classList.remove("desabilitado");
        contador = true;
    }
}

function addNovoItem() {
    contarLinhas += 1;
    var novaId = "linha" + contarLinhas;
    var novoItem = document.createElement('li');
    novoItem.innerHTML = "Novo Item";
    novoItem.id = novaId;
    
    //Adiciona a clase foco
    novoItem.addEventListener('click',
    function(){
        emFoco(novoItem);
    });
   // novoItem.addEventListener('click', function () {
   //     teste(novaId)
   // });
    linhas.push(novaId);
    lista.appendChild(novoItem);
}
function teste(novo) {
    //console.log(novo);
    var novoText = window.prompt("Escreva o Item", novoText);
    document.getElementById(novo).innerHTML = novoText;
    //console.log(novoText);
}
function emFoco(elemento){
    if(elemento.classList.contains('foco')){
        elemento.classList.remove('foco');    
    }
    else{
      elemento.classList.add('foco');  
    }
}

