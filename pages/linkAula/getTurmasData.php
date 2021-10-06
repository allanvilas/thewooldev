<?php
    include "../../php/conexao.php";

    $query = "SELECT turmas.codTurma, turmas.diaAula, turmas.horaInicio, turmas.prof, linksTurmas.link FROM turmas RIGHT JOIN linksTurmas ON turmas.codTurma = linksTurmas.turma;";

    $result = $db -> query($query);

    $turmas= array();

    $i = 0;

    $teste = array ('a'=>10,'b'=>5);

    while($row = $result->fetch_assoc()){
        //echo "<br>"; 
        //printf("\n%s\n",$row["codTurma"]);
        $i = ''.$i.'';
        array_push($turmas,$i);

        $turmas[$i] = array([
            "turma" => $row["codTurma"],
            "dia" => $row["diaAula"],
            "horario" => $row["horaInicio"],
            "professor" => $row["prof"],
            "link" => $row["link"]
        ]);
        /*
        $turmas[$i] =
           $row["codTurma"] array( 
            "turma" => $row["codTurma"],
            "dia" => $row["diaAula"],
            "horario" => $row["horaInicio"],
            "professor" => $row["prof"]
            ));
        */$i++;
    }
    echo json_encode($turmas) ;

/*
var obj = {
    title: "Turma",
    subTitle: "Horario",
    text: "Professor",
    link: "Teste"
};
*/
    

    /*
    if($result = $db -> $query("select * from turmas;")){
        while($row = $result->fetch_assoc()){
            printf("%s (%s)\n",$row["codeTurma"],$row["diaAula"]);
        }
    $result -> close();
    }*/

$db -> close();
?>