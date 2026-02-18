import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    const [currentFeature, setCurrentFeature] = useState(0);

    const features = [
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
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentFeature((prev) => (prev + 1) % features.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {/* Hero Section with Enhanced Design */}
            <section className="hero-section bg-gradient-to-r from-dark via-dark to-primary text-white py-5 position-relative overflow-hidden">
                <div className="position-absolute top-0 start-0 w-100 h-100" 
                     style={{
                         backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(13, 110, 253, 0.15) 0%, transparent 50%)'
                     }}>
                </div>
                
                <div className="container py-5 position-relative z-1">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h1 className="display-4 fw-bold mb-4 animate__animated animate__fadeInUp">
                                Welcome to <span className="text-warning">Nehilot Worship</span>
                            </h1>
                            <p className="lead mb-4 fs-5 animate__animated animate__fadeInUp animate__delay-1s">
                                Experience the power of worship through music. Join our vibrant choir community 
                                at IPRC Tumba and be part of something extraordinary.
                            </p>
                            <div className="d-flex flex-wrap gap-3 animate__animated animate__fadeInUp animate__delay-2s">
                                <Link to="/register" className="btn btn-warning btn-lg px-5 py-3 shadow-lg hover-scale">
                                    <i className="fas fa-user-plus me-2"></i>
                                    Join Our Choir
                                </Link>
                                <Link to="/login" className="btn btn-warning btn-lg px-5 py-3 shadow-lg hover-scale">
                                    <i className="fas fa-user-plus me-2"></i>
                                    Member Login
                                </Link>
                            </div>
                            
                            {/* Stats Section */}
                            <div className="row mt-5 pt-3 animate__animated animate__fadeInUp animate__delay-3s">
                                <div className="col-4">
                                    <div className="text-center">
                                        <h3 className="fw-bold text-warning mb-1">500+</h3>
                                        <p className="text-light mb-0">Members</p>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="text-center">
                                        <h3 className="fw-bold text-warning mb-1">100+</h3>
                                        <p className="text-light mb-0">Events</p>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="text-center">
                                        <h3 className="fw-bold text-warning mb-1">24/7</h3>
                                        <p className="text-light mb-0">Support</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 text-center position-relative">
                            <div className="position-relative">
                                <i className="fas fa-music text-warning" 
                                   style={{
                                       fontSize: '15rem',
                                       opacity: 0.7,
                                       filter: 'drop-shadow(0 0 20px rgba(255,193,7,0.3))'
                                   }}>
                                </i>
                                <div className="position-absolute top-50 start-50 translate-middle rounded-circle"
                                     style={{
                                         width: '250px',
                                         height: '250px',
                                         background: 'radial-gradient(circle, rgba(255,193,7,0.2) 0%, transparent 70%)',
                                         zIndex: -1
                                     }}>
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="d-flex justify-content-center align-items-center gap-3">
                                    <div className="bg-warning rounded-pill p-2 px-3 d-flex align-items-center shadow">
                                        <i className="fas fa-play me-2"></i>
                                        <span>Live Now</span>
                                    </div>
                                    <div className="text-light">
                                        <i className="fas fa-headphones me-2"></i>
                                        <span>Join our worship session</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Animated Background Elements */}
                <div className="position-absolute bottom-0 start-0 w-100 overflow-hidden">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                              fill="rgba(255,255,255,0.1)"></path>
                    </svg>
                </div>
            </section>

            {/* Features Section with Enhanced Cards */}
            <section className="py-5 bg-light">
                <div className="container">
                    <div className="text-center mb-5">
                        <span className="badge bg-warning text-dark mb-3 px-3 py-2 rounded-pill">
                            <i className="fas fa-star me-2"></i>Premium Features
                        </span>
                        <h2 className="fw-bold display-5 mb-3">Choir Management System</h2>
                        <p className="text-muted fs-5">Modern digital solution for choir excellence</p>
                    </div>
                    
                    {/* Featured Card Highlight */}
                    <div className="row mb-5">
                        <div className="col-12">
                            <div className="card border-0 shadow-lg bg-gradient-to-r from-primary to-info text-white overflow-hidden">
                                <div className="card-body p-4">
                                    <div className="row align-items-center">
                                        <div className="col-md-8">
                                            <div className="d-flex align-items-center mb-3">
                                                <div className="bg-white bg-opacity-20 rounded-circle p-3 me-3">
                                                    <i className={`${features[currentFeature].icon} fa-2x`}></i>
                                                </div>
                                                <div>
                                                    <h4 className="fw-bold mb-1">{features[currentFeature].title}</h4>
                                                    <p className="mb-0 opacity-75">{features[currentFeature].description}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 text-end">
                                            <div className="d-flex justify-content-end">
                                                {features.map((_, index) => (
                                                    <button
                                                        key={index}
                                                        className={`btn btn-sm mx-1 rounded-circle ${index === currentFeature ? 'bg-white' : 'bg-white bg-opacity-25'}`}
                                                        style={{width: '12px', height: '12px'}}
                                                        onClick={() => setCurrentFeature(index)}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Features Grid */}
                    <div className="row g-4">
                        {features.map((feature, index) => (
                            <div key={index} className="col-md-6 col-lg-4">
                                <div className="card border-0 shadow-sm h-100 hover-card transition-all"
                                     onMouseEnter={() => setCurrentFeature(index)}>
                                    <div className="card-body text-center p-4 position-relative">
                                        <div className="position-absolute top-0 start-50 translate-middle mt-4">
                                            <div className={`bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center ${index === currentFeature ? 'shadow-lg scale-110' : ''}`}
                                                 style={{width: '80px', height: '80px'}}>
                                                <i className={`${feature.icon} text-primary fa-2x`}></i>
                                            </div>
                                        </div>
                                        <div className="pt-5 mt-4">
                                            <h5 className="fw-bold mb-3">{feature.title}</h5>
                                            <p className="text-muted mb-0">{feature.description}</p>
                                        </div>
                                        <div className="mt-4">
                                            <Link to={index % 2 === 0 ? "/register" : "/login"} 
                                                  className="text-primary text-decoration-none small fw-bold">
                                                Learn More <i className="fas fa-arrow-right ms-1"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Admin Section Enhanced */}
            <section className="py-5 bg-gradient-to-b from-light to-white">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <div className="position-relative">
                                <div className="position-absolute top-0 start-0 bg-warning rounded-circle"
                                     style={{width: '50px', height: '50px', opacity: 0.1}}></div>
                                <div className="position-absolute bottom-0 end-0 bg-primary rounded-circle"
                                     style={{width: '30px', height: '30px', opacity: 0.1}}></div>
                                
                                <h3 className="fw-bold display-6 mb-4 position-relative z-1">
                                    <span className="text-primary">Admin</span> Dashboard
                                </h3>
                                <p className="lead mb-4 position-relative z-1">
                                    Complete control over choir management with powerful analytics and reporting tools.
                                </p>
                                
                                <div className="card border-0 shadow-lg hover-lift transition-all">
                                    <div className="card-body p-4">
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="bg-primary bg-opacity-10 rounded-circle p-3 me-3">
                                                <i className="fas fa-lock text-primary fa-2x"></i>
                                            </div>
                                            <div>
                                                <h5 className="fw-bold mb-0">Secure Access</h5>
                                                <p className="text-muted small mb-0">Protected admin panel</p>
                                            </div>
                                        </div>
                                        <div className="row g-2">
                                            <div className="col-6">
                                                <div className="d-flex align-items-center">
                                                    <i className="fas fa-check-circle text-success me-2"></i>
                                                    <span className="small">Full Access</span>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="d-flex align-items-center">
                                                    <i className="fas fa-check-circle text-success me-2"></i>
                                                    <span className="small">Analytics</span>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="d-flex align-items-center">
                                                    <i className="fas fa-check-circle text-success me-2"></i>
                                                    <span className="small">Reports</span>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="d-flex align-items-center">
                                                    <i className="fas fa-check-circle text-success me-2"></i>
                                                    <span className="small">Export Data</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-6">
                            <div className="card border-0 shadow-lg hover-scale transition-all">
                                <div className="card-header bg-primary text-white py-3">
                                    <h5 className="mb-0">
                                        <i className="fas fa-cogs me-2"></i>
                                        System Features
                                    </h5>
                                </div>
                                <div className="card-body p-0">
                                    <div className="list-group list-group-flush">
                                        {[
                                            {icon: 'fas fa-users', text: 'Complete Member Management'},
                                            {icon: 'fas fa-calendar-alt', text: 'Event Scheduling & Calendar'},
                                            {icon: 'fas fa-clipboard-list', text: 'Digital Attendance System'},
                                            {icon: 'fas fa-comments', text: 'Member Suggestions & Feedback'},
                                            {icon: 'fas fa-chart-bar', text: 'Advanced Analytics Dashboard'},
                                            {icon: 'fas fa-bell', text: 'Automated Notifications'},
                                            {icon: 'fas fa-file-export', text: 'Report Generation'},
                                            {icon: 'fas fa-database', text: 'Data Backup & Recovery'}
                                        ].map((item, index) => (
                                            <div key={index} className="list-group-item border-0 py-3 hover-bg-light">
                                                <div className="d-flex align-items-center">
                                                    <div className="bg-primary bg-opacity-10 rounded-circle p-2 me-3">
                                                        <i className={`${item.icon} text-primary`}></i>
                                                    </div>
                                                    <span className="fw-medium">{item.text}</span>
                                                    <i className="fas fa-check-circle text-success ms-auto"></i>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="card-footer bg-light border-0 py-3">
                                    <Link to="/login" className="btn btn-primary w-100 py-2">
                                        <i className="fas fa-sign-in-alt me-2"></i>
                                        Access Admin Panel
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonial/Quote Section */}
            <section className="py-5 bg-dark text-white">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <i className="fas fa-quote-left text-warning fa-3x mb-4 opacity-50"></i>
                            <blockquote className="fs-3 fst-italic mb-4">
                                "The Nehilot Worship Choir Management System has transformed how we organize 
                                our choir activities. It's made everything more efficient and connected."
                            </blockquote>
                            <div className="d-flex align-items-center justify-content-center">
                                <div className="rounded-circle bg-warning d-flex align-items-center justify-content-center me-3"
                                     style={{width: '50px', height: '50px'}}>
                                    <i className="fas fa-user text-dark"></i>
                                </div>
                                <div className="text-start">
                                    <h6 className="mb-0">Choir Director</h6>
                                    <small className="text-light opacity-75">IPRC Tumba</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <div className="card border-0 shadow-lg bg-gradient-to-r from-primary to-info text-white overflow-hidden">
                                <div className="card-body p-5 position-relative">
                                    <div className="position-absolute top-0 end-0 opacity-10">
                                        <i className="fas fa-music fa-10x"></i>
                                    </div>
                                    <h2 className="display-6 fw-bold mb-3">Ready to Join Us?</h2>
                                    <p className="fs-5 mb-4 opacity-90">
                                        Become part of our growing worship community. Experience the joy of singing together.
                                    </p>
                                    <div className="d-flex flex-wrap gap-3 justify-content-center">
                                        <Link to="/register" className="btn btn-light btn-lg px-5 py-3 fw-bold">
                                            <i className="fas fa-user-plus me-2"></i>
                                            Register Now
                                        </Link>
                                        <Link to="/contact" className="btn btn-outline-light btn-lg px-5 py-3">
                                            <i className="fas fa-question-circle me-2"></i>
                                            Learn More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Add CSS for animations and hover effects */}
            <style jsx>{`
                .hover-scale {
                    transition: transform 0.3s ease;
                }
                .hover-scale:hover {
                    transform: translateY(-5px);
                }
                .hover-card {
                    transition: all 0.3s ease;
                }
                .hover-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 10px 30px rgba(0,0,0,0.1) !important;
                }
                .hover-lift {
                    transition: all 0.3s ease;
                }
                .hover-lift:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 8px 25px rgba(0,0,0,0.15) !important;
                }
                .hover-bg-light:hover {
                    background-color: rgba(13, 110, 253, 0.05) !important;
                }
                .transition-all {
                    transition: all 0.3s ease;
                }
                .scale-110 {
                    transform: scale(1.1);
                }
            `}</style>
        </>
    );
}

export default HomePage;