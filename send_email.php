<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $tel = $_POST["tel"];
    $message = $_POST["message"];
    
    // Prepare email headers
    $to = $email;
    $subject = "Thank you for contacting us";
    $headers = "From: jacque.gsouza@gmail.com" . "\r\n" .
               "Reply-To: jacque.gsouza@gmail.com" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();
    
    // Prepare email content
    $email_content = "Dear $name,\n\n";
    $email_content .= "Thank you for contacting us. We will get back to you as soon as possible.\n\n";
    $email_content .= "Your message:\n$message\n\n";
    $email_content .= "Best regards,\nJacque";
    
    // Send email to user
    mail($to, $subject, $email_content, $headers);
    
    // Send email to you
    $to = "jacque.gsouza@gmail.com";
    $subject = "New Contact Form Submission";
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();
    
    // Prepare email content for you
    $email_content = "You have received a new message from the contact form on your website.\n\n";
    $email_content .= "Name: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Phone: $tel\n";
    $email_content .= "Message:\n$message\n";
    
    // Send email to you
    mail($to, $subject, $email_content, $headers);
    
    // Redirect back to the form with success message
    header("Location: sent.html?status=success");
} else {
    // Redirect back to the form with error message
    header("Location: index.html?status=error");
}
?>