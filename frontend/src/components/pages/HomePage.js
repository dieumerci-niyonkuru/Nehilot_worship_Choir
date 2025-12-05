import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <>
            {/* Hero Section */}
            <section className="hero-section bg-dark text-white py-5">
                <div className="container py-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h1 className="display-4 fw-bold mb-4">
                                Welcome to <span className="text-primary">Nehilot Worship</span>
                            </h1>
                            <p className="lead mb-4">
                                Experience the power of worship through music. Join our vibrant choir community 
                                at IPRC Tumba and be part of something extraordinary.
                            </p>
                            <div className="d-flex flex-wrap gap-3">
                                <Link to="/register" className="btn btn-primary btn-lg px-4">
                                    <i className="fas fa-user-plus me-2"></i>
                                    Join Our Choir
                                </Link>
                                <Link to="/login" className="btn btn-success btn-lg px-4">
                                    <i className="fas fa-sign-in-alt me-2"></i>
                                    Member Login
                                </Link>
                                <Link to="/leader-login" className="btn btn-warning btn-lg px-4">
                                    <i className="fas fa-crown me-2"></i>
                                    Leader Login
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6 text-center">
                            <i className="fas fa-music text-primary" style={{fontSize: '15rem', opacity: 0.5}}></i>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-5">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="fw-bold">Choir Management System</h2>
                        <p className="text-muted">Modern digital solution for choir excellence</p>
                    </div>
                    
                    <div className="row g-4">
                        {[
                            {
                                icon: 'fas fa-user-plus',
                                title: 'Member Registration',
                                description: 'Easy online registration for new choir members'
                            },
                            {
                                icon: 'fas fa-calendar-check',
                                title: 'Event Management',
                                description: 'Schedule and manage rehearsals and performances'
                            },
                            {
                                icon: 'fas fa-clipboard-check',
                                title: 'Attendance Tracking',
                                description: 'Digital attendance system with reports'
                            },
                            {
                                icon: 'fas fa-chart-line',
                                title: 'Admin Dashboard',
                                description: 'Comprehensive admin panel for choir management'
                            },
                            {
                                icon: 'fas fa-users-cog',
                                title: 'Member Dashboard',
                                description: 'Personal dashboard for each choir member'
                            },
                            {
                                icon: 'fas fa-bullhorn',
                                title: 'Announcements',
                                description: 'Send announcements to all choir members'
                            }
                        ].map((feature, index) => (
                            <div key={index} className="col-md-4">
                                <div className="card border-0 shadow-sm h-100">
                                    <div className="card-body text-center p-4">
                                        <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                                             style={{width: '70px', height: '70px'}}>
                                            <i className={`${feature.icon} text-primary fa-2x`}></i>
                                        </div>
                                        <h5 className="fw-bold">{feature.title}</h5>
                                        <p className="text-muted">{feature.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Admin Section */}
            <section className="bg-light py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h3 className="fw-bold mb-3">Leader & Admin Access</h3>
                            <p className="mb-4">
                                Choir leaders and administrators can manage all choir activities, members, events, and announcements.
                            </p>
                            <div className="card bg-warning text-dark">
                                <div className="card-body">
                                    {/* <h5>Leader Login:</h5> */}
                                    {/* <p className="mb-1"><strong>Username:</strong> Leader</p>
                                    <p className="mb-0"><strong>Password:</strong> Nehilot@2024</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">System Features</h5>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            <i className="fas fa-check text-success me-2"></i>
                                            Complete Member Management
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fas fa-check text-success me-2"></i>
                                            Event Scheduling & Calendar
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fas fa-check text-success me-2"></i>
                                            Digital Attendance System
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fas fa-check text-success me-2"></i>
                                            Member-Leader Messaging
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fas fa-check text-success me-2"></i>
                                            Announcements & Notifications
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HomePage;