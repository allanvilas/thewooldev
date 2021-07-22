console.log("funcionando");

var inputs = document.getElementsByClassName('cp').length;
var progressBar = document.getElementById('progress');
const form = $("#criarConta");

//validação dos inputs
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
                required: true,
                minlength: 14,
                maxlength: 16
            },
            user: {
                required: true,
                minlength: 6,
            },
            pass1: {
                required: true,
                number: true,
                minlength: 6,
            },
            pass2: {
                required: true,
                number: true,
                minlength: 6,
                equalTo: "#pass1",
            },
            email: {
                required: true,
                email: true,
            },
        },
        messages:{
            name:"insira um nome válido, somente caracteres",                 
            sobrenome:"insira um sobrenome válido",    
            telefone:"Insira um telefone válido (xx) x.xxxx-xxxx",
            user:"Usuário incorreto, utilize a-Z, 0-9 sem espaços, mínimo 6 caracteres",
            pass1:"Somente letras e números sem espaços, mínimo 6 digitos a-Z, 0-9",
            pass2:"senha não compatível",
            email:"Padrão de e-mail incorreto",
        },
    });
});
//botão de envio de informações e validação
$("button").click(function(){
    console.log(form.valid());
});
$(":input")
    .keypress(function() {
    
        //validateUser
        let user = document.getElementById('user');
        let usertest = document.getElementById('user').value;
        let confirm = (/\s/g.test(usertest));
        console.log(confirm);
        if(!confirm){
            $(user).last().addClass("is-invalid");
        }
        //validatePass
        
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