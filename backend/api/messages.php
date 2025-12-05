<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require_once '../config/database.php';

$database = new Database();
$db = $database->getConnection();

$method = $_SERVER['REQUEST_METHOD'];

switch($method) {
    case 'GET':
        // Get all messages (for leaders) or member's messages
        if(isset($_GET['member_id'])) {
            $query = "SELECT * FROM messages WHERE member_id = ? ORDER BY created_at DESC";
            $stmt = $db->prepare($query);
            $stmt->execute([$_GET['member_id']]);
        } else {
            $query = "SELECT m.*, mem.full_name as member_name FROM messages m 
                     JOIN members mem ON m.member_id = mem.member_id 
                     ORDER BY m.created_at DESC";
            $stmt = $db->prepare($query);
            $stmt->execute();
        }
        $messages = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($messages);
        break;
        
    case 'POST':
        // Send new message
        $data = json_decode(file_get_contents("php://input"));
        
        $query = "INSERT INTO messages (member_id, subject, message, message_type) 
                 VALUES (:member_id, :subject, :message, :message_type)";
        
        $stmt = $db->prepare($query);
        
        $stmt->bindParam(':member_id', $data->member_id);
        $stmt->bindParam(':subject', $data->subject);
        $stmt->bindParam(':message', $data->message);
        $stmt->bindParam(':message_type', $data->message_type);
        
        if($stmt->execute()) {
            echo json_encode(["message" => "Message sent successfully."]);
        } else {
            http_response_code(500);
            echo json_encode(["message" => "Unable to send message."]);
        }
        break;
        
    case 'PUT':
        // Reply to message
        $data = json_decode(file_get_contents("php://input"));
        
        $query = "UPDATE messages SET 
                 reply = :reply,
                 replied_by = :replied_by,
                 replied_at = NOW(),
                 status = 'Replied'
                 WHERE message_id = :message_id";
        
        $stmt = $db->prepare($query);
        
        $stmt->bindParam(':message_id', $data->message_id);
        $stmt->bindParam(':reply', $data->reply);
        $stmt->bindParam(':replied_by', $data->replied_by);
        
        if($stmt->execute()) {
            echo json_encode(["message" => "Reply sent successfully."]);
        } else {
            http_response_code(500);
            echo json_encode(["message" => "Unable to send reply."]);
        }
        break;
        
    case 'DELETE':
        // Delete message
        $data = json_decode(file_get_contents("php://input"));
        
        $query = "DELETE FROM messages WHERE message_id = :message_id";
        $stmt = $db->prepare($query);
        $stmt->bindParam(':message_id', $data->message_id);
        
        if($stmt->execute()) {
            echo json_encode(["message" => "Message deleted successfully."]);
        } else {
            http_response_code(500);
            echo json_encode(["message" => "Unable to delete message."]);
        }
        break;
}
?>