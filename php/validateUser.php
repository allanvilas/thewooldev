<?php
    include "conexao.php";
    //$telefone = $_POST['telefone'];
    $user = $_POST['user'];
    //$email = $_POST['email'];


    $resultado = ("SELECT `user` FROM `users` WHERE user='$user';");

    $resultado = $db->query($resultado);

    $contagem = mysqli_num_rows($resultado);

    if($contagem){
        die('1');
    } else {
        die('0');
    }
    $db->close();
?>