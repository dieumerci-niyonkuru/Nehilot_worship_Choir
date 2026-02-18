import React from 'react';
import { Link } from 'react-router-dom';

function Header({ auth, onLogout }) {
    return (
        <header>
            {/* Top Bar */}
            <div className="bg-primary text-white py-2">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="d-flex align-items-center">
                                <i className="fas fa-phone-alt me-2"></i>
                                <small>+250 793 516 483</small>
                                <i className="fas fa-envelope ms-3 me-2"></i>
                                <small>nehiloth  worship@gmail.com</small>
                            </div>
                        </div>
                        <div className="col-md-6 text-end">
                            <small>
                                <i className="fas fa-map-marker-alt me-1"></i>
                                RP  Tumba college, Rwanda
                            </small>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Main Navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
                <div className="container">
                    <Link className="navbar-brand d-flex align-items-center" to="/">
                        <div className="bg-primary rounded-circle p-2 me-2">
                            <i className="fas fa-music text-white"></i>
                        </div>
                        <div>
                            <h4 className="mb-0 text-white">Nehiloth Worship</h4>
                            <small className="text-light">RP Tumba College  Choir</small>
                        </div>
                    </Link>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/events">Events</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/music">Music</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/gallery">Gallery</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                            
                            {auth && (
                                <>
                                    {auth.role === 'Leader' || auth.role === 'Admin' ? (
                                        <>
                                            <li className="nav-item dropdown">
                                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                                    <i className="fas fa-crown me-1"></i>
                                                    Admin
                                                </a>
                                                <ul className="dropdown-menu">
                                                    <li>
                                                        <Link className="dropdown-item" to="/admin">
                                                            <i className="fas fa-tachometer-alt me-2"></i>
                                                            Dashboard
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link className="dropdown-item" to="/admin/members">
                                                            <i className="fas fa-users me-2"></i>
                                                            Members
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link className="dropdown-item" to="/admin/events">
                                                            <i className="fas fa-calendar me-2"></i>
                                                            Events
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link className="dropdown-item" to="/admin/attendance">
                                                            <i className="fas fa-clipboard-check me-2"></i>
                                                            Attendance
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link className="dropdown-item" to="/admin/announcements">
                                                            <i className="fas fa-bullhorn me-2"></i>
                                                            Announcements
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link className="dropdown-item" to="/admin/reports">
                                                            <i className="fas fa-chart-bar me-2"></i>
                                                            Reports
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </>
                                    ) : (
                                        <>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/dashboard">
                                                    <i className="fas fa-tachometer-alt me-1"></i>
                                                    Dashboard
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/member/messages">
                                                    <i className="fas fa-envelope me-1"></i>
                                                    Messages
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/member/attendance">
                                                    <i className="fas fa-clipboard-check me-1"></i>
                                                    My Attendance
                                                </Link>
                                            </li>
                                        </>
                                    )}
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/profile">
                                            <i className="fas fa-user me-1"></i>
                                            Profile
                                        </Link>
                                    </li>
                                </>
                            )}
                        </ul>
                        
                        <ul className="navbar-nav ms-auto">
                            {auth ? (
                                <>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                            <i className="fas fa-user-circle me-1"></i>
                                            {auth.full_name || auth.username}
                                            <span className="badge bg-light text-primary ms-2">
                                                {auth.role}
                                            </span>
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li>
                                                <Link className="dropdown-item" to="/profile">
                                                    <i className="fas fa-user me-2"></i>
                                                    My Profile
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to="/dashboard">
                                                    <i className="fas fa-cog me-2"></i>
                                                    Settings
                                                </Link>
                                            </li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li>
                                                <button className="dropdown-item text-danger" onClick={onLogout}>
                                                    <i className="fas fa-sign-out-alt me-2"></i>
                                                    Logout
                                                </button>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item ms-2">
                                        <button 
                                            className="btn btn-outline-light btn-sm"
                                            onClick={onLogout}
                                            title="Logout"
                                        >
                                            <i className="fas fa-sign-out-alt"></i> Logout
                                        </button>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/login">
                                            <i className="fas fa-sign-in-alt me-1"></i>
                                            Member Login
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/leader-login">
                                            <i className="fas fa-crown me-1"></i>
                                            Leader Login
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link btn btn-primary btn-sm ms-2" to="/register">
                                            <i className="fas fa-user-plus me-1"></i>
                                            Join Choir
                                        </Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;