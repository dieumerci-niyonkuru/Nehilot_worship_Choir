<?php
// test_db.php
echo "<h2>Database Connection Test</h2>";

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "nehilot_worship";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully to database: $dbname<br><br>";

// Check users table
echo "<h3>Users in database:</h3>";
$sql = "SELECT user_id, username, password, role, full_name, email FROM users WHERE role IN ('Admin', 'Leader')";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "<table border='1' cellpadding='5' cellspacing='0'>";
    echo "<tr><th>ID</th><th>Username</th><th>Password Hash</th><th>Role</th><th>Full Name</th><th>Email</th></tr>";
    while($row = $result->fetch_assoc()) {
        echo "<tr>";
        echo "<td>" . $row["user_id"] . "</td>";
        echo "<td>" . $row["username"] . "</td>";
        echo "<td>" . substr($row["password"], 0, 30) . "...</td>";
        echo "<td>" . $row["role"] . "</td>";
        echo "<td>" . $row["full_name"] . "</td>";
        echo "<td>" . $row["email"] . "</td>";
        echo "</tr>";
    }
    echo "</table>";
} else {
    echo "No users found";
}

// Test password verification
echo "<h3>Password Verification Test:</h3>";
$test_password = "password";
$test_hash = '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi';

if (password_verify($test_password, $test_hash)) {
    echo "✓ Password '$test_password' matches the hash in database<br>";
} else {
    echo "✗ Password '$test_password' does NOT match the hash<br>";
}

// Test other passwords
$other_passwords = ['Admin@Nahilot', 'Nehilot@2024', 'test', 'admin123'];
foreach ($other_passwords as $pw) {
    if (password_verify($pw, $test_hash)) {
        echo "✓ Password '$pw' matches the hash<br>";
    }
}

$conn->close();
?>