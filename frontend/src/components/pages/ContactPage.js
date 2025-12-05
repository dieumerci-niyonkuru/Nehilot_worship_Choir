import React, { useState } from 'react';

function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-8">
                    <div className="card shadow">
                        <div className="card-header bg-primary text-white">
                            <h4 className="mb-0">Contact Us</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Your Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Email Address</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                
                                <div className="mb-3">
                                    <label className="form-label">Subject</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                
                                <div className="mb-3">
                                    <label className="form-label">Message</label>
                                    <textarea
                                        className="form-control"
                                        rows="5"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>
                                
                                <button type="submit" className="btn btn-primary">
                                    <i className="fas fa-paper-plane me-1"></i>
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                
                <div className="col-md-4">
                    <div className="card shadow">
                        <div className="card-header bg-success text-white">
                            <h5 className="mb-0">Contact Information</h5>
                        </div>
                        <div className="card-body">
                            <div className="mb-4">
                                <h6><i className="fas fa-map-marker-alt text-primary me-2"></i> Address</h6>
                                <p className="mb-0">IPRC Tumba<br/>Southern Province<br/>Rwanda</p>
                            </div>
                            
                            <div className="mb-4">
                                <h6><i className="fas fa-phone text-success me-2"></i> Phone</h6>
                                <p className="mb-0">+250 793 516 483</p>
                            </div>
                            
                            <div className="mb-4">
                                <h6><i className="fas fa-envelope text-warning me-2"></i> Email</h6>
                                <p className="mb-0">nehilotworship@gmail.com</p>
                            </div>
                            
                            <div className="mb-4">
                                <h6><i className="fas fa-clock text-info me-2"></i> Rehearsal Hours</h6>
                                <p className="mb-0">
                                    Tuesday & Thursday<br/>
                                    6:00 PM - 8:00 PM
                                </p>
                            </div>
                            
                            <div className="mb-4">
                                <h6><i className="fas fa-users text-danger me-2"></i> Social Media</h6>
                                <div className="d-flex mt-2">
                                    <a href="#" className="btn btn-outline-primary btn-sm me-2">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="#" className="btn btn-outline-info btn-sm me-2">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a href="#" className="btn btn-outline-danger btn-sm me-2">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a href="#" className="btn btn-outline-success btn-sm">
                                        <i className="fab fa-whatsapp"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;