<?php

    $table = "aluno";
   
    mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
    $mysqli = new mysqli("172.106.0.120", "thewooldevadmin", "7436801aA@", "usersdata");

    /* get the name of the current default database */
    $result = $mysqli->query("SELECT DATABASE()");
    $row = $result->fetch_row();
    printf("Default database is %s.\n", $row[0]);

    $query ="SELECT * FROM $table";

    $result = $mysql_query($query);

    if($result){
        while($row = mysqli_fetch_array($result)){
                $name = $row["nome"];
                echo "Name: ".$name."br/>";
        }
    }

    /* change default database to "world" */
    //$mysqli->select_db("world");

    /* get the name of the current default database */
    //$result = $mysqli->query("SELECT DATABASE()");
    //$row = $result->fetch_row();
    //printf("Default database is %s.\n", $row[0]);
?>