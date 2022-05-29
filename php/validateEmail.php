<?php
    include "conexao.php";
    //$telefone = $_POST['telefone'];
    //$user = $_POST['user'];
    $email = $_POST['email'];
    $isValEmail = 1;


    $resultado = ("SELECT `email` FROM `users` WHERE email='$email';");

    $resultado = $db->query($resultado);

    $contagem = mysqli_num_rows($resultado);

    if($contagem){
        die('1');
        $isValEmail = 1;
    } else {
        die('0');
        $isValEmail = 0;
    }
    $db->close();
?>