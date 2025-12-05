<?php
class Member {
    private $conn;
    private $table = "members";

    public $member_id;
    public $first_name;
    public $last_name;
    public $email;
    public $phone;
    public $voice_part;
    public $join_date;
    public $status;

    public function __construct($db) {
        $this->conn = $db;
    }

    public function getAllMembers() {
        $query = "SELECT * FROM " . $this->table . " ORDER BY last_name ASC";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getMember($id) {
        $query = "SELECT * FROM " . $this->table . " WHERE member_id = ?";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(1, $id);
        $stmt->execute();
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function createMember($data) {
        $query = "INSERT INTO " . $this->table . " 
                 (first_name, last_name, email, phone, voice_part, join_date, status) 
                  VALUES (:first_name, :last_name, :email, :phone, :voice_part, :join_date, :status)";
        
        $stmt = $this->conn->prepare($query);
        
        $stmt->bindParam(':first_name', $data->first_name);
        $stmt->bindParam(':last_name', $data->last_name);
        $stmt->bindParam(':email', $data->email);
        $stmt->bindParam(':phone', $data->phone);
        $stmt->bindParam(':voice_part', $data->voice_part);
        $stmt->bindParam(':join_date', $data->join_date);
        $stmt->bindParam(':status', $data->status);
        
        return $stmt->execute();
    }
}
?>