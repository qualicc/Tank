<?php
//nawiązanie połączenia
        $connection = mysqli_connect("localhost","root","","scores");

        if(mysqli_connect_errno()){
            echo "Failed connection" . mysqli_connect_error();
            exit;
        }
        $query = 'SELECT * FROM tanks ORDER BY score DESC LIMIT 10';

        $result = mysqli_query($connection, $query);

        $records = mysqli_fetch_all($result, MYSQLI_ASSOC);

        echo json_encode($records);
?>