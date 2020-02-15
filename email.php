<?php
if(isset($_POST['first_tab'])) {
    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "19chetan87sharma@gmail.com";
    $email_subject = "Your email subject line";
 
    function died($error) {
        // your error code can go here
        echo "We are very sorry, but there were error(s) found with the form you submitted. ";
        echo "These errors appear below.<br /><br />";
        echo $error."<br /><br />";
        echo "Please go back and fix these errors.<br /><br />";
        die();
    }
 
 
    // validation expected data exists
    if(isset($_POST['from']) && $_POST['from'] == "" || isset($_POST['to'])  && $_POST['to'] == "" || isset($_POST['pickup']) && $_POST['pickup'] == "" || isset($_POST['dropup']) && $_POST['dropup'] == "" || isset($_POST['name']) && $_POST['name'] == "" || isset($_POST['email']) && $_POST['email'] == "" || isset($_POST['contact']) && $_POST['contact'] == "") {
        died('We are sorry, but there appears to be a problem with the form you submitted.');       
    }
 
     
 
    $from = $_POST['from']; // required
    $to = $_POST['to']; // required
    $pickup = $_POST['pickup']; // required
    $dropup = $_POST['dropup']; // not required
    $name = $_POST['name']; // required
    $contact = $_POST['contact']; // required
    $email_from = $_POST['email']; // required
 
    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
 
  if(!preg_match($email_exp,$email_from)) {
    $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
  }
 
    $string_exp = "/^[A-Za-z .'-]+$/";
 
  if(!preg_match($string_exp,$from)) {
    $error_message .= 'Pickup From you entered does not appear to be valid.<br />';
  }
 
  if(!preg_match($string_exp,$to)) {
    $error_message .= 'Pickup To you entered does not appear to be valid.<br />';
  }
 
  if(strlen($email_from) < 2) {
    $error_message .= 'The email you entered do not appear to be valid.<br />';
  }
 
  if(strlen($error_message) > 0) {
    died($error_message);
  }
 
    $email_message = "Form details below.\n\n";
 
     
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
 
     
 
    $email_message .= "From: ".clean_string($from)."\n";
    $email_message .= "To: ".clean_string($to)."\n";
    $email_message .= "Pickup: ".clean_string($pickup)."\n";
    $email_message .= "Dropup: ".clean_string($dropup)."\n";
    $email_message .= "Name: ".clean_string($name)."\n";
    $email_message .= "Phone: ".clean_string($contact)."\n";
    $email_message .= "Email: ".clean_string($email_from)."\n";
 
    $headers = "Global Vacation\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/plain; charset=iso-8859-1\r\n";
    $headers .= "X-Priority: 3\r\n";
    $headers .= "X-Mailer: PHP". phpversion() ."\r\n";
    @mail($email_to, $email_subject, $email_message, $headers);  
?>
 
<!-- include your own success html here -->
 
Thank you for contacting us. We will be in touch with you very soon.
 
<?php
 
}

if(isset($_POST['second_tab'])) {
    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "19chetan87sharma@gmail.com";
    $email_subject = "Your email subject line";
 
    function died($error) {
        // your error code can go here
        echo "We are very sorry, but there were error(s) found with the form you submitted. ";
        echo "These errors appear below.<br /><br />";
        echo $error."<br /><br />";
        echo "Please go back and fix these errors.<br /><br />";
        die();
    }
 
 
    // validation expected data exists
    if(isset($_POST['from']) && $_POST['from'] == "" || isset($_POST['to'])  && $_POST['to'] == "" || isset($_POST['pickup']) && $_POST['pickup'] == "" || isset($_POST['dropup']) && $_POST['dropup'] == "" || isset($_POST['name']) && $_POST['name'] == "" || isset($_POST['email']) && $_POST['email'] == "" || isset($_POST['contact']) && $_POST['contact'] == "") {
        died('We are sorry, but there appears to be a problem with the form you submitted.');       
    }
 
     
 
    $from = $_POST['from']; // required
    $to = $_POST['to']; // required
    $pickup = $_POST['pickup']; // required
    $dropup = $_POST['dropup']; // not required
    $name = $_POST['name']; // required
    $contact = $_POST['contact']; // required
    $email_from = $_POST['email']; // required
 
    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
 
  if(!preg_match($email_exp,$email_from)) {
    $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
  }
 
    $string_exp = "/^[A-Za-z .'-]+$/";
 
  if(!preg_match($string_exp,$from)) {
    $error_message .= 'Pickup From you entered does not appear to be valid.<br />';
  }
 
  if(!preg_match($string_exp,$to)) {
    $error_message .= 'Pickup To you entered does not appear to be valid.<br />';
  }
 
  if(strlen($email_from) < 2) {
    $error_message .= 'The email you entered do not appear to be valid.<br />';
  }
 
  if(strlen($error_message) > 0) {
    died($error_message);
  }
 
    $email_message = "Form details below.\n\n";
 
     
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
 
     
 
    $email_message .= "From: ".clean_string($from)."\n";
    $email_message .= "To: ".clean_string($to)."\n";
    $email_message .= "Pickup: ".clean_string($pickup)."\n";
    $email_message .= "Dropup: ".clean_string($dropup)."\n";
    $email_message .= "Name: ".clean_string($name)."\n";
    $email_message .= "Phone: ".clean_string($contact)."\n";
    $email_message .= "Email: ".clean_string($email_from)."\n";
 
    $headers = "Global Vacation\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/plain; charset=iso-8859-1\r\n";
    $headers .= "X-Priority: 3\r\n";
    $headers .= "X-Mailer: PHP". phpversion() ."\r\n";
    @mail($email_to, $email_subject, $email_message, $headers);  
?>
 
<!-- include your own success html here -->
 
Thank you for contacting us. We will be in touch with you very soon.
 
<?php
 
}

