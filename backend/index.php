<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

require_once 'config/constants.php';

$response = array(
    "system" => "Nehilot Worship Management System",
    "version" => "1.0.0",
    "description" => "Comprehensive web-based platform for Nehilot Worship Choir",
    "endpoints" => array(
        "/api/members" => "Manage choir members",
        "/api/events" => "Manage events and rehearsals",
        "/api/attendance" => "Track attendance",
        "/api/users" => "User authentication and management"
    ),
    "status" => "Online",
    "timestamp" => date("Y-m-d H:i:s")
);

echo json_encode($response);
?>