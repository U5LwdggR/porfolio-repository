<?php

if (isset($_POST['name']) && !empty($_POST['name']) and
    isset($_POST['email']) && !empty($_POST['name']) and
    isset($_POST['message']) && !empty($_POST['name'])) {
       $mail = new Mail($_POST['name'],$_POST['email'],$_POST['message']);
       $mail->send();
}







?>