import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function MemberDashboard() {
    const [user] = useState({
        full_name: 'John Doe',
        username: 'johndoe',
        role: 'Member'
    });
    
    const [myEvents] = useState([
        { id: 1, name: 'Weekly Rehearsal', date: '2024-12-10', time: '18:00', type: 'Rehearsal', location: 'Main Hall' },
        { id: 2, name: 'Sunday Service', date: '2024-12-15', time: '10:00', type: 'Performance', location: 'Sanctuary' },
        { id: 3, name: 'Christmas Concert', date: '2024-12-24', time: '19:00', type: 'Performance', location: 'Church Auditorium' }
    ]);
    
    const [myAttendance] = useState([
        { id: 1, event: 'Weekly Rehearsal', date: '2024-12-03', status: 'Present' },
        { id: 2, event: 'Sunday Service', date: '2024-12-01', status: 'Present' },
        { id: 3, event: 'Weekly Rehearsal', date: '2024-11-26', status: 'Absent' },
        { id: 4, event: 'Choir Meeting', date: '2024-11-24', status: 'Present' },
        { id: 5, event: 'Sunday Service', date: '2024-11-17', status: 'Present' }
    ]);

    const [announcements] = useState([
        { 
            id: 1, 
            title: 'Christmas Concert Rehearsal Schedule', 
            content: 'Special rehearsals for Christmas concert will be held every Friday at 6 PM starting December 6th. All members are required to attend.',
            type: 'Important', 
            date: 'Today',
            author: 'Choir Leader'
        },
        { 
            id: 2, 
            title: 'New Choir Uniforms Distribution', 
            content: 'The new choir uniforms have arrived. Please collect your uniform after the rehearsal this Thursday.',
            type: 'General', 
            date: '2 days ago',
            author: 'Choir Leader'
        },
        { 
            id: 3, 
            title: 'Voice Assessment Session', 
            content: 'Voice part assessment for all new members will be conducted this Saturday from 10 AM to 12 PM.',
            type: 'Event', 
            date: '1 week ago',
            author: 'Music Director'
        },
        { 
            id: 4, 
            title: 'Choir Achievement: Best Performance Award', 
            content: 'Congratulations! Our choir has won the Best Performance Award at the National Choir Festival 2024.',
            type: 'Achievement', 
            date: '2 weeks ago',
            author: 'Choir Leader'
        }
    ]);

    const calculateAttendanceRate = () => {
        if (myAttendance.length === 0) return 0;
        const present = myAttendance.filter(a => a.status === 'Present').length;
        return Math.round((present / myAttendance.length) * 100);
    };

    return (
        <div className="member-dashboard container mt-4">
            <div className="row mb-4">
                <div className="col-md-12">
                    <div className="card bg-primary text-white">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-8">
                                    <h3>Welcome back, {user.full_name}!</h3>
                                    <p className="mb-0">
                                        <i className="fas fa-music me-2"></i>
                                        Keep up the great work with Nehilot Worship
                                    </p>
                                </div>
                                <div className="col-md-4 text-end">
                                    <div className="h2">{calculateAttendanceRate()}%</div>
                                    <p>Your Attendance Rate</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="row">
                {/* Upcoming Events */}
                <div className="col-lg-6 mb-4">
                    <div className="card shadow">
                        <div className="card-header bg-success text-white">
                            <h6 className="m-0 font-weight-bold">
                                <i className="fas fa-calendar me-2"></i>
                                Upcoming Events
                            </h6>
                        </div>
                        <div className="card-body">
                            <div className="list-group">
                                {myEvents.map(event => (
                                    <div key={event.id} className="list-group-item">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h6 className="mb-1">{event.name}</h6>
                                            <small>{event.date}</small>
                                        </div>
                                        <p className="mb-1">
                                            <small>
                                                <strong>Time:</strong> {event.time} | 
                                                <strong> Type:</strong> <span className="badge bg-success">{event.type}</span>
                                            </small>
                                        </p>
                                        <small className="text-muted">
                                            <i className="fas fa-map-marker-alt me-1"></i>
                                            {event.location}
                                        </small>
                                    </div>
                                ))}
                            </div>
                            <div className="text-center mt-3">
                                <Link to="/events" className="btn btn-sm btn-success">
                                    View All Events
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* My Attendance */}
                <div className="col-lg-6 mb-4">
                    <div className="card shadow">
                        <div className="card-header bg-info text-white">
                            <h6 className="m-0 font-weight-bold">
                                <i className="fas fa-clipboard-check me-2"></i>
                                My Recent Attendance
                            </h6>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-sm">
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Event</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {myAttendance.map(record => (
                                            <tr key={record.id}>
                                                <td>{record.date}</td>
                                                <td>{record.event}</td>
                                                <td>
                                                    <span className={`badge ${
                                                        record.status === 'Present' ? 'bg-success' :
                                                        record.status === 'Absent' ? 'bg-danger' :
                                                        record.status === 'Late' ? 'bg-warning' : 'bg-secondary'
                                                    }`}>
                                                        {record.status}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="text-center">
                                <Link to="/member/attendance" className="btn btn-sm btn-info">
                                    View Full History
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Announcements from Leaders */}
            <div className="row">
                <div className="col-lg-12">
                    <div className="card shadow">
                        <div className="card-header bg-warning text-dark">
                            <h6 className="m-0 font-weight-bold">
                                <i className="fas fa-bullhorn me-2"></i>
                                Latest Announcements from Leaders
                            </h6>
                        </div>
                        <div className="card-body">
                            {announcements.length === 0 ? (
                                <p className="text-muted">No announcements from leaders yet.</p>
                            ) : (
                                announcements.map(announcement => (
                                    <div key={announcement.id} className="mb-3 p-3 border rounded">
                                        <div className="d-flex justify-content-between align-items-start">
                                            <div>
                                                <h6 className="mb-1">
                                                    {announcement.title}
                                                    <span className={`badge ms-2 ${
                                                        announcement.type === 'Important' ? 'bg-danger' :
                                                        announcement.type === 'Event' ? 'bg-success' :
                                                        announcement.type === 'Achievement' ? 'bg-primary' : 'bg-secondary'
                                                    }`}>
                                                        {announcement.type}
                                                    </span>
                                                </h6>
                                                <p className="mb-2">{announcement.content}</p>
                                                <small className="text-muted">
                                                    <i className="fas fa-user me-1"></i>
                                                    {announcement.author} • 
                                                    <i className="fas fa-clock ms-2 me-1"></i>
                                                    Posted {announcement.date}
                                                </small>
                                            </div>
                                            <button className="btn btn-sm btn-outline-warning">
                                                <i className="fas fa-share-alt"></i>
                                            </button>
                                        </div>
                                    </div>
                                ))
                            )}
                            <div className="text-center">
                                <Link to="/announcements" className="btn btn-sm btn-warning">
                                    View All Announcements
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Quick Links */}
            <div className="row mt-4">
                <div className="col-md-3 mb-3">
                    <div className="card text-center h-100">
                        <div className="card-body">
                            <i className="fas fa-user fa-2x mb-3 text-primary"></i>
                            <h6>My Profile</h6>
                            <Link to="/profile" className="btn btn-outline-primary btn-sm">
                                View/Edit
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-3">
                    <div className="card text-center h-100">
                        <div className="card-body">
                            <i className="fas fa-calendar-alt fa-2x mb-3 text-success"></i>
                            <h6>Events Calendar</h6>
                            <Link to="/events" className="btn btn-outline-success btn-sm">
                                View Calendar
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-3">
                    <div className="card text-center h-100">
                        <div className="card-body">
                            <i className="fas fa-envelope fa-2x mb-3 text-info"></i>
                            <h6>Messages</h6>
                            <Link to="/member/messages" className="btn btn-outline-info btn-sm">
                                Message Leaders
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-3">
                    <div className="card text-center h-100">
                        <div className="card-body">
                            <i className="fas fa-chart-line fa-2x mb-3 text-warning"></i>
                            <h6>My Statistics</h6>
                            <Link to="/member/stats" className="btn btn-outline-warning btn-sm">
                                View Stats
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MemberDashboard;