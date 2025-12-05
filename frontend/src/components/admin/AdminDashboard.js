import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function AdminDashboard() {
    const [stats] = useState({
        totalMembers: 45,
        activeMembers: 38,
        totalEvents: 8,
        pendingAttendance: 5
    });

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Admin Dashboard</h2>
            
            {/* Stats Cards */}
            <div className="row mb-4">
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-primary shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                        Total Members</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                                        {stats.totalMembers}
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-users fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-success shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                        Active Members</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                                        {stats.activeMembers}
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-user-check fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-info shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                                        Total Events</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                                        {stats.totalEvents}
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-calendar fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-warning shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                        Pending Attendance</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                                        {stats.pendingAttendance}
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-clipboard-check fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Quick Actions */}
            <div className="card shadow mt-4">
                <div className="card-header">
                    <h5 className="m-0 font-weight-bold text-primary">Quick Actions</h5>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-3 mb-3">
                            <Link to="/admin/members" className="btn btn-primary w-100">
                                <i className="fas fa-users me-2"></i>
                                Manage Members
                            </Link>
                        </div>
                        <div className="col-md-3 mb-3">
                            <button className="btn btn-success w-100">
                                <i className="fas fa-calendar-plus me-2"></i>
                                Create Event
                            </button>
                        </div>
                        <div className="col-md-3 mb-3">
                            <button className="btn btn-info w-100">
                                <i className="fas fa-clipboard-check me-2"></i>
                                Take Attendance
                            </button>
                        </div>
                        <div className="col-md-3 mb-3">
                            <button className="btn btn-warning w-100">
                                <i className="fas fa-bullhorn me-2"></i>
                                Announcements
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recent Activity */}
            <div className="row mt-4">
                <div className="col-md-6">
                    <div className="card shadow">
                        <div className="card-header">
                            <h6 className="m-0 font-weight-bold text-primary">Recent Members</h6>
                        </div>
                        <div className="card-body">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    John Doe
                                    <span className="badge bg-primary">Tenor</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    Mary Smith
                                    <span className="badge bg-success">Soprano</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    David Brown
                                    <span className="badge bg-info">Bass</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    Sarah Johnson
                                    <span className="badge bg-warning">Alto</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div className="col-md-6">
                    <div className="card shadow">
                        <div className="card-header">
                            <h6 className="m-0 font-weight-bold text-success">Upcoming Events</h6>
                        </div>
                        <div className="card-body">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h6 className="mb-1">Weekly Rehearsal</h6>
                                        <small>Dec 10</small>
                                    </div>
                                    <p className="mb-1">6:00 PM - Main Hall</p>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h6 className="mb-1">Sunday Service</h6>
                                        <small>Dec 15</small>
                                    </div>
                                    <p className="mb-1">10:00 AM - Sanctuary</p>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h6 className="mb-1">Christmas Concert</h6>
                                        <small>Dec 24</small>
                                    </div>
                                    <p className="mb-1">7:00 PM - Auditorium</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;