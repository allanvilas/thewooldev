<?php
    include "conexao.php";

    $nome = $_POST['name'];
    $sobrenome = $_POST['sobrenome'];
    $nascimento = $_POST['nascimento'];
    $telefone = $_POST['telefone'];
    $user = $_POST['user'];
    $password = $_POST['pass1'];
    $email = $_POST['email'];

    function msg($msg){
        echo '<script>';
        echo 'console.log("'.$msg.'")';
        echo '</script>';
    }
    
    if($db->query("INSERT INTO `users`(`nome`, `sobrenome`, `nascimento`, `telefone`, `user`, `pass`, `email`) VALUES ('$nome','$sobrenome','$nascimento','$telefone','$user','$password','$email')") === true){
        msg("inserted into database");
    }
    else{
        msg("failed");
    }

    $db->close();
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <style>
            html,body,h1{
                color:#999 !important;
            }
        </style>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link type="text/css" rel="stylesheet" href="../css/style.css">
        <link type="text/css" rel="stylesheet" href="../pages/createAccount.css">
        <link type="text/css" rel="stylesheet" href="../bootstrap/css/bootstrap.css">
        <title>Conta Criada</title>
    </head>
    <body>
        <div class="container position-absolute top-50 start-50 translate-middle">
            <h1>CONTA CRIADA COM SUCESSO<h1>
            <a href="../index.html"><button class="btn btn-light mb-5">Voltar</button></a>
        </div>
    </body>
</html>