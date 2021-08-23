//hospeda a lista onde serão adicionado as linhas
var lista = document.getElementById('lista');
//hospeda o botão de adicionar item
var btnadd = document.getElementById('btnAdd');
//adiciona um evento de click no botão
btnadd.addEventListener('click',addItem);

//função que adiciona linhas na lista
function addItem(){
    //cria uma nova linha no html
    var novaLinha = document.createElement('li');
    //adiciona texto a nova linha
    novaLinha.innerHTML = "nova linhas";
    novaLinha.addEventListener('click',function(){renomeiaItem(novaLinha)})
    //adiciona a nova linha na lista
    lista.appendChild(novaLinha);
}

function renomeiaItem(item){
    var novoTexto = window.prompt("Insira o nome do Item");
    if (novoTexto == ''){
        return;
    }
    item.innerHTML = novoTexto;  
}