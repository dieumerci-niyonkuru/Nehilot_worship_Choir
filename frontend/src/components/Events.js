import React, { useState } from 'react';

function Events() {
  const [events] = useState([
    { id: 1, name: 'Weekly Rehearsal', date: '2024-11-20', time: '18:00', type: 'Rehearsal', location: 'Main Hall' },
    { id: 2, name: 'Sunday Service', date: '2024-11-24', time: '10:00', type: 'Performance', location: 'Church Sanctuary' },
    { id: 3, name: 'Choir Meeting', date: '2024-11-25', time: '19:00', type: 'Meeting', location: 'Conference Room' }
  ]);

  return (
    <div className="events">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Events & Calendar</h2>
        <button className="btn btn-primary">+ Add Event</button>
      </div>

      <div className="row">
        {events.map(event => (
          <div key={event.id} className="col-md-4 mb-3">
            <div className="card h-100">
              <div className="card-header">
                <h5 className="card-title mb-0">{event.name}</h5>
              </div>
              <div className="card-body">
                <p><strong>Date:</strong> {event.date}</p>
                <p><strong>Time:</strong> {event.time}</p>
                <p><strong>Type:</strong> <span className="badge bg-info">{event.type}</span></p>
                <p><strong>Location:</strong> {event.location}</p>
              </div>
              <div className="card-footer">
                <button className="btn btn-sm btn-outline-primary me-1">Edit</button>
                <button className="btn btn-sm btn-outline-success">Attendance</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;