if(isset($_POST['third_tab'])) {
    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "19chetan87sharma@gmail.com";
    $email_subject = "Your email subject line";
 
    function died($error) {
        // your error code can go here
        echo "We are very sorry, but there were error(s) found with the form you submitted. ";
        echo "These errors appear below.<br /><br />";
        echo $error."<br /><br />";
        echo "Please go back and fix these errors.<br /><br />";
        die();
    }
 
 
    // validation expected data exists
    if(isset($_POST['from']) && $_POST['from'] == "" || isset($_POST['to'])  && $_POST['to'] == "" || isset($_POST['pickup']) && $_POST['pickup'] == "" || isset($_POST['dropup']) && $_POST['dropup'] == "" || isset($_POST['name']) && $_POST['name'] == "" || isset($_POST['email']) && $_POST['email'] == "" || isset($_POST['contact']) && $_POST['contact'] == "") {
        died('We are sorry, but there appears to be a problem with the form you submitted.');       
    }
 
     
 
    $from = $_POST['from']; // required
    $to = $_POST['to']; // required
    $pickup = $_POST['pickup']; // required
    $dropup = $_POST['dropup']; // not required
    $name = $_POST['name']; // required
    $contact = $_POST['contact']; // required
    $email_from = $_POST['email']; // required
 
    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
 
  if(!preg_match($email_exp,$email_from)) {
    $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
  }
 
    $string_exp = "/^[A-Za-z .'-]+$/";
 
  if(!preg_match($string_exp,$from)) {
    $error_message .= 'Pickup From you entered does not appear to be valid.<br />';
  }
 
  if(!preg_match($string_exp,$to)) {
    $error_message .= 'Pickup To you entered does not appear to be valid.<br />';
  }
 
  if(strlen($email_from) < 2) {
    $error_message .= 'The email you entered do not appear to be valid.<br />';
  }
 
  if(strlen($error_message) > 0) {
    died($error_message);
  }
 
    $email_message = "Form details below.\n\n";
 
     
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
 
     
 
    $email_message .= "From: ".clean_string($from)."\n";
    $email_message .= "To: ".clean_string($to)."\n";
    $email_message .= "Pickup: ".clean_string($pickup)."\n";
    $email_message .= "Dropup: ".clean_string($dropup)."\n";
    $email_message .= "Name: ".clean_string($name)."\n";
    $email_message .= "Phone: ".clean_string($contact)."\n";
    $email_message .= "Email: ".clean_string($email_from)."\n";
 
    $headers = "Global Vacation\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/plain; charset=iso-8859-1\r\n";
    $headers .= "X-Priority: 3\r\n";
    $headers .= "X-Mailer: PHP". phpversion() ."\r\n";
    @mail($email_to, $email_subject, $email_message, $headers);  
?>
 
<!-- include your own success html here -->
 
Thank you for contacting us. We will be in touch with you very soon.
 
<?php
 
}

