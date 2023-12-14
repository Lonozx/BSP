<?php 

 if(isset($_POST['submit'])){
    http://businessuppro.com.ua/
    $name = $_POST['name'];
    $tel = $_POST['tel'];
    $subj = $_POST['subject'];
    $check = $_POST['check'];
    $mailTo = "busine73@businessuppro.com.ua ";
    $headers = "Від: Сайт БСП";
    $text = "Отриман запрос на косультацію від " .$name . " з номером " . $tel . '.';

    mail($mailTo, $subj, $text, $headers);
    header("Location: index.html?mailsend");
 }
?>