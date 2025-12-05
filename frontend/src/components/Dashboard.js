import React from 'react';

function Dashboard({ user }) {
  const handleLogout = () => {
    window.location.href = '/login';
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Welcome, {user.username}!</h1>
      <p>Role: {user.role}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;