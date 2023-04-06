<?php
//dodawanie rekordów
        $connection = mysqli_connect("localhost","root","","scores");
        if(!empty($_POST['submit'])){
            if(!empty($_POST['nick']) && !empty($_POST['score'])){

               $insertsql = "INSERT INTO tanks (ID, nick, score) VALUES (NULL, '".$_POST['nick']."', ".$_POST['score'].")";
                echo $insertsql;
               $result = mysqli_query($connection, $insertsql);
                $nick = mysqli_real_escape_string($connection, $_POST['nick']);
                $score = mysqli_real_escape_string($connection, $_POST['score']);
               if($result){
                   echo "Dodane prawidłowo";
               } else {
                   echo "Błąd dodawania rekordu";
               }

            } else {
                echo "Wypełnij oba pola";
            }
        }
?>