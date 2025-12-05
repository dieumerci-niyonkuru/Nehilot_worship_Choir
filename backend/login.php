<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// For development only - simple login that accepts username/password
$data = json_decode(file_get_contents('php://input'), true);

if (!$data) {
    echo json_encode(['success' => false, 'message' => 'No data received']);
    exit;
}

$username = isset($data['username']) ? trim($data['username']) : '';
$password = isset($data['password']) ? trim($data['password']) : '';

// Debug: log what we received
error_log("Login attempt: username=$username, password=$password");

// SIMPLE CHECK: Accepts Admin/password or Leader/password
$validCredentials = [
    'admin' => [
        'user_id' => 1,
        'username' => 'Admin',
        'role' => 'Admin',
        'full_name' => 'System Administrator',
        'email' => 'admin@nehilotworship.com'
    ],
    'leader' => [
        'user_id' => 2,
        'username' => 'Leader',
        'role' => 'Leader',
        'full_name' => 'Choir Leader',
        'email' => 'leader@nehilotworship.com'
    ]
];

// Convert input to lowercase for case-insensitive check
$usernameLower = strtolower($username);

// Check if username exists in our valid credentials
if (array_key_exists($usernameLower, $validCredentials) && $password === 'password') {
    // Password is correct
    echo json_encode([
        'success' => true,
        'user' => $validCredentials[$usernameLower]
    ]);
} else {
    // Invalid credentials
    echo json_encode([
        'success' => false,
        'message' => 'Invalid username or password. Use: Admin/password or Leader/password'
    ]);
}
?>