import React, { useState } from 'react';

function MemberProfile() {
    const [member] = useState({
        name: 'John Doe',
        email: 'john@nehilot.com',
        phone: '0781234567',
        voicePart: 'Tenor',
        joinDate: '2024-01-15',
        status: 'Active',
        address: 'Kigali, Rwanda',
        emergencyContact: '0789876543'
    });

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-4">
                    <div className="card shadow">
                        <div className="card-body text-center">
                            <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto mb-3"
                                 style={{width: '100px', height: '100px', fontSize: '2.5rem'}}>
                                JD
                            </div>
                            <h4>{member.name}</h4>
                            <p className="text-muted">Choir Member</p>
                            <div className="mb-3">
                                <span className={`badge ${member.status === 'Active' ? 'bg-success' : 'bg-warning'}`}>
                                    {member.status}
                                </span>
                                <span className="badge bg-info ms-2">{member.voicePart}</span>
                            </div>
                            <button className="btn btn-primary btn-sm">
                                <i className="fas fa-edit me-1"></i> Edit Profile
                            </button>
                        </div>
                    </div>
                </div>
                
                <div className="col-md-8">
                    <div className="card shadow">
                        <div className="card-header bg-light">
                            <h5 className="mb-0">Member Information</h5>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label text-muted">Full Name</label>
                                    <p className="form-control-plaintext">{member.name}</p>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label text-muted">Email Address</label>
                                    <p className="form-control-plaintext">{member.email}</p>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label text-muted">Phone Number</label>
                                    <p className="form-control-plaintext">{member.phone}</p>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label text-muted">Voice Part</label>
                                    <p className="form-control-plaintext">{member.voicePart}</p>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label text-muted">Join Date</label>
                                    <p className="form-control-plaintext">{member.joinDate}</p>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label text-muted">Emergency Contact</label>
                                    <p className="form-control-plaintext">{member.emergencyContact}</p>
                                </div>
                                <div className="col-md-12 mb-3">
                                    <label className="form-label text-muted">Address</label>
                                    <p className="form-control-plaintext">{member.address}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="card shadow mt-4">
                        <div className="card-header bg-light">
                            <h5 className="mb-0">Choir Statistics</h5>
                        </div>
                        <div className="card-body">
                            <div className="row text-center">
                                <div className="col-md-4 mb-3">
                                    <div className="card bg-light">
                                        <div className="card-body">
                                            <h2 className="text-primary">85%</h2>
                                            <p className="text-muted mb-0">Attendance Rate</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <div className="card bg-light">
                                        <div className="card-body">
                                            <h2 className="text-success">24</h2>
                                            <p className="text-muted mb-0">Events Attended</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <div className="card bg-light">
                                        <div className="card-body">
                                            <h2 className="text-info">3</h2>
                                            <p className="text-muted mb-0">Suggestions Made</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MemberProfile;