<?php 

$name = $_POST["name"];
$tel = $_POST["tel"];
$check = $_POST["check"];

require "./vendor/autoload.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

$mail = new PHPMailer(true);
$mail->isSMTP();
$mail->SMTPAuth = true;

$mail->Host = "smtp.elasticemail.com";
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port=2525;
$mail->Username="lonozx@gmail.com";
$mail->Password="7CC2585E8CAF754190A7F7A62EAB12E975B3";
$mail->setFrom($email, $name);
$mail->addAddress("lonozx@gmail.com", '');

$mail->Subject = "Запрос на консультацію";
$mail->Body="Запрос на консультацію";

$mail->send();
echo "sended email";



