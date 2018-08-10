<?php
$name=$_REQUEST['name'];
$email=$_REQUEST['email'];
$phone=$_REQUEST['phone'];
$message=$_REQUEST['message'];
$action=$_REQUEST['action'];

$errorMessage = '';
$contactState = 0;

if ($action == 1) {
  if (($name=="")||($email=="")||($message==""))
    {
      $errorMessage = "All fields are required.";
    } else{   
      $from="From: $name<$email>\r\nReturn-path: $email";
      $subject="Flagstone Landscape Contact Form";
      $message = "Message:" . $message . "\n Phone:". $phone . "\n Email:" . $email;
      mail("freebird0@gmail.com", $subject, $message, $from);
      $contactState = 1;
  }
}
?>
<h1>
  Contact Flagstone Landscape
</h1>
<p style="text-align:center;">
  Please contact us anytime by using the phone number or email address below.
</p>
<div class="contact_info">
  <h3>Phone</h3>
  <h2>339-201-7552</h2>
  <h3>Email</h3>
  <h2><a href="mailto:flagstonelandscape@gmail.com" target="_blank">flagstonelandscape@gmail.com</a></h2>
</div>