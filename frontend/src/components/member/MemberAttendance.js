import React, { useState } from 'react';

function MemberAttendance() {
    const [attendance] = useState([
        { id: 1, event: 'Weekly Rehearsal', date: '2024-12-10', status: 'Present' },
        { id: 2, event: 'Sunday Service', date: '2024-12-08', status: 'Present' },
        { id: 3, event: 'Weekly Rehearsal', date: '2024-12-03', status: 'Present' },
        { id: 4, event: 'Choir Meeting', date: '2024-12-01', status: 'Present' },
        { id: 5, event: 'Sunday Service', date: '2024-11-24', status: 'Absent' },
        { id: 6, event: 'Weekly Rehearsal', date: '2024-11-19', status: 'Present' },
        { id: 7, event: 'Voice Workshop', date: '2024-11-17', status: 'Late' },
        { id: 8, event: 'Sunday Service', date: '2024-11-10', status: 'Present' }
    ]);

    const calculateStats = () => {
        const total = attendance.length;
        const present = attendance.filter(a => a.status === 'Present').length;
        const absent = attendance.filter(a => a.status === 'Absent').length;
        const late = attendance.filter(a => a.status === 'Late').length;
        
        return {
            total,
            present,
            absent,
            late,
            rate: Math.round((present / total) * 100)
        };
    };

    const stats = calculateStats();

    return (
        <div className="container mt-4">
            <h2 className="mb-4">My Attendance</h2>
            
            <div className="row mb-4">
                <div className="col-md-3">
                    <div className="card bg-primary text-white">
                        <div className="card-body text-center">
                            <h5>Attendance Rate</h5>
                            <h2>{stats.rate}%</h2>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card bg-success text-white">
                        <div className="card-body text-center">
                            <h5>Present</h5>
                            <h2>{stats.present}</h2>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card bg-danger text-white">
                        <div className="card-body text-center">
                            <h5>Absent</h5>
                            <h2>{stats.absent}</h2>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card bg-warning text-white">
                        <div className="card-body text-center">
                            <h5>Late</h5>
                            <h2>{stats.late}</h2>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="card shadow">
                <div className="card-header bg-info text-white">
                    <h5 className="mb-0">Attendance History</h5>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Event</th>
                                    <th>Status</th>
                                    <th>Remarks</th>
                                </tr>
                            </thead>
                            <tbody>
                                {attendance.map(record => (
                                    <tr key={record.id}>
                                        <td>{record.date}</td>
                                        <td>{record.event}</td>
                                        <td>
                                            <span className={`badge ${
                                                record.status === 'Present' ? 'bg-success' :
                                                record.status === 'Absent' ? 'bg-danger' : 'bg-warning'
                                            }`}>
                                                {record.status}
                                            </span>
                                        </td>
                                        <td>
                                            {record.status === 'Absent' ? 'Medical Leave' :
                                             record.status === 'Late' ? 'Traffic Delay' : 'Good'}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            
            <div className="card shadow mt-4">
                <div className="card-header bg-light">
                    <h5 className="mb-0">Attendance Guidelines</h5>
                </div>
                <div className="card-body">
                    <ul>
                        <li>Members must attend at least 80% of rehearsals</li>
                        <li>Notify leaders in advance if you cannot attend</li>
                        <li>Three consecutive absences may result in suspension</li>
                        <li>Attendance is recorded 15 minutes after event start</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MemberAttendance;