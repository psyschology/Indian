ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
<?php
// Database connection parameters
$servername = "localhost"; // Change if your MySQL server is on a different host
$username = "friendsh"; // Replace with your MySQL username
$password = "91iYUnZq%y)9I-"; // Replace with your MySQL password
$dbname = "formdata"; // Replace with the name of your database
$tablename = "form"; // Replace with the name of your table

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Process form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and validate form data (optional)
    $name = $_POST['name']; // Assuming 'name' is the name attribute of the input field
    $email = $_POST['email']; // Assuming 'email' is the name attribute of the input field

    // Example: Sanitize form input
    $name = mysqli_real_escape_string($conn, $name);
    $email = mysqli_real_escape_string($conn, $email);

    // Example: Validate email format (optional)
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Invalid email format");
    }

    // Insert data into database
    $sql = "INSERT INTO $tablename (name, email) VALUES ('$name', '$email')";
    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Close connection
$conn->close();
?>