if(isset($_POST['fourth_tab'])) {
    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "19chetan87sharma@gmail.com";
    $email_subject = "Your email subject line";
 
    function died($error) {
        // your error code can go here
        echo "We are very sorry, but there were error(s) found with the form you submitted. ";
        echo "These errors appear below.<br /><br />";
        echo $error."<br /><br />";
        echo "Please go back and fix these errors.<br /><br />";
        die();
    }
 
 
    // validation expected data exists
    if(isset($_POST['from']) && $_POST['from'] == "" || isset($_POST['to'])  && $_POST['to'] == "" || isset($_POST['pickup']) && $_POST['pickup'] == "" || isset($_POST['dropup']) && $_POST['dropup'] == "" || isset($_POST['name']) && $_POST['name'] == "" || isset($_POST['email']) && $_POST['email'] == "" || isset($_POST['contact']) && $_POST['contact'] == "") {
        died('We are sorry, but there appears to be a problem with the form you submitted.');       
    }
 
     
 
    $from = $_POST['from']; // required
    $to = $_POST['to']; // required
    $pickup = $_POST['pickup']; // required
    $dropup = $_POST['dropup']; // not required
    $name = $_POST['name']; // required
    $contact = $_POST['contact']; // required
    $email_from = $_POST['email']; // required
 
    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
 
  if(!preg_match($email_exp,$email_from)) {
    $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
  }
 
    $string_exp = "/^[A-Za-z .'-]+$/";
 
  if(!preg_match($string_exp,$from)) {
    $error_message .= 'Pickup From you entered does not appear to be valid.<br />';
  }
 
  if(!preg_match($string_exp,$to)) {
    $error_message .= 'Pickup To you entered does not appear to be valid.<br />';
  }
 
  if(strlen($email_from) < 2) {
    $error_message .= 'The email you entered do not appear to be valid.<br />';
  }
 
  if(strlen($error_message) > 0) {
    died($error_message);
  }
 
    $email_message = "Form details below.\n\n";
 
     
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
 
     
 
    $email_message .= "From: ".clean_string($from)."\n";
    $email_message .= "To: ".clean_string($to)."\n";
    $email_message .= "Pickup: ".clean_string($pickup)."\n";
    $email_message .= "Dropup: ".clean_string($dropup)."\n";
    $email_message .= "Name: ".clean_string($name)."\n";
    $email_message .= "Phone: ".clean_string($contact)."\n";
    $email_message .= "Email: ".clean_string($email_from)."\n";
 
    $headers = "Global Vacation\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/plain; charset=iso-8859-1\r\n";
    $headers .= "X-Priority: 3\r\n";
    $headers .= "X-Mailer: PHP". phpversion() ."\r\n";
    @mail($email_to, $email_subject, $email_message, $headers);  
?>
 
<!-- include your own success html here -->
 
Thank you for contacting us. We will be in touch with you very soon.
 
<?php
 
}

if(isset($_POST['contactus'])) {
    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "19chetan87sharma@gmail.com";
    $email_subject = "Your email subject line";
 
    function died($error) {
        // your error code can go here
        echo "We are very sorry, but there were error(s) found with the form you submitted. ";
        echo "These errors appear below.<br /><br />";
        echo $error."<br /><br />";
        echo "Please go back and fix these errors.<br /><br />";
        die();
    }
 
 
    // validation expected data exists
    if(isset($_POST['name']) && $_POST['name'] == "" || isset($_POST['email'])  && $_POST['email'] == "" || isset($_POST['phone']) && $_POST['phone'] == "") {
        died('We are sorry, but there appears to be a problem with the form you submitted.');       
    }
 
    $name = $_POST['name']; // required
    $phone = $_POST['phone']; // required
    $email_from = $_POST['email']; // required
    $message = $_POST['message']; // required
 
    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
 
  if(!preg_match($email_exp,$email_from)) {
    $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
  }
 
    $string_exp = "/^[A-Za-z .'-]+$/";
 
  if(!preg_match($string_exp,$name)) {
    $error_message .= 'Name you entered does not appear to be valid.<br />';
  }
 
 
  if(strlen($email_from) < 2) {
    $error_message .= 'The email you entered do not appear to be valid.<br />';
  }
 
  if(strlen($error_message) > 0) {
    died($error_message);
  }
 
    $email_message = "Form details below.\n\n";
 
     
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
 
     

    $email_message .= "Name: ".clean_string($name)."\n";
    $email_message .= "Phone: ".clean_string($phone)."\n";
    $email_message .= "Email: ".clean_string($email_from)."\n";
    $email_message .= "Message: ".clean_string($message)."\n";
 
    $headers = "Global Vacation\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/plain; charset=iso-8859-1\r\n";
    $headers .= "X-Priority: 3\r\n";
    $headers .= "X-Mailer: PHP". phpversion() ."\r\n";
    @mail($email_to, $email_subject, $email_message, $headers);  
?>
 
<!-- include your own success html here -->
 
Thank you for contacting us. We will be in touch with you very soon.
 
<?php
 
}

header("Location:http://wpexpertsplugins.com/global-html/?success=1");
?>