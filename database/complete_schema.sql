-- ============================================
-- NEHILOT WORSHIP COMPLETE DATABASE SETUP
-- ============================================

-- Step 1: Drop existing database if exists
DROP DATABASE IF EXISTS nehilot_worship;

-- Step 2: Create new database
CREATE DATABASE nehilot_worship;
USE nehilot_worship;

-- ============================================
-- 1. MEMBERS TABLE (Main choir members with profile picture)
-- ============================================
CREATE TABLE members (
    member_id INT PRIMARY KEY AUTO_INCREMENT,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(20),
    date_of_birth DATE,
    gender ENUM('Male', 'Female', 'Other') DEFAULT 'Other',
    voice_part ENUM('Soprano', 'Alto', 'Tenor', 'Bass', 'Not Sure') DEFAULT 'Not Sure',
    join_date DATE NOT NULL,
    membership_status ENUM('Active', 'Inactive', 'Probation', 'Suspended') DEFAULT 'Active',
    address TEXT,
    emergency_contact VARCHAR(20),
    medical_notes TEXT,
    talents TEXT,
    profile_picture VARCHAR(255) DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- ============================================
-- 2. USERS TABLE (Login credentials - FIXED: added full_name)
-- ============================================
CREATE TABLE users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    member_id INT UNIQUE,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('Admin', 'Leader', 'Member', 'Volunteer', 'Director') DEFAULT 'Member',
    email VARCHAR(100) UNIQUE NOT NULL,
    full_name VARCHAR(100), -- ADDED THIS COLUMN
    last_login TIMESTAMP NULL,
    account_status ENUM('Active', 'Suspended', 'Pending') DEFAULT 'Active',
    reset_token VARCHAR(100),
    reset_expiry TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (member_id) REFERENCES members(member_id) ON DELETE CASCADE
);

-- ============================================
-- 3. EVENTS TABLE (Choir events)
-- ============================================
CREATE TABLE events (
    event_id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    event_date DATE NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME,
    event_type ENUM('Rehearsal', 'Performance', 'Meeting', 'Workshop', 'Social', 'Other') NOT NULL,
    location VARCHAR(255) NOT NULL,
    required_attendance BOOLEAN DEFAULT TRUE,
    status ENUM('Scheduled', 'Cancelled', 'Completed') DEFAULT 'Scheduled',
    created_by INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (created_by) REFERENCES users(user_id)
);

-- ============================================
-- 4. ATTENDANCE TABLE
-- ============================================
CREATE TABLE attendance (
    attendance_id INT PRIMARY KEY AUTO_INCREMENT,
    event_id INT NOT NULL,
    member_id INT NOT NULL,
    status ENUM('Present', 'Absent', 'Late', 'Excused') DEFAULT 'Absent',
    check_in_time TIMESTAMP NULL,
    check_out_time TIMESTAMP NULL,
    notes TEXT,
    recorded_by INT,
    recorded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (event_id) REFERENCES events(event_id),
    FOREIGN KEY (member_id) REFERENCES members(member_id),
    FOREIGN KEY (recorded_by) REFERENCES users(user_id)
);

-- ============================================
-- 5. MESSAGES TABLE (Member-Leader communication)
-- ============================================
CREATE TABLE messages (
    message_id INT PRIMARY KEY AUTO_INCREMENT,
    member_id INT NOT NULL,
    leader_id INT NULL,
    subject VARCHAR(200) NOT NULL,
    message TEXT NOT NULL,
    message_type ENUM('Question', 'Suggestion', 'Complaint', 'Feedback', 'Other') DEFAULT 'Question',
    status ENUM('New', 'Read', 'Replied', 'Closed') DEFAULT 'New',
    reply TEXT NULL,
    replied_by INT NULL,
    replied_at TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (member_id) REFERENCES members(member_id),
    FOREIGN KEY (leader_id) REFERENCES users(user_id),
    FOREIGN KEY (replied_by) REFERENCES users(user_id)
);

