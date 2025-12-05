import React from 'react';

function AdminReports() {
    return (
        <div className="container mt-4">
            <h2 className="mb-4">Reports & Analytics</h2>
            
            <div className="row">
                <div className="col-md-4 mb-4">
                    <div className="card shadow">
                        <div className="card-body text-center">
                            <i className="fas fa-users fa-3x text-primary mb-3"></i>
                            <h5>Member Reports</h5>
                            <p>Attendance, performance, and member statistics</p>
                            <button className="btn btn-outline-primary">Generate Report</button>
                        </div>
                    </div>
                </div>
                
                <div className="col-md-4 mb-4">
                    <div className="card shadow">
                        <div className="card-body text-center">
                            <i className="fas fa-calendar fa-3x text-success mb-3"></i>
                            <h5>Event Reports</h5>
                            <p>Event attendance and participation analysis</p>
                            <button className="btn btn-outline-success">Generate Report</button>
                        </div>
                    </div>
                </div>
                
                <div className="col-md-4 mb-4">
                    <div className="card shadow">
                        <div className="card-body text-center">
                            <i className="fas fa-chart-line fa-3x text-info mb-3"></i>
                            <h5>Financial Reports</h5>
                            <p>Membership fees, donations, and expenses</p>
                            <button className="btn btn-outline-info">Generate Report</button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="card shadow">
                <div className="card-header bg-warning text-dark">
                    <h5 className="mb-0">Quick Statistics</h5>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <h6>Attendance Summary (Last 30 Days)</h6>
                            <ul className="list-group">
                                <li className="list-group-item d-flex justify-content-between">
                                    <span>Total Events</span>
                                    <span className="badge bg-primary">8</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between">
                                    <span>Average Attendance</span>
                                    <span className="badge bg-success">85%</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between">
                                    <span>Most Attended Event</span>
                                    <span>Christmas Concert</span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <h6>Member Activity</h6>
                            <ul className="list-group">
                                <li className="list-group-item d-flex justify-content-between">
                                    <span>New Members (This Month)</span>
                                    <span className="badge bg-success">3</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between">
                                    <span>Messages to Leaders</span>
                                    <span className="badge bg-info">12</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between">
                                    <span>Suggestions Submitted</span>
                                    <span className="badge bg-warning">5</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminReports;