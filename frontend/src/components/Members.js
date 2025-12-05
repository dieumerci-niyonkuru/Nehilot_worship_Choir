import React, { useState, useEffect } from 'react';

function Members() {
  const [members, setMembers] = useState([
    { member_id: 1, first_name: 'John', last_name: 'Doe', email: 'john@nehilot.com', phone: '0781234567', voice_part: 'Tenor', join_date: '2024-01-15', status: 'Active' },
    { member_id: 2, first_name: 'Mary', last_name: 'Smith', email: 'mary@nehilot.com', phone: '0782345678', voice_part: 'Soprano', join_date: '2024-02-01', status: 'Active' },
    { member_id: 3, first_name: 'David', last_name: 'Brown', email: 'david@nehilot.com', phone: '0783456789', voice_part: 'Bass', join_date: '2024-01-20', status: 'Active' }
  ]);
  const [loading, setLoading] = useState(false);
  
  const deleteMember = (memberId) => {
    if (window.confirm('Are you sure you want to delete this member?')) {
      setMembers(members.filter(member => member.member_id !== memberId));
      alert('Member deleted successfully');
    }
  };

  return (
    <div className="members">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Choir Members</h2>
        <button className="btn btn-primary">+ Add New Member</button>
      </div>

      <div className="card">
        <div className="card-body">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Voice Part</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {members.map(member => (
                <tr key={member.member_id}>
                  <td>{member.member_id}</td>
                  <td>{member.first_name} {member.last_name}</td>
                  <td>{member.email}</td>
                  <td>{member.phone}</td>
                  <td><span className="badge bg-info">{member.voice_part}</span></td>
                  <td>
                    <span className={`badge ${member.status === 'Active' ? 'bg-success' : 'bg-warning'}`}>
                      {member.status}
                    </span>
                  </td>
                  <td>
                    <button className="btn btn-sm btn-outline-primary me-1">Edit</button>
                    <button 
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => deleteMember(member.member_id)}
                    >
                      Delete
                    </button>
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

export default Members;