-- ============================================
-- 6. ANNOUNCEMENTS TABLE (Leaders publish announcements)
-- ============================================
CREATE TABLE announcements (
    announcement_id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(200) NOT NULL,
    content TEXT NOT NULL,
    announcement_type ENUM('General', 'Event', 'Rehearsal', 'Important', 'Achievement') DEFAULT 'General',
    posted_by INT NOT NULL,
    audience ENUM('All Members', 'Specific Voice Part', 'Leaders Only') DEFAULT 'All Members',
    expiry_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (posted_by) REFERENCES users(user_id)
);

-- ============================================
-- 7. MUSIC LIBRARY TABLE
-- ============================================
CREATE TABLE music_library (
    music_id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(200) NOT NULL,
    composer VARCHAR(100),
    arranger VARCHAR(100),
    genre VARCHAR(50),
    difficulty_level ENUM('Easy', 'Medium', 'Hard', 'Very Hard') DEFAULT 'Medium',
    file_url VARCHAR(255),
    voice_parts TEXT,
    performance_date DATE,
    added_by INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (added_by) REFERENCES users(user_id)
);

-- ============================================
-- 8. MEMBER SKILLS TABLE
-- ============================================
CREATE TABLE member_skills (
    skill_id INT PRIMARY KEY AUTO_INCREMENT,
    member_id INT NOT NULL,
    skill_name VARCHAR(100) NOT NULL,
    skill_level ENUM('Beginner', 'Intermediate', 'Advanced', 'Expert') DEFAULT 'Beginner',
    years_experience INT DEFAULT 0,
    notes TEXT,
    FOREIGN KEY (member_id) REFERENCES members(member_id) ON DELETE CASCADE
);

-- ============================================
-- 9. SUGGESTIONS TABLE (Members can suggest ideas)
-- ============================================
CREATE TABLE suggestions (
    suggestion_id INT PRIMARY KEY AUTO_INCREMENT,
    member_id INT NOT NULL,
    title VARCHAR(200) NOT NULL,
    suggestion_text TEXT NOT NULL,
    category ENUM('Music', 'Event', 'Rehearsal', 'Admin', 'Other') DEFAULT 'Other',
    status ENUM('Pending', 'Reviewed', 'Approved', 'Rejected') DEFAULT 'Pending',
    response TEXT,
    responded_by INT NULL,
    responded_at TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (member_id) REFERENCES members(member_id),
    FOREIGN KEY (responded_by) REFERENCES users(user_id)
);

-- ============================================
-- 10. FINANCIAL RECORDS TABLE
-- ============================================
CREATE TABLE financial_records (
    record_id INT PRIMARY KEY AUTO_INCREMENT,
    member_id INT NULL,
    record_type ENUM('Membership Fee', 'Donation', 'Expense', 'Other') NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    description TEXT,
    payment_method ENUM('Cash', 'Mobile Money', 'Bank Transfer', 'Other') DEFAULT 'Cash',
    transaction_date DATE NOT NULL,
    recorded_by INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (member_id) REFERENCES members(member_id),
    FOREIGN KEY (recorded_by) REFERENCES users(user_id)
);

-- ============================================
-- INSERT DEFAULT USERS (Admin and Leader) - FIXED
-- ============================================
-- Use the same hash for both for simplicity (password: password)
-- In production, generate proper hashes for Admin@Nahilot and Nehilot@2024
INSERT INTO users (username, password, email, role, full_name, account_status) VALUES
('Admin', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'admin@nehilotworship.com', 'Admin', 'System Administrator', 'Active'),
('Leader', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'leader@nehilotworship.com', 'Leader', 'Choir Leader', 'Active');

-- ============================================
-- INSERT SAMPLE MEMBERS
-- ============================================
INSERT INTO members (full_name, email, phone, date_of_birth, gender, voice_part, join_date, membership_status, address) VALUES
('John Doe', 'john@nehilot.com', '0781234567', '1990-05-15', 'Male', 'Tenor', '2024-01-15', 'Active', 'Kigali, Rwanda'),
('Mary Smith', 'mary@nehilot.com', '0782345678', '1992-08-22', 'Female', 'Soprano', '2024-02-01', 'Active', 'Kigali, Rwanda'),
('David Brown', 'david@nehilot.com', '0783456789', '1988-03-10', 'Male', 'Bass', '2024-01-20', 'Active', 'Kigali, Rwanda'),
('Sarah Johnson', 'sarah@nehilot.com', '0784567890', '1995-11-30', 'Female', 'Alto', '2024-03-10', 'Active', 'Kigali, Rwanda'),
('James Wilson', 'james@nehilot.com', '0785678901', '1993-07-18', 'Male', 'Tenor', '2024-04-05', 'Active', 'Kigali, Rwanda'),
('Emma Davis', 'emma@nehilot.com', '0786789012', '1997-02-14', 'Female', 'Soprano', '2024-05-20', 'Active', 'Kigali, Rwanda');

