<?php
session_start();

// Hardcoded admin credentials (for demonstration purposes)
$adminUsername = "admin";
$adminPassword = "admin123";

// Retrieve user inputs
$username = $_POST['username'];
$password = $_POST['password'];

// Validate admin credentials
if ($username === $adminUsername && $password === $adminPassword) {
    // Admin authentication successful
    $_SESSION['admin'] = true;
    header("Location: admin-dashboard.php"); // Redirect to admin dashboard
    exit();
} else {
    // Admin authentication failed
    echo "Invalid credentials. Please try again.";
}
?>
