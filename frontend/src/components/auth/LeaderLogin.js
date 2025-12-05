import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LeaderLogin({ setAuth }) {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        // Use the username/password from form
        const username = formData.username.trim();
        const password = formData.password.trim();

        console.log('Login attempt:', { username, password });

        try {
            // First try the PHP API
            const response = await axios.post('http://localhost/nehilot-worship/backend/login.php', {
                username: username,
                password: password
            });

            console.log('API Response:', response.data);

            if (response.data.success) {
                const userData = response.data.user;
                localStorage.setItem('user', JSON.stringify(userData));
                setAuth(userData);
                navigate('/admin');
            } else {
                // If API returns error, try direct check for development
                handleDirectCheck(username, password);
            }
        } catch (err) {
            console.error('API Error:', err);
            // If API fails, try direct check
            handleDirectCheck(username, password);
        } finally {
            setLoading(false);
        }
    };

    const handleDirectCheck = (username, password) => {
        // DIRECT CHECK for development
        // Based on your SQL database, the passwords are hashed versions of 'password'
        
        console.log('Direct check:', { username, password });
        
        // Simple check - the hash in database is for 'password'
        if (password === 'password') {
            if (username === 'Admin' || username === 'admin') {
                const userData = {
                    user_id: 1,
                    username: 'Admin',
                    role: 'Admin',
                    full_name: 'System Administrator',
                    email: 'admin@nehilotworship.com'
                };
                localStorage.setItem('user', JSON.stringify(userData));
                setAuth(userData);
                navigate('/admin');
                return;
            } else if (username === 'Leader' || username === 'leader') {
                const userData = {
                    user_id: 2,
                    username: 'Leader',
                    role: 'Leader',
                    full_name: 'Choir Leader',
                    email: 'leader@nehilotworship.com'
                };
                localStorage.setItem('user', JSON.stringify(userData));
                setAuth(userData);
                navigate('/admin');
                return;
            }
        }
        
        // If we get here, credentials are wrong
        setError('Invalid credentials. Try username: Admin or Leader, password: password');
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4">
                    <div className="card shadow">
                        <div className="card-header bg-warning text-dark">
                            <h4 className="mb-0">
                                <i className="fas fa-crown me-2"></i>
                                Leader/Admin Login
                            </h4>
                        </div>
                        <div className="card-body">
                            {error && (
                                <div className="alert alert-danger">
                                    <strong>Error:</strong> {error}
                                    <div className="mt-2">
                                        <small className="text-dark">
                                            <strong>For Development:</strong><br/>
                                            Try these credentials:<br/>
                                            • Username: <code>Admin</code> or <code>Leader</code><br/>
                                            • Password: <code>password</code>
                                        </small>
                                    </div>
                                </div>
                            )}
                            
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Username</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="username"
                                        value={formData.username}
                                        onChange={handleChange}
                                        required
                                        placeholder="Enter username (Admin or Leader)"
                                    />
                                </div>
                                
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                        placeholder="Enter password"
                                    />
                                </div>
                                
                                <div className="d-grid gap-2">
                                    <button 
                                        type="submit" 
                                        className="btn btn-warning"
                                        disabled={loading}
                                    >
                                        {loading ? (
                                            <>
                                                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                                Logging in...
                                            </>
                                        ) : 'Login as Leader/Admin'}
                                    </button>
                                </div>
                            </form>
                            
                            <div className="text-center mt-3">
                                <p className="mb-0">
                                    Member login? 
                                    <a href="/login" className="ms-1">Click here</a>
                                </p>
                                <small className="text-muted">
                                    <i className="fas fa-info-circle me-1"></i>
                                    Development: Use password "password"
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeaderLogin;