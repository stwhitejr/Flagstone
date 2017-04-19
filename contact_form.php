<?php

$name=$_REQUEST['name'];
$email=$_REQUEST['email'];
$message=$_REQUEST['message'];
if (($name=="")||($email=="")||($message==""))
    {
echo "All fields are required.";
  }
else{   
  $from="From: $name<$email>\r\nReturn-path: $email";
    $subject="Flagstone Landscape Contact Form";
mail("freebird0@gmail.com", $subject, $message, $from);
echo "Email sent!";
}

?>