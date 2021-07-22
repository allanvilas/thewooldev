console.log("funcionando");

var inputs = document.getElementsByClassName('cp').length;
var progressBar = document.getElementById('progress');

$(document).change(function() {
  $("#criarConta").validate({
        errorClass: "is-invalid",
        validClass: "is-valid",
        rules:{
            name: {
                required: true,
                minlength: 2
            },
            sobrenome: {
                required: true,
                minlength: 2
            },
            telefone: {
                minlength: 14,
                maxlength: 16
            },
        },
        messages:{
            nome:"insira um nome válido",                 sobrenome:"insira um sobrenome válido",    
            telefone:"Insira um telefone válido (xx) x.xxxx-xxxx",
        },
    });
})

$(":input")
    .keypress(function() {
        
        updatePg();
        let tel = document.getElementById('telefone');
        let telValue = tel.value;
        console.log(telValue.length);
        if(telValue.length >= 15){
            $(tel).last().addClass("is-valid");
            updatePg();
            console.log("deu certo");
        }
    })
    .focusin(function() {
        updatePg();
    })
    .focusout(function() {
        updatePg();
    });

function updatePg(){
    let min = document.getElementsByClassName('is-valid').length;
    let setValue = (100/inputs)*min;
    document.getElementById('progress').style.width = (setValue+"%");  
}