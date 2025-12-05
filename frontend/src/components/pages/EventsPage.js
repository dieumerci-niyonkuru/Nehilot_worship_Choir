import React, { useState } from 'react';

function EventsPage() {
    const [events] = useState([
        { id: 1, title: 'Weekly Rehearsal', date: '2024-12-10', time: '18:00', type: 'Rehearsal', location: 'Main Hall' },
        { id: 2, title: 'Sunday Worship Service', date: '2024-12-15', time: '10:00', type: 'Performance', location: 'Sanctuary' },
        { id: 3, title: 'Christmas Concert', date: '2024-12-24', time: '19:00', type: 'Performance', location: 'Church Auditorium' },
        { id: 4, title: 'Choir Meeting', date: '2024-12-05', time: '17:00', type: 'Meeting', location: 'Conference Room' },
        { id: 5, title: 'Voice Training Workshop', date: '2024-12-12', time: '16:00', type: 'Workshop', location: 'Music Room' },
        { id: 6, title: 'Community Outreach', date: '2024-12-20', time: '15:00', type: 'Social', location: 'Community Center' }
    ]);

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Choir Events</h2>
            
            <div className="row">
                {events.map(event => (
                    <div key={event.id} className="col-md-4 mb-4">
                        <div className="card shadow h-100">
                            <div className="card-header bg-success text-white">
                                <h5 className="mb-0">{event.title}</h5>
                            </div>
                            <div className="card-body">
                                <p><strong>Date:</strong> {event.date}</p>
                                <p><strong>Time:</strong> {event.time}</p>
                                <p><strong>Type:</strong> <span className="badge bg-info">{event.type}</span></p>
                                <p><strong>Location:</strong> {event.location}</p>
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-sm btn-outline-primary w-100">
                                    <i className="fas fa-calendar-plus me-1"></i>
                                    Add to Calendar
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="card shadow mt-4">
                <div className="card-header bg-primary text-white">
                    <h5 className="mb-0">Event Calendar</h5>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead>
                                <tr className="table-primary">
                                    <th>Date</th>
                                    <th>Event</th>
                                    <th>Time</th>
                                    <th>Type</th>
                                    <th>Location</th>
                                </tr>
                            </thead>
                            <tbody>
                                {events.map(event => (
                                    <tr key={event.id}>
                                        <td>{event.date}</td>
                                        <td>{event.title}</td>
                                        <td>{event.time}</td>
                                        <td><span className="badge bg-info">{event.type}</span></td>
                                        <td>{event.location}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventsPage;