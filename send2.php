<?php
$email = $_POST['email'];
if (filter_var($tel, FILTER_VALIDATE_INT)) {

$message=
'Nombre:	'.$_POST['name'].'<br />
Email:	'.$_POST['email'].'<br />
Comentarios:	'.$_POST['message'].'
';
    require "phpmailer/class.phpmailer.php"; //include phpmailer class
      
    // Instantiate Class  
    $mail = new PHPMailer();  
    // Set up SMTP  
    $mail->IsSMTP();                // Sets up a SMTP connection 
	$mail->SMTPDebug = 0;
	//Ask for HTML-friendly debug output
	//$mail->Debugoutput = 'html'; 
    $mail->SMTPAuth = true;         // Connection with the SMTP does require authorization    
    $mail->SMTPSecure = "tls";      // Connect using a TLS connection  
    $mail->Host = "smtp.dominio.com";  // SMTP server address
    $mail->Port = 25; 

    
    // Authentication  
    $mail->Username   = "email@dominio.com"; // Your full address
    $mail->Password   = "1#3Nt#1Cu4T#r07"; // Your Gmail password
      
    // Compose
    $mail->setFrom('email@dominio.com', 'Whirlpool');
    $mail->AddReplyTo('email@dominio.com', 'Whirlpool');
    $mail->Subject = "Contacto desde email@dominio.com";      // Subject (which isn't required)  
    $mail->MsgHTML($message);
 
    // Send To  
    $mail->AddAddress("email@dominio.com", "email"); // Where to send it - Recipient
    $result = $mail->Send();		// Send!  
	echo "Envio exitoso"; // success message     
	unset($mail);

}else{
echo "Por favor, llene todos los campos.";

}

?>