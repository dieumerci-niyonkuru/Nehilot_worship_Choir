# NEHILOT WORSHIP INSTALLATION GUIDE

## 1. START XAMPP
- Open XAMPP Control Panel
- Start Apache
- Start MySQL

## 2. IMPORT DATABASE
1. Open phpMyAdmin: http://localhost/phpmyadmin
2. Create new database: nehilot_worship
3. Import the SQL file: database/nehilot_complete.sql

## 3. START REACT APPLICATION
Open Command Prompt/Git Bash in frontend folder:
cd C:\xampp\htdocs\nehilot-worship\frontend
npm install
npm start

## 4. ACCESS THE SYSTEM
- Home: http://localhost:3000
- Member Login: http://localhost:3000/login
- Leader Login: http://localhost:3000/leader-login
- Register: http://localhost:3000/register

## 5. LOGIN CREDENTIALS
### Admin:
- Username: Admin
- Password: Admin@Nahilot

### Leader:
- Username: Leader
- Password: Nehilot@2024

### Member (Demo):
- Any username/password works for demo

## 6. SYSTEM FEATURES
✅ Complete member registration
✅ Member dashboard with announcements
✅ Leader/Admin dashboard
✅ Member-Leader messaging system
✅ Event management
✅ Attendance tracking
✅ Music library
✅ Gallery
✅ Contact forms
✅ All navigation links work
✅ Logout functionality
✅ Responsive design

## 7. FOLDER STRUCTURE
nehilot-worship/
├── frontend/          # React application
├── backend/           # PHP backend API
├── database/          # SQL files
└── INSTALL.md         # This file