import React, { useState } from 'react';

function AdminAttendance() {
    const [attendance, setAttendance] = useState([
        { id: 1, member: 'John Doe', event: 'Weekly Rehearsal', date: '2024-12-10', status: 'Present' },
        { id: 2, member: 'Mary Smith', event: 'Weekly Rehearsal', date: '2024-12-10', status: 'Present' },
        { id: 3, member: 'David Brown', event: 'Weekly Rehearsal', date: '2024-12-10', status: 'Late' },
        { id: 4, member: 'Sarah Johnson', event: 'Weekly Rehearsal', date: '2024-12-10', status: 'Absent' }
    ]);

    const [selectedEvent, setSelectedEvent] = useState('Weekly Rehearsal');
    const [selectedDate, setSelectedDate] = useState('2024-12-10');

    const updateStatus = (id, newStatus) => {
        setAttendance(attendance.map(record => 
            record.id === id ? { ...record, status: newStatus } : record
        ));
    };

    const events = ['Weekly Rehearsal', 'Sunday Service', 'Christmas Concert', 'Choir Meeting'];

    return (
        <div className="container mt-4">
            <div className="card shadow">
                <div className="card-header bg-info text-white">
                    <h4 className="mb-0">Attendance Management</h4>
                </div>
                <div className="card-body">
                    <div className="row mb-4">
                        <div className="col-md-4">
                            <label>Select Event</label>
                            <select 
                                className="form-control"
                                value={selectedEvent}
                                onChange={(e) => setSelectedEvent(e.target.value)}
                            >
                                {events.map(event => (
                                    <option key={event} value={event}>{event}</option>
                                ))}
                            </select>
                        </div>
                        <div className="col-md-4">
                            <label>Date</label>
                            <input
                                type="date"
                                className="form-control"
                                value={selectedDate}
                                onChange={(e) => setSelectedDate(e.target.value)}
                            />
                        </div>
                        <div className="col-md-4 d-flex align-items-end">
                            <button className="btn btn-primary w-100">
                                <i className="fas fa-save me-1"></i>
                                Save Attendance
                            </button>
                        </div>
                    </div>

                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Member</th>
                                    <th>Event</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Change Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {attendance.map(record => (
                                    <tr key={record.id}>
                                        <td>{record.member}</td>
                                        <td>{record.event}</td>
                                        <td>{record.date}</td>
                                        <td>
                                            <span className={`badge ${
                                                record.status === 'Present' ? 'bg-success' :
                                                record.status === 'Absent' ? 'bg-danger' :
                                                'bg-warning'
                                            }`}>
                                                {record.status}
                                            </span>
                                        </td>
                                        <td>
                                            <div className="btn-group btn-group-sm">
                                                <button 
                                                    className="btn btn-outline-success"
                                                    onClick={() => updateStatus(record.id, 'Present')}
                                                >
                                                    Present
                                                </button>
                                                <button 
                                                    className="btn btn-outline-danger"
                                                    onClick={() => updateStatus(record.id, 'Absent')}
                                                >
                                                    Absent
                                                </button>
                                                <button 
                                                    className="btn btn-outline-warning"
                                                    onClick={() => updateStatus(record.id, 'Late')}
                                                >
                                                    Late
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-3">
                            <div className="card bg-success text-white">
                                <div className="card-body text-center">
                                    <h5>Present</h5>
                                    <h3>{attendance.filter(a => a.status === 'Present').length}</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card bg-danger text-white">
                                <div className="card-body text-center">
                                    <h5>Absent</h5>
                                    <h3>{attendance.filter(a => a.status === 'Absent').length}</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card bg-warning text-white">
                                <div className="card-body text-center">
                                    <h5>Late</h5>
                                    <h3>{attendance.filter(a => a.status === 'Late').length}</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card bg-primary text-white">
                                <div className="card-body text-center">
                                    <h5>Total</h5>
                                    <h3>{attendance.length}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminAttendance;