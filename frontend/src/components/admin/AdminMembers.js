import React, { useState, useEffect } from 'react';

function AdminMembers() {
    const [members, setMembers] = useState([
        { id: 1, name: 'John Doe', email: 'john@nehilot.com', phone: '0781234567', voice: 'Tenor', status: 'Active', joinDate: '2024-01-15' },
        { id: 2, name: 'Mary Smith', email: 'mary@nehilot.com', phone: '0782345678', voice: 'Soprano', status: 'Active', joinDate: '2024-02-01' },
        { id: 3, name: 'David Brown', email: 'david@nehilot.com', phone: '0783456789', voice: 'Bass', status: 'Active', joinDate: '2024-01-20' },
        { id: 4, name: 'Sarah Johnson', email: 'sarah@nehilot.com', phone: '0784567890', voice: 'Alto', status: 'Inactive', joinDate: '2024-03-10' }
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('All');

    const deleteMember = (id) => {
        if (window.confirm('Are you sure you want to delete this member?')) {
            setMembers(members.filter(member => member.id !== id));
            alert('Member deleted successfully');
        }
    };

    const filteredMembers = members.filter(member => {
        const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            member.email.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = filterStatus === 'All' || member.status === filterStatus;
        return matchesSearch && matchesStatus;
    });

    return (
        <div className="container mt-4">
            <div className="card shadow">
                <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
                    <h4 className="mb-0">Member Management</h4>
                    <button className="btn btn-light btn-sm">
                        <i className="fas fa-user-plus me-1"></i> Add New Member
                    </button>
                </div>
                
                <div className="card-body">
                    {/* Filters */}
                    <div className="row mb-4">
                        <div className="col-md-6">
                            <div className="input-group">
                                <span className="input-group-text">
                                    <i className="fas fa-search"></i>
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search members by name or email..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <select 
                                className="form-control"
                                value={filterStatus}
                                onChange={(e) => setFilterStatus(e.target.value)}
                            >
                                <option value="All">All Status</option>
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                                <option value="Probation">Probation</option>
                            </select>
                        </div>
                        <div className="col-md-3 text-end">
                            <button className="btn btn-outline-primary">
                                <i className="fas fa-download me-1"></i> Export
                            </button>
                        </div>
                    </div>

                    {/* Members Table */}
                    <div className="table-responsive">
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Voice Part</th>
                                    <th>Status</th>
                                    <th>Join Date</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredMembers.map(member => (
                                    <tr key={member.id}>
                                        <td>{member.id}</td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center me-2"
                                                     style={{width: '35px', height: '35px'}}>
                                                    {member.name.charAt(0)}
                                                </div>
                                                {member.name}
                                            </div>
                                        </td>
                                        <td>{member.email}</td>
                                        <td>{member.phone}</td>
                                        <td>
                                            <span className="badge bg-info">{member.voice}</span>
                                        </td>
                                        <td>
                                            <span className={`badge ${member.status === 'Active' ? 'bg-success' : 'bg-warning'}`}>
                                                {member.status}
                                            </span>
                                        </td>
                                        <td>{member.joinDate}</td>
                                        <td>
                                            <div className="btn-group btn-group-sm">
                                                <button className="btn btn-outline-primary" title="Edit">
                                                    <i className="fas fa-edit"></i>
                                                </button>
                                                <button className="btn btn-outline-success" title="View">
                                                    <i className="fas fa-eye"></i>
                                                </button>
                                                <button 
                                                    className="btn btn-outline-danger" 
                                                    title="Delete"
                                                    onClick={() => deleteMember(member.id)}
                                                >
                                                    <i className="fas fa-trash"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Summary */}
                    <div className="row mt-4">
                        <div className="col-md-4">
                            <div className="card bg-primary text-white">
                                <div className="card-body text-center">
                                    <h5 className="card-title">Total Members</h5>
                                    <h2>{members.length}</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card bg-success text-white">
                                <div className="card-body text-center">
                                    <h5 className="card-title">Active Members</h5>
                                    <h2>{members.filter(m => m.status === 'Active').length}</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card bg-info text-white">
                                <div className="card-body text-center">
                                    <h5 className="card-title">Voice Parts</h5>
                                    <h2>4</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminMembers;