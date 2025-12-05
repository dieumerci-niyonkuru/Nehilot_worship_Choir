import React, { useState, useEffect } from 'react';

function MemberMessages() {
    const [messages, setMessages] = useState([
        { id: 1, subject: 'Voice Part Question', message: 'Which voice part should I practice?', type: 'Question', status: 'Replied', reply: 'Please attend voice assessment session this Friday.', date: '2024-12-01' },
        { id: 2, subject: 'Rehearsal Time', message: 'Can we start rehearsals 30 minutes earlier?', type: 'Suggestion', status: 'New', reply: null, date: '2024-12-03' },
        { id: 3, subject: 'Thank you', message: 'Thanks for the great training session!', type: 'Feedback', status: 'Replied', reply: 'Thank you for your feedback!', date: '2024-11-28' }
    ]);

    const [showForm, setShowForm] = useState(false);
    const [newMessage, setNewMessage] = useState({
        subject: '',
        message: '',
        type: 'Question'
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewMessage(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newMsg = {
            id: messages.length + 1,
            subject: newMessage.subject,
            message: newMessage.message,
            type: newMessage.type,
            status: 'New',
            reply: null,
            date: new Date().toISOString().split('T')[0]
        };
        setMessages([newMsg, ...messages]);
        setNewMessage({ subject: '', message: '', type: 'Question' });
        setShowForm(false);
        alert('Message sent to leader successfully!');
    };

    return (
        <div className="container mt-4">
            <div className="card shadow">
                <div className="card-header bg-info text-white d-flex justify-content-between align-items-center">
                    <h4 className="mb-0">
                        <i className="fas fa-envelope me-2"></i>
                        Messages to Leaders
                    </h4>
                    <button 
                        className="btn btn-light btn-sm"
                        onClick={() => setShowForm(!showForm)}
                    >
                        <i className="fas fa-plus me-1"></i>
                        New Message
                    </button>
                </div>

                {showForm && (
                    <div className="card-body border-bottom">
                        <h5>Send Message to Leader</h5>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Subject</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="subject"
                                    value={newMessage.subject}
                                    onChange={handleInputChange}
                                    placeholder="Enter message subject"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Message Type</label>
                                <select
                                    className="form-control"
                                    name="type"
                                    value={newMessage.type}
                                    onChange={handleInputChange}
                                >
                                    <option value="Question">Question</option>
                                    <option value="Suggestion">Suggestion</option>
                                    <option value="Feedback">Feedback</option>
                                    <option value="Complaint">Complaint</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Message</label>
                                <textarea
                                    className="form-control"
                                    name="message"
                                    value={newMessage.message}
                                    onChange={handleInputChange}
                                    rows="4"
                                    placeholder="Type your message to the choir leader..."
                                    required
                                />
                            </div>
                            <div className="d-flex justify-content-end">
                                <button type="button" className="btn btn-secondary me-2" onClick={() => setShowForm(false)}>
                                    Cancel
                                </button>
                                <button type="submit" className="btn btn-primary">
                                    <i className="fas fa-paper-plane me-1"></i>
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                )}

                <div className="card-body">
                    <h5>My Messages</h5>
                    {messages.length === 0 ? (
                        <p className="text-muted">No messages sent yet.</p>
                    ) : (
                        <div className="list-group">
                            {messages.map(msg => (
                                <div key={msg.id} className="list-group-item">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h6 className="mb-1">{msg.subject}</h6>
                                        <small>{msg.date}</small>
                                    </div>
                                    <p className="mb-2">{msg.message}</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <span className={`badge ${
                                                msg.type === 'Question' ? 'bg-primary' :
                                                msg.type === 'Suggestion' ? 'bg-success' :
                                                msg.type === 'Feedback' ? 'bg-info' : 'bg-warning'
                                            }`}>
                                                {msg.type}
                                            </span>
                                            <span className={`badge ms-2 ${
                                                msg.status === 'New' ? 'bg-danger' :
                                                msg.status === 'Replied' ? 'bg-success' : 'bg-secondary'
                                            }`}>
                                                {msg.status}
                                            </span>
                                        </div>
                                        {msg.reply && (
                                            <button 
                                                className="btn btn-sm btn-outline-info"
                                                onClick={() => alert(`Leader's Reply: ${msg.reply}`)}
                                            >
                                                <i className="fas fa-reply me-1"></i>
                                                View Reply
                                            </button>
                                        )}
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

export default MemberMessages;