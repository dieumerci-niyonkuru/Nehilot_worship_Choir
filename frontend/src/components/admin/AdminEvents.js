import React, { useState } from 'react';

function AdminEvents() {
    const [events, setEvents] = useState([
        { id: 1, title: 'Weekly Rehearsal', date: '2024-12-10', time: '18:00', type: 'Rehearsal', location: 'Main Hall', status: 'Scheduled' },
        { id: 2, title: 'Sunday Worship Service', date: '2024-12-15', time: '10:00', type: 'Performance', location: 'Sanctuary', status: 'Scheduled' },
        { id: 3, title: 'Christmas Concert', date: '2024-12-24', time: '19:00', type: 'Performance', location: 'Church Auditorium', status: 'Scheduled' }
    ]);

    const [showForm, setShowForm] = useState(false);
    const [newEvent, setNewEvent] = useState({
        title: '',
        date: '',
        time: '',
        type: 'Rehearsal',
        location: ''
    });

    const handleInputChange = (e) => {
        setNewEvent({
            ...newEvent,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newEvt = {
            id: events.length + 1,
            ...newEvent,
            status: 'Scheduled'
        };
        setEvents([...events, newEvt]);
        setNewEvent({ title: '', date: '', time: '', type: 'Rehearsal', location: '' });
        setShowForm(false);
        alert('Event created successfully!');
    };

    const deleteEvent = (id) => {
        if (window.confirm('Delete this event?')) {
            setEvents(events.filter(event => event.id !== id));
        }
    };

    return (
        <div className="container mt-4">
            <div className="card shadow">
                <div className="card-header bg-success text-white d-flex justify-content-between align-items-center">
                    <h4 className="mb-0">Event Management</h4>
                    <button 
                        className="btn btn-light btn-sm"
                        onClick={() => setShowForm(!showForm)}
                    >
                        <i className="fas fa-plus me-1"></i>
                        Create Event
                    </button>
                </div>

                {showForm && (
                    <div className="card-body border-bottom">
                        <h5>Create New Event</h5>
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label>Event Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="title"
                                        value={newEvent.title}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label>Event Type</label>
                                    <select
                                        className="form-control"
                                        name="type"
                                        value={newEvent.type}
                                        onChange={handleInputChange}
                                    >
                                        <option value="Rehearsal">Rehearsal</option>
                                        <option value="Performance">Performance</option>
                                        <option value="Meeting">Meeting</option>
                                        <option value="Workshop">Workshop</option>
                                        <option value="Social">Social</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 mb-3">
                                    <label>Date</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        name="date"
                                        value={newEvent.date}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label>Time</label>
                                    <input
                                        type="time"
                                        className="form-control"
                                        name="time"
                                        value={newEvent.time}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label>Location</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="location"
                                        value={newEvent.location}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="d-flex justify-content-end">
                                <button type="button" className="btn btn-secondary me-2" onClick={() => setShowForm(false)}>
                                    Cancel
                                </button>
                                <button type="submit" className="btn btn-success">
                                    Create Event
                                </button>
                            </div>
                        </form>
                    </div>
                )}

                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Title</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Type</th>
                                    <th>Location</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {events.map(event => (
                                    <tr key={event.id}>
                                        <td>{event.id}</td>
                                        <td>{event.title}</td>
                                        <td>{event.date}</td>
                                        <td>{event.time}</td>
                                        <td><span className="badge bg-info">{event.type}</span></td>
                                        <td>{event.location}</td>
                                        <td>
                                            <span className="badge bg-success">{event.status}</span>
                                        </td>
                                        <td>
                                            <div className="btn-group btn-group-sm">
                                                <button className="btn btn-outline-primary me-1">
                                                    <i className="fas fa-edit"></i>
                                                </button>
                                                <button 
                                                    className="btn btn-outline-danger"
                                                    onClick={() => deleteEvent(event.id)}
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
                </div>
            </div>
        </div>
    );
}

export default AdminEvents;