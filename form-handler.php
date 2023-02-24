<?php 
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];


$email_from= 'info@glisant-mcgill.com';

$email_subject = 'New Form Submission';

$email_body = "User Name: $name.\n".
                "User email: $visitor_email.\n".
                "Subject: $subject.\n".
                "User Message: $message.\n".;

$to = 'glisant132@gmail.com';

$headers = "From: $email_from \r\n";

$headers .= "Reply-To: $visitor_email \r\n";


mail($to, $email_subject, $email_body, $headers);

header("Location: #")

?>