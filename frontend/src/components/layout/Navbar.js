import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ auth, onLogout }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <i className="fas fa-music me-2"></i>
                    <strong>Nehilot Worship</strong>
                </Link>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        {auth && (
                            <>
                                {auth.role === 'Admin' ? (
                                    <>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/admin/dashboard">
                                                <i className="fas fa-tachometer-alt me-1"></i>
                                                Dashboard
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/admin/members">
                                                <i className="fas fa-users me-1"></i>
                                                Members
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/admin/events">
                                                <i className="fas fa-calendar me-1"></i>
                                                Events
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/admin/attendance">
                                                <i className="fas fa-clipboard-check me-1"></i>
                                                Attendance
                                            </Link>
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/member/dashboard">
                                                <i className="fas fa-tachometer-alt me-1"></i>
                                                Dashboard
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/member/events">
                                                <i className="fas fa-calendar me-1"></i>
                                                Events
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/member/attendance">
                                                <i className="fas fa-clipboard-check me-1"></i>
                                                My Attendance
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/member/profile">
                                                <i className="fas fa-user me-1"></i>
                                                Profile
                                            </Link>
                                        </li>
                                    </>
                                )}
                            </>
                        )}
                    </ul>
                    
                    {auth && (
                        <div className="navbar-nav ms-auto">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" 
                                   role="button" data-bs-toggle="dropdown">
                                    <i className="fas fa-user-circle me-1"></i>
                                    {auth.full_name || auth.username}
                                    <span className="badge bg-light text-primary ms-2">
                                        {auth.role}
                                    </span>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li>
                                        <Link className="dropdown-item" to="/profile">
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
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;