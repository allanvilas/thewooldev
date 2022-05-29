<?php
    include "conexao.php";
    include "validateEmail.php";
    include "validateUser.php";

    $nome = $_POST['name'];
    $sobrenome = $_POST['sobrenome'];
    $nascimento = $_POST['nascimento'];
    $telefone = $_POST['telefone'];
    $user = $_POST['user'];
    $password = $_POST['pass1'];
    $email = $_POST['email'];

    if( $isValidUser == 1){
        msg("USER JÁ EXISTE");
    }
    if( $isValidEmail == 1){
        msg("EMAIL JÁ EXISTE");
        return;
    }

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
