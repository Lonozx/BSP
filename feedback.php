<?php 

    $name = $_POST['name'];
    $tel = $_POST['tel'];
    $subj = "Повідомлення від БСП";
    $check = $_POST['check'];
    $mailTo = "lonozx@gmail.com";
    $headers = "Від: Сайт БСП";
    $text = "Отриман запрос на косультацію від " .$name . " з номером " . $tel . '.';

    if($tel!=NULL){
        mail($mailTo, $subj, $text, $headers);
    }
    header("Location:index.html");
?>