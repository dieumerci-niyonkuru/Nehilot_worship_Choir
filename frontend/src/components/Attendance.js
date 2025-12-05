import React, { useState } from 'react';

function Attendance() {
  const [attendance] = useState([
    { id: 1, member: 'John Doe', event: 'Weekly Rehearsal', date: '2024-11-13', status: 'Present' },
    { id: 2, member: 'Mary Smith', event: 'Weekly Rehearsal', date: '2024-11-13', status: 'Present' },
    { id: 3, member: 'David Brown', event: 'Weekly Rehearsal', date: '2024-11-13', status: 'Absent' }
  ]);

  return (
    <div className="attendance">
      <h2 className="mb-4">Attendance Tracking</h2>
      
      <div className="card">
        <div className="card-header">
          <h5>Recent Attendance Records</h5>
        </div>
        <div className="card-body">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Member</th>
                <th>Event</th>
                <th>Date</th>
                <th>Status</th>
                <th>Actions</th>
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
                      record.status === 'Absent' ? 'bg-danger' : 'bg-warning'
                    }`}>
                      {record.status}
                    </span>
                  </td>
                  <td>
                    <button className="btn btn-sm btn-outline-primary">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Attendance;