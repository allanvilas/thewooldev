<?php

    $db = new mysqli("172.106.0.120", "wool", "temporary@xml42", "temporaryxml");
            if ($db->connect_errno) {
                echo "Failed to connect to MySQL: (" . $db->connect_errno . ") " . $db->connect_error;
            }

    // Query
    $query = "SELECT gameData.id, gameData.screen_num, gameData.game_text, gameData.jaAcessada, gameData.isBegin, gameData.isEnd, gameData.optionA, gameData.optionAPoint, gameData.optionB, gameData.optionBPoint, gameData.optionC, gameData.optionCPoint FROM gameData;";

    // Execução da query retornando em $result
    $result = $db -> query($query);

    // Array que guardara os dados solicitados ao db
    $turmas= array();

    // Auxiliar para contador
    $i = 0;

    // Loop que faz requisição das 'rows' do db.
    while($row = $result->fetch_assoc()){
        // index formatado
        $i = ''.$i.'';

        // push do index dentro da array
        array_push($turmas,$i);

        // atribuição dos valores das rows para as 
        $turmas[$i] = array([
            "id" => intval($row["id"]),
            "tela" => intval($row["screen_num"]),
            "texto" => $row["game_text"],
            "jaAcessada" => intval($row["jaAcessada"]),
            "eComeco" => intval($row["isBegin"]),
            "eFinal" => intval($row["isEnd"]),
            "A" => $row["optionA"],
            "Aponto" => intval($row["optionAPoint"]),
            "B" => $row["optionB"],
            "Bponto" => intval($row["optionBPoint"]),
            "C" => $row["optionC"],
            "Cponto" => intval($row["optionCPoint"])
        ]);
        $i++;
    }
    //echo json_encode($turmas) ;
    $db -> close();
?>