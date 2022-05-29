//hospeda a lista onde serão adicionado as linhas
var lista = document.getElementById('lista');
//hospeda o botão de adicionar item
var btnadd = document.getElementById('btnAdd');
//adiciona um evento de click no botão
btnadd.addEventListener('click',addItem);

// linhaSelecionado[0] linha 1
// linhaSelecionado[1] linha 2
var linhaSelecionado = [null,null];

var contadorId = 0;

//função que adiciona linhas na lista
function addItem(){
    //cria uma nova linha no html
    var novaLinha = document.createElement('li');
    //adiciona texto a nova linha
    novaLinha.id = "linha"+contadorId;
    novaLinha.innerHTML = "Nova " + novaLinha.id;
    novaLinha.addEventListener('click',
        function(){
            selecionaLinha(novaLinha)
        });
    //adiciona a nova linha na lista
    lista.appendChild(novaLinha);
    
    contadorId++;
}

function selecionaLinha(linha){
    linhaSelecionado.unshift(linha);
    linhaSelecionado = linhaSelecionado.slice(0,2);
    console.log(linhaSelecionado);
    
    //Coloca o estilo na linha selecionada
    if(!linhaSelecionado[0].classList.contains('selecionado')){
        linhaSelecionado[0].classList.add('selecionado');
    }
    else{
        linhaSelecionado[0].classList.remove('selecionado');
        linhaSelecionado.unshift(0);
    }
    //Tira o estilo da linhas anterior
    if(linhaSelecionado[1].classList.contains('selecionado')){
        linhaSelecionado[1].classList.remove('selecionado');    
    }
}

function renomeiaItem(){
    if(linhaSelecionado[0] == 0){
        return;
    }
    
    var novoTexto = window.prompt("Insira o nome do Item");
    if (novoTexto == ''){
        return;
    }
    linhaSelecionado[0].innerHTML = novoTexto;  
}

function excluirItem(){
    lista.removeChild(linhaSelecionado[0]);
}