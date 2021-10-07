<?php
    //Conecta ao banco
    include "../../php/conexao.php";

    //Query
    $query = "SELECT turmas.codTurma, turmas.diaAula, turmas.horaInicio, turmas.prof, linksTurmas.link FROM turmas RIGHT JOIN linksTurmas ON turmas.codTurma = linksTurmas.turma ORDER BY turmas.diaAula;";

    //Execução da query retornando em $result
    $result = $db -> query($query);

    //Array que guardara os dados solicitados ao db
    $turmas= array();

    //Auxiliar para contador
    $i = 0;

    //Loop que faz requisição das 'rows' do db.
    while($row = $result->fetch_assoc()){
        //index formatado
        $i = ''.$i.'';

        //push do index dentro da array
        array_push($turmas,$i);

        //atribuição dos valores das rows para as 
        $turmas[$i] = array([
            "turma" => $row["codTurma"],
            "dia" => $row["diaAula"],
            "horario" => $row["horaInicio"],
            "professor" => $row["prof"],
            "link" => $row["link"]
        ]);
        $i++;
    }
    echo json_encode($turmas) ;
$db -> close();
?>