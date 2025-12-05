<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require_once '../config/database.php';
require_once '../models/Member.php';

$database = new Database();
$db = $database->getConnection();
$member = new Member($db);

$method = $_SERVER['REQUEST_METHOD'];

switch($method) {
    case 'GET':
        if(isset($_GET['id'])) {
            $result = $member->getMember($_GET['id']);
        } else {
            $result = $member->getAllMembers();
        }
        echo json_encode($result);
        break;
        
    case 'POST':
        $data = json_decode(file_get_contents("php://input"));
        if($member->createMember($data)) {
            echo json_encode(array("message" => "Member created successfully."));
        } else {
            echo json_encode(array("message" => "Unable to create member."));
        }
        break;
        
    case 'PUT':
        $data = json_decode(file_get_contents("php://input"));
        if($member->updateMember($data)) {
            echo json_encode(array("message" => "Member updated successfully."));
        } else {
            echo json_encode(array("message" => "Unable to update member."));
        }
        break;
        
    case 'DELETE':
        $data = json_decode(file_get_contents("php://input"));
        if($member->deleteMember($data->id)) {
            echo json_encode(array("message" => "Member deleted successfully."));
        } else {
            echo json_encode(array("message" => "Unable to delete member."));
        }
        break;
}
?>