<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $service = $_POST['service'];
    $message = $_POST['additional'];

    // Email details
    $to = 'techsolutionsinfo1@gmail.com'; // Your email address
    $subject = 'New form submission';
    $body = "Name: $name\nPhone: $phone\nEmail: $email\nSubject: $service\nMessage: $message";

    // Send email
    if (mail($to, $subject, $body)) {
        echo 'Thank you for your submission!';
    } else {
        echo 'Sorry, there was an error sending your message.';
    }
} else {
    // Handle invalid request method
    echo 'Invalid request';
}
?>
