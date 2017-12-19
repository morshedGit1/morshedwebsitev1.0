<?php

  include_once("home.html");

  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];
  $to = "hello@morshedapp.com";
  $subject = "New Request";

  mail($to, $subject, $message, "From: " . $name);
  echo "facebook";
?>
