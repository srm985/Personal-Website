<?php

$EmailFrom = "pocinfo@luminant.com";
$EmailTo = "sean.mcquay@luminant.com";
$Subject = "POC - Additional Email Request";
$Name = Trim(stripslashes($_POST['name'])); 
$Company = Trim(stripslashes($_POST['company'])); 
$Email = Trim(stripslashes($_POST['email']));
$Message = Trim(stripslashes($_POST['description'])); 

// validation
/*$validationOK=true;
if (!$validationOK) {
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
  echo "string";
  exit;
}*/

// prepare email body text
$Body = "";
$Body .= "Name: ";
$Body .= $Name;
$Body .= "\n";
$Body .= "Company: ";
$Body .= $Company;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $Email;
$Body .= "\n";
$Body .= "Message: ";
$Body .= $Message;
$Body .= "\n";

// send email 
$success = mail($EmailTo, $Subject, $Body);

// redirect to success page 
if ($success){
  echo "success!";
}
else{
  echo "failed!";
}
?>