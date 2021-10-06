console.log("funcionando");

var inputs = document.getElementsByClassName('cp').length;
var progressBar = document.getElementById('progress');
const form = $("#criarConta");
const submitButton = $("#sub");

var isUserValid = 1;
var isEmailValid = 1;

$(document).ready(function(){
    updatePg(); 
});

//validação dos inputs
/*$(document).change(function() {
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
            pass1: {
                required: true,
                minlength: 6,
            },
            pass2: {
                required: true,
                minlength: 6,
                equalTo: "#pass1",
            },
        },
        messages:{
            name:{
                required: "Obrigatório.",
                minlength: "Não corresponde ao tamanho mínimo."
            },               
            sobrenome:{
                required: "Obrigatório.",
                minlength: "Não corresponde ao tamanho mínimo."
            },    
            telefone:{
                required: "Obrigatório.",
                minlength: "Não corresponde ao tamanho mínimo.",
                maxlength: "Ultrapassa o tamanho máximo.",
            },
            pass1:{
                required: "Obrigatório.",
                minlength: "Não corresponde ao tamanho mínimo.",
            },
            pass2:{
                required: "Obrigatório.",
                minlength: "Não corresponde ao tamanho mínimo.",
                equalTo: "Confirme a senha.",
            },
        },
    });
});*/
//botão de envio de informações e validação
$("button").click(function(){
    console.log(form.valid());
});
$(":input")
    .keypress(function() {
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
    });

function updatePg(){
    let min = document.getElementsByClassName('is-valid').length;
    let setValue = (100/inputs)*min;
    let subBtn = document.getElementById("sub");
    if(setValue >= 99 && isUserValid == 0 && isEmailValid == 0){
        if(subBtn.classList.contains("disabled")){
            subBtn.classList.remove("disabled");
            subBtn.classList.remove("btn-outline-secondary");
            subBtn.classList.add("btn-light");
        }
        print("remove disabled" + " " + setValue);
    }
    else{
        $("#sub").last().addClass("disabled");
        print("add disabled" + " " + setValue);
    }
    document.getElementById('progress').style.width = (setValue+"%");  
}

$("#user").keyup(function(){

        let objUser = document.getElementById("user");

        let user = $(this).val();
        $.post('../../php/validateUser.php',{'user':user}, function(data){
            let isValid = data;
            isValid = Number(isValid);
            isUserValid = isValid;
            console.log("user:"+isUserValid);
        });
    
        
        let confirm = (/\s/.test(user));
        console.log(confirm);

        if(confirm){
            if(objUser.classList.contains("is-valid")){
                $("#user").addClass("is-invalid");
                $("#user").removeClass("is-valid");
            }
            else{
                $("#user").addClass("is-invalid");
            }
            $("#usrmsg").text("há espaço em branco");
            return updatePg();
        }
        else if(user.length < 6){
            if(objUser.classList.contains("is-valid")){
                $("#user").addClass("is-invalid");
                $("#user").removeClass("is-valid");
            }
            else{
                $("#user").addClass("is-invalid");
            }
            $("#usrmsg").text("Não atinge o tamanho mínimo.");
            return updatePg();
        }
        else if(isUserValid == 1){
            if(objUser.classList.contains("is-valid")){
                $("#user").addClass("is-invalid");
                $("#user").removeClass("is-valid");
            }
            else{
                $("#user").addClass("is-invalid");
            }
            $("#usrmsg").text("Usuário já existe!");
            return updatePg();
        }
        else{
            if(objUser.classList.contains("is-valid")){
                $("#user").removeClass("is-invalid");
            }
            else{
                $("#user").addClass("is-valid");
                $("#user").removeClass("is-invalid");
            }
            $("#usrmsg").text("Ok");
            return updatePg();
        }
});

$("#email").keyup(function(){

    let email = $(this).val();

    $.post('../../php/validateEmail.php',{'email':email}, function(data){
        let isValid = data;
        isValid = Number(isValid);
        isEmailValid = isValid;
        console.log("Email:"+isEmailValid);
    });

    
    //alterado o validate do email
    let confirm = (/\s/.test(email));
    console.log(confirm);

    
    
    if(confirm){
        $("#email").removeClass("is-valid");
        $("#email").addClass("is-invalid");
        $("#emailmsg").text("há espaço em branco");
    }
    else if(email.length < 5){
        $("#email").removeClass("is-valid");
        $("#email").addClass("is-invalid");
        $("#emailmsg").text("Não atinge o tamanho mínimo.");
    }
    else if(isEmailValid == 1){
        $("#email").removeClass("is-valid");
        $("#email").addClass("is-invalid");
        $("#emailmsg").text("E-mail já cadastrado!");
    }
    else{
        $("#email").addClass("is-valid");
        $("#emailmsg").text("");
    }
});

function print(arg){
    console.log(arg);
}