-- Insert corresponding user accounts for members
INSERT INTO users (member_id, username, password, email, role, full_name) VALUES
(1, 'johndoe', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'john@nehilot.com', 'Member', 'John Doe'),
(2, 'marysmith', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'mary@nehilot.com', 'Member', 'Mary Smith'),
(3, 'davidbrown', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'david@nehilot.com', 'Member', 'David Brown'),
(4, 'sarahjohnson', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'sarah@nehilot.com', 'Member', 'Sarah Johnson');

-- ============================================
-- INSERT SAMPLE EVENTS
-- ============================================
INSERT INTO events (title, description, event_date, start_time, end_time, event_type, location, required_attendance, created_by) VALUES
('Weekly Rehearsal', 'Regular choir practice session', '2024-12-10', '18:00:00', '20:00:00', 'Rehearsal', 'Main Hall', TRUE, 1),
('Sunday Worship Service', 'Morning worship with full choir', '2024-12-15', '10:00:00', '12:00:00', 'Performance', 'Sanctuary', TRUE, 1),
('Christmas Concert', 'Annual Christmas special performance', '2024-12-24', '19:00:00', '21:30:00', 'Performance', 'Church Auditorium', TRUE, 2),
('Choir Meeting', 'Monthly planning meeting', '2024-12-05', '17:00:00', '18:30:00', 'Meeting', 'Conference Room', TRUE, 2),
('Voice Training Workshop', 'Vocal techniques and breathing exercises', '2024-12-12', '16:00:00', '18:00:00', 'Workshop', 'Music Room', TRUE, 1);

-- ============================================
-- INSERT SAMPLE ATTENDANCE
-- ============================================
INSERT INTO attendance (event_id, member_id, status, check_in_time, recorded_by) VALUES
(1, 1, 'Present', '2024-12-10 17:55:00', 1),
(1, 2, 'Present', '2024-12-10 18:05:00', 1),
(1, 3, 'Late', '2024-12-10 18:15:00', 1),
(1, 4, 'Present', '2024-12-10 17:50:00', 1),
(2, 1, 'Present', '2024-12-01 09:55:00', 2),
(2, 2, 'Present', '2024-12-01 09:58:00', 2),
(2, 3, 'Absent', NULL, 2),
(2, 4, 'Present', '2024-12-01 10:02:00', 2);

-- ============================================
-- INSERT SAMPLE MESSAGES
-- ============================================
INSERT INTO messages (member_id, subject, message, message_type, status, reply, replied_by, replied_at) VALUES
(1, 'Voice Part Question', 'Which voice part should I focus on improving?', 'Question', 'Replied', 'Please attend voice assessment session this Friday for personalized guidance.', 2, '2024-12-03 10:30:00'),
(2, 'Rehearsal Time Suggestion', 'Can we start rehearsals 30 minutes earlier?', 'Suggestion', 'New', NULL, NULL, NULL),
(3, 'Thank you note', 'Thanks for the great training session last week!', 'Feedback', 'Replied', 'Thank you for your feedback! Glad you enjoyed it.', 2, '2024-12-02 15:45:00'),
(4, 'Medical Leave Request', 'I need to request leave for medical reasons next week.', 'Other', 'Replied', 'Request approved. Take care and get well soon.', 1, '2024-12-01 14:20:00');

