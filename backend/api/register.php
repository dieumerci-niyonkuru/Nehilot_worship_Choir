<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require_once '../config/database.php';
require_once '../models/Member.php';

$database = new Database();
$db = $database->getConnection();

$data = json_decode(file_get_contents("php://input"));

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Validate required fields
    $required = ['full_name', 'email', 'phone', 'date_of_birth', 'gender', 'voice_part'];
    
    foreach ($required as $field) {
        if (empty($data->$field)) {
            http_response_code(400);
            echo json_encode(["error" => "Field '$field' is required"]);
            exit();
        }
    }
    
    // Check if email already exists
    $checkEmail = $db->prepare("SELECT member_id FROM members WHERE email = ?");
    $checkEmail->execute([$data->email]);
    
    if ($checkEmail->rowCount() > 0) {
        http_response_code(409);
        echo json_encode(["error" => "Email already registered"]);
        exit();
    }
    
    // Start transaction
    $db->beginTransaction();
    
    try {
        // Insert into members table
        $sql = "INSERT INTO members (full_name, email, phone, date_of_birth, gender, voice_part, join_date, address, emergency_contact) 
                VALUES (?, ?, ?, ?, ?, ?, CURDATE(), ?, ?)";
        
        $stmt = $db->prepare($sql);
        $stmt->execute([
            $data->full_name,
            $data->email,
            $data->phone,
            $data->date_of_birth,
            $data->gender,
            $data->voice_part,
            $data->address ?? '',
            $data->emergency_contact ?? ''
        ]);
        
        $member_id = $db->lastInsertId();
        
        // Generate username from email
        $username = strtok($data->email, '@');
        $password = password_hash('Welcome123', PASSWORD_DEFAULT); // Default password
        
        // Insert into users table
        $userSql = "INSERT INTO users (member_id, username, password, email, role) 
                   VALUES (?, ?, ?, ?, 'Member')";
        $userStmt = $db->prepare($userSql);
        $userStmt->execute([$member_id, $username, $password, $data->email]);
        
        $db->commit();
        
        // Send success response
        http_response_code(201);
        echo json_encode([
            "success" => true,
            "message" => "Registration successful",
            "member_id" => $member_id,
            "username" => $username,
            "default_password" => "Welcome123"
        ]);
        
    } catch (PDOException $e) {
        $db->rollBack();
        http_response_code(500);
        echo json_encode(["error" => "Registration failed: " . $e->getMessage()]);
    }
}
?>