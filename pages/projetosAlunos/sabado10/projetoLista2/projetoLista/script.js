// nossa lista
var lista = document.getElementById('lista');

//array que hospedará todas as linhas
var linhas = [];

//contador de quantas linhas foram utilizadas
var contarLinhas = 0;

// funçao que adiciona novas linhas
function addNovoItem() {
    contarLinhas += 1;
    var novaId = "linha" + contarLinhas;
    var novoItem = document.createElement('li');
    novoItem.innerHTML = "Novo Item";
    novoItem.id = novaId;
    
    //adiciona a função de selecionar linha
    novoItem.addEventListener('click',
        function(){
            selecLinha(novoItem);
    });
    
    //linhas.push(novaId);
    lista.appendChild(novoItem);
}

function selecLinha(LinhaSelecionada){
    linhas.unshift(LinhaSelecionada);
    
    linhas = linhas.slice(0,2);
    console.log(linhas);
    
    if(linhas[0] == linhas[1]){
        // alterna o estilo da linha
        linhas[0].classList.toggle('selecionado');
    }
    else{
        //adiciona o estilo na linha
        linhas[0].classList.add('selecionado');
        
        //remove o estilo na linha
        linhas[1].classList.remove('selecionado');
    }
}

function excluirLinha(){
    if(linhas[0].classList.contains('selecionado')){
        lista.removeChild(linhas[0]);
    }
}

function editaLinha(){
    var novoTexto = window.prompt("Novo texto");
    if(novoTexto == ""){
        return;
    }
    linhas[0].innerHTML = novoTexto;
}