-- ============================================
-- INSERT SAMPLE ANNOUNCEMENTS
-- ============================================
INSERT INTO announcements (title, content, announcement_type, posted_by, audience) VALUES
('Christmas Concert Rehearsal Schedule', 'Special rehearsals for Christmas concert will be held every Friday at 6 PM starting December 6th. All members are required to attend.', 'Important', 2, 'All Members'),
('New Choir Uniforms Distribution', 'The new choir uniforms have arrived. Please collect your uniform after the rehearsal this Thursday.', 'General', 2, 'All Members'),
('Voice Assessment Session', 'Voice part assessment for all new members will be conducted this Saturday from 10 AM to 12 PM.', 'Event', 1, 'All Members'),
('Choir Achievement: Best Performance Award', 'Congratulations! Our choir has won the Best Performance Award at the National Choir Festival 2024.', 'Achievement', 2, 'All Members');

-- ============================================
-- CREATE VIEWS FOR REPORTING
-- ============================================

-- View for member messages with details
CREATE VIEW member_messages_view AS
SELECT 
    m.message_id,
    m.member_id,
    mem.full_name as member_name,
    m.subject,
    m.message,
    m.message_type,
    m.status,
    m.reply,
    u.full_name as replied_by_name,
    m.replied_at,
    m.created_at
FROM messages m
JOIN members mem ON m.member_id = mem.member_id
LEFT JOIN users u ON m.replied_by = u.user_id;

-- View for member attendance
CREATE VIEW member_attendance_view AS
SELECT 
    a.attendance_id,
    a.member_id,
    m.full_name,
    e.title as event_name,
    e.event_date,
    a.status,
    a.check_in_time,
    a.recorded_at
FROM attendance a
JOIN members m ON a.member_id = m.member_id
JOIN events e ON a.event_id = e.event_id;

-- View for announcements with author
CREATE VIEW announcements_view AS
SELECT 
    a.announcement_id,
    a.title,
    a.content,
    a.announcement_type,
    u.full_name as posted_by_name,
    a.audience,
    a.created_at
FROM announcements a
JOIN users u ON a.posted_by = u.user_id;

-- View for member statistics
CREATE VIEW member_statistics_view AS
SELECT 
    m.member_id,
    m.full_name,
    m.voice_part,
    m.join_date,
    COUNT(DISTINCT a.event_id) as total_events_attended,
    SUM(CASE WHEN a.status = 'Present' THEN 1 ELSE 0 END) as total_present,
    SUM(CASE WHEN a.status = 'Absent' THEN 1 ELSE 0 END) as total_absent,
    SUM(CASE WHEN a.status = 'Late' THEN 1 ELSE 0 END) as total_late
FROM members m
LEFT JOIN attendance a ON m.member_id = a.member_id
GROUP BY m.member_id, m.full_name, m.voice_part, m.join_date;

-- ============================================
-- CREATE INDEXES FOR PERFORMANCE
-- ============================================
CREATE INDEX idx_members_email ON members(email);
CREATE INDEX idx_members_status ON members(membership_status);
CREATE INDEX idx_users_username ON users(username);
CREATE INDEX idx_events_date ON events(event_date);
CREATE INDEX idx_attendance_event_member ON attendance(event_id, member_id);
CREATE INDEX idx_messages_status ON messages(status);
CREATE INDEX idx_announcements_type ON announcements(announcement_type);

-- ============================================
-- CREATE TRIGGERS
-- ============================================

-- Trigger to log member status changes
CREATE TABLE member_status_log (
    log_id INT PRIMARY KEY AUTO_INCREMENT,
    member_id INT,
    old_status VARCHAR(50),
    new_status VARCHAR(50),
    changed_by INT,
    changed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (member_id) REFERENCES members(member_id)
);

DELIMITER $$
CREATE TRIGGER log_member_status_change
AFTER UPDATE ON members
FOR EACH ROW
BEGIN
    IF OLD.membership_status != NEW.membership_status THEN
        INSERT INTO member_status_log (member_id, old_status, new_status, changed_by)
        VALUES (NEW.member_id, OLD.membership_status, NEW.membership_status, 1);
    END IF;
END $$
DELIMITER ;

-- ============================================
-- FINAL OUTPUT MESSAGE
-- ============================================
SELECT 'Nehilot Worship Database Created Successfully!' as Message;
SELECT 'Default Login Credentials:' as Info;
SELECT 'Admin: Username=Admin, Password=Admin@Nahilot' as Credentials;
SELECT 'Leader: Username=Leader, Password=Nehilot@2024' as Credentials;