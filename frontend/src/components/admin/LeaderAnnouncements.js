import React, { useState, useEffect } from 'react';

function LeaderAnnouncements() {
    const [announcements, setAnnouncements] = useState([
        { id: 1, title: 'Christmas Concert Rehearsal', content: 'Special rehearsal for Christmas concert this Friday at 6 PM.', type: 'Important', date: '2024-12-04', createdBy: 'Choir Leader' },
        { id: 2, title: 'New Choir Uniforms', content: 'New uniforms have arrived. Please collect after rehearsal.', type: 'General', date: '2024-12-01', createdBy: 'Choir Leader' },
        { id: 3, title: 'Voice Assessment Session', content: 'Voice part assessment for new members on Saturday.', type: 'Event', date: '2024-11-28', createdBy: 'Choir Leader' }
    ]);

    const [messages, setMessages] = useState([
        { id: 1, member: 'John Doe', subject: 'Voice Part Question', message: 'Which voice part should I practice?', status: 'Replied', date: '2024-12-01' },
        { id: 2, member: 'Mary Smith', subject: 'Rehearsal Time', message: 'Can we start rehearsals 30 minutes earlier?', status: 'New', date: '2024-12-03' },
        { id: 3, member: 'David Brown', subject: 'Thank you', message: 'Thanks for the great training session!', status: 'Replied', date: '2024-11-28' }
    ]);

    const [showAnnouncementForm, setShowAnnouncementForm] = useState(false);
    const [newAnnouncement, setNewAnnouncement] = useState({
        title: '',
        content: '',
        type: 'General'
    });

    const [replyingTo, setReplyingTo] = useState(null);
    const [replyText, setReplyText] = useState('');

    const handleAnnouncementSubmit = (e) => {
        e.preventDefault();
        const newAnn = {
            id: announcements.length + 1,
            title: newAnnouncement.title,
            content: newAnnouncement.content,
            type: newAnnouncement.type,
            date: new Date().toISOString().split('T')[0],
            createdBy: 'Choir Leader'
        };
        setAnnouncements([newAnn, ...announcements]);
        setNewAnnouncement({ title: '', content: '', type: 'General' });
        setShowAnnouncementForm(false);
        alert('Announcement published successfully!');
    };

    const handleReply = (messageId) => {
        if (!replyText.trim()) {
            alert('Please enter a reply');
            return;
        }
        
        setMessages(messages.map(msg => 
            msg.id === messageId 
            ? { ...msg, status: 'Replied', reply: replyText }
            : msg
        ));
        setReplyingTo(null);
        setReplyText('');
        alert('Reply sent successfully!');
    };

    const deleteMessage = (messageId) => {
        if (window.confirm('Delete this message?')) {
            setMessages(messages.filter(msg => msg.id !== messageId));
        }
    };

    const deleteAnnouncement = (annId) => {
        if (window.confirm('Delete this announcement?')) {
            setAnnouncements(announcements.filter(ann => ann.id !== annId));
        }
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Leader Dashboard</h2>
            
            {/* Quick Stats */}
            <div className="row mb-4">
                <div className="col-md-3">
                    <div className="card bg-primary text-white">
                        <div className="card-body text-center">
                            <h5>Total Members</h5>
                            <h2>45</h2>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card bg-success text-white">
                        <div className="card-body text-center">
                            <h5>New Messages</h5>
                            <h2>{messages.filter(m => m.status === 'New').length}</h2>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card bg-info text-white">
                        <div className="card-body text-center">
                            <h5>Announcements</h5>
                            <h2>{announcements.length}</h2>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card bg-warning text-white">
                        <div className="card-body text-center">
                            <h5>Events</h5>
                            <h2>8</h2>
                        </div>
                    </div>
                </div>
            </div>

            {/* Messages from Members */}
            <div className="card shadow mb-4">
                <div className="card-header bg-danger text-white d-flex justify-content-between align-items-center">
                    <h5 className="mb-0">
                        <i className="fas fa-inbox me-2"></i>
                        Messages from Members
                    </h5>
                    <span className="badge bg-light text-danger">
                        {messages.filter(m => m.status === 'New').length} New
                    </span>
                </div>
                <div className="card-body">
                    {messages.length === 0 ? (
                        <p className="text-muted">No messages from members.</p>
                    ) : (
                        <div className="table-responsive">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Member</th>
                                        <th>Subject</th>
                                        <th>Message</th>
                                        <th>Date</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {messages.map(msg => (
                                        <tr key={msg.id}>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center me-2"
                                                         style={{width: '30px', height: '30px'}}>
                                                        {msg.member.charAt(0)}
                                                    </div>
                                                    {msg.member}
                                                </div>
                                            </td>
                                            <td>{msg.subject}</td>
                                            <td>
                                                <div style={{maxWidth: '200px'}}>
                                                    {msg.message.length > 50 ? msg.message.substring(0, 50) + '...' : msg.message}
                                                </div>
                                            </td>
                                            <td>{msg.date}</td>
                                            <td>
                                                <span className={`badge ${msg.status === 'New' ? 'bg-danger' : 'bg-success'}`}>
                                                    {msg.status}
                                                </span>
                                            </td>
                                            <td>
                                                <div className="btn-group btn-group-sm">
                                                    <button 
                                                        className="btn btn-outline-primary"
                                                        onClick={() => setReplyingTo(msg.id)}
                                                    >
                                                        <i className="fas fa-reply"></i>
                                                    </button>
                                                    <button 
                                                        className="btn btn-outline-danger"
                                                        onClick={() => deleteMessage(msg.id)}
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
                    )}

                    {/* Reply Form */}
                    {replyingTo && (
                        <div className="mt-4 p-3 border rounded">
                            <h6>Reply to Message</h6>
                            <div className="mb-3">
                                <textarea
                                    className="form-control"
                                    rows="3"
                                    value={replyText}
                                    onChange={(e) => setReplyText(e.target.value)}
                                    placeholder="Type your reply here..."
                                />
                            </div>
                            <div className="d-flex justify-content-end">
                                <button className="btn btn-secondary me-2" onClick={() => setReplyingTo(null)}>
                                    Cancel
                                </button>
                                <button className="btn btn-primary" onClick={() => handleReply(replyingTo)}>
                                    Send Reply
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Announcements Management */}
            <div className="card shadow">
                <div className="card-header bg-success text-white d-flex justify-content-between align-items-center">
                    <h5 className="mb-0">
                        <i className="fas fa-bullhorn me-2"></i>
                        Announcements
                    </h5>
                    <button 
                        className="btn btn-light btn-sm"
                        onClick={() => setShowAnnouncementForm(!showAnnouncementForm)}
                    >
                        <i className="fas fa-plus me-1"></i>
                        New Announcement
                    </button>
                </div>

                {showAnnouncementForm && (
                    <div className="card-body border-bottom">
                        <h6>Create New Announcement</h6>
                        <form onSubmit={handleAnnouncementSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={newAnnouncement.title}
                                    onChange={(e) => setNewAnnouncement({...newAnnouncement, title: e.target.value})}
                                    placeholder="Announcement title"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Type</label>
                                <select
                                    className="form-control"
                                    value={newAnnouncement.type}
                                    onChange={(e) => setNewAnnouncement({...newAnnouncement, type: e.target.value})}
                                >
                                    <option value="General">General</option>
                                    <option value="Important">Important</option>
                                    <option value="Event">Event</option>
                                    <option value="Rehearsal">Rehearsal</option>
                                    <option value="Achievement">Achievement</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Content</label>
                                <textarea
                                    className="form-control"
                                    rows="4"
                                    value={newAnnouncement.content}
                                    onChange={(e) => setNewAnnouncement({...newAnnouncement, content: e.target.value})}
                                    placeholder="Announcement content"
                                    required
                                />
                            </div>
                            <div className="d-flex justify-content-end">
                                <button type="button" className="btn btn-secondary me-2" onClick={() => setShowAnnouncementForm(false)}>
                                    Cancel
                                </button>
                                <button type="submit" className="btn btn-success">
                                    <i className="fas fa-paper-plane me-1"></i>
                                    Publish Announcement
                                </button>
                            </div>
                        </form>
                    </div>
                )}

                <div className="card-body">
                    <h6>Published Announcements</h6>
                    {announcements.length === 0 ? (
                        <p className="text-muted">No announcements yet.</p>
                    ) : (
                        <div className="list-group">
                            {announcements.map(ann => (
                                <div key={ann.id} className="list-group-item">
                                    <div className="d-flex w-100 justify-content-between">
                                        <div>
                                            <h6 className="mb-1">{ann.title}</h6>
                                            <p className="mb-2">{ann.content}</p>
                                            <small className="text-muted">
                                                <span className={`badge ${
                                                    ann.type === 'Important' ? 'bg-danger' :
                                                    ann.type === 'Event' ? 'bg-success' :
                                                    ann.type === 'Rehearsal' ? 'bg-primary' : 'bg-secondary'
                                                }`}>
                                                    {ann.type}
                                                </span>
                                                <span className="ms-3">
                                                    <i className="fas fa-user me-1"></i>
                                                    {ann.createdBy}
                                                </span>
                                                <span className="ms-3">
                                                    <i className="fas fa-calendar me-1"></i>
                                                    {ann.date}
                                                </span>
                                            </small>
                                        </div>
                                        <button 
                                            className="btn btn-sm btn-outline-danger"
                                            onClick={() => deleteAnnouncement(ann.id)}
                                        >
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default LeaderAnnouncements;