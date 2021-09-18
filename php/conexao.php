<?php

$db = new mysqli("172.106.0.120", "thewooldevadmin", "7436801aA@", "usersdata");
        if ($db->connect_errno) {
            echo "Failed to connect to MySQL: (" . $db->connect_errno . ") " . $db->connect_error;
        }